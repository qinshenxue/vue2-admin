<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="header-left">
        <div class="logo">
          <svg-icon icon="mingyuanyun"></svg-icon>
        </div>
      </div>
      <div class="header-right">
        <div class="header-right-item">
          <a-badge dot>
            <a-icon class="header-right-item-icon" type="bell" />
          </a-badge>
        </div>
        <div class="header-right-item">
          <a-icon class="header-right-item-icon" type="question-circle" />
        </div>
        <a-dropdown :trigger="['click']">
          <div class="header-user-avatar">
            <a-avatar>申学</a-avatar>
          </div>
          <a-menu slot="overlay">
            <a-menu-item key="1"><a-icon type="lock" />修改密码</a-menu-item>
            <a-menu-item key="3"><a-icon type="logout" />退出登录</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        width="200"
        v-model="collapsed"
        :trigger="null"
        collapsible
        collapsedWidth="56"
      >
        <a-menu
          class="nav-menu"
          mode="inline"
          :inlineIndent="10"
          :default-selected-keys="activeMenu"
          :default-open-keys="['sub1']"
          @click="handleMenuClick"
        >
          <template v-for="menu in menuList">
            <a-sub-menu
              v-if="menu.children && menu.children.length"
              :key="menu.path"
            >
              <span slot="title">
                <a-icon type="user" /><span>{{ menu.title }}</span>
              </span>
              <a-menu-item v-for="child in menu.children" :key="child.path">{{
                child.title
              }}</a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :key="menu.path">
              <a-icon type="home" />
              <span>{{ menu.title }}</span>
            </a-menu-item>
          </template>
          <!-- <a-menu-item key="00">
            <a-icon type="home" />
            <span>首页</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="user" /><span>用户管理</span>
            </span>
            <a-menu-item key="1"> 用户列表 </a-menu-item>
            <a-menu-item key="2"> 菜单管理 </a-menu-item>
            <a-menu-item key="3"> 授权管理 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="laptop" /><span>角色管理</span>
            </span>
            <a-menu-item key="5"> 角色列表 </a-menu-item>
            <a-menu-item key="6"> 新增角色 </a-menu-item>
            <a-menu-item key="7">删除角色</a-menu-item>
            <a-menu-item key="8">查询角色</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title">
              <a-icon type="notification" /><span>系统管理</span></span
            >
            <a-menu-item key="9"> 系统日志 </a-menu-item>
            <a-menu-item key="10"> 操作日志 </a-menu-item>
            <a-menu-item key="11">
              名字很长名字很长名字很长名字很长
            </a-menu-item>
          </a-sub-menu> -->
        </a-menu>
        <div class="sider-bottom">
          <a-icon
            class="fold-sider"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click.native="toggleSiderFold"
          />
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavMenu } from '../types/menu.d'
import { RouteRecordPublic } from 'vue-router'

@Component
export default class BasicLayout extends Vue {
  collapsed = false

  toggleSiderFold() {
    this.collapsed = !this.collapsed
  }

  get activeMenu() {
    return [this.$route.path]
  }

  handleMenuClick(menu: any) {
    this.$router.push(menu.key)
  }

  menuList: NavMenu[] = []

  created() {
    const routes = this.$router.getRoutes()
    const menuList: NavMenu[] = []
    const menuMap: Map<RouteRecordPublic, NavMenu> = new Map()
    routes.forEach((route) => {
      const { path, meta, parent } = route
      if (meta.nav) {
        const menu = { title: meta.title, path, children: [] }
        if (parent && parent.meta.nav) {
          console.log(menu)
          if (!menuMap.has(parent)) {
            const parentMenu = {
              title: parent.meta.title,
              path: parent.path,
              children: []
            }
            menuMap.set(parent, parentMenu)
            menuList.push(parentMenu)
          }
          menuMap.get(parent)?.children?.push(menu)
        } else if (!menuMap.has(route)) {
          menuList.push(menu)
        }
      }
    })
    this.menuList = menuList
  }
}
</script>

<style lang="less" scoped>
@import './BasicLayout.less';
</style>
