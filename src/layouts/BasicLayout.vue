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
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
        >
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
          </a-sub-menu>
        </a-menu>
        <div class="sider-bottom">
          <a-icon
            class="fold-sider"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click.native="toggleSiderFold"
          />
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BasicLayout extends Vue {
  collapsed = false

  toggleSiderFold() {
    this.collapsed = !this.collapsed
  }
}
</script>

<style lang="less" scoped>
@import './BasicLayout.less';
</style>
