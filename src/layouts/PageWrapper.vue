<template>
  <div class="page-wrapper">
    <div class="page-header">
      <div class="page-title">
        {{ pageTitle }}
      </div>
      <div class="page-header-left">
        <slot name="header-left"></slot>
      </div>
      <div class="page-header-right">
        <slot name="header-right"></slot>
      </div>
    </div>
    <div class="page-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class PageWrapper extends Vue {
  @Prop(String)
  title: string // 页面标题

  get pageTitle() {
    return this.title !== undefined ? this.title : this.$route?.meta?.title
  }
}
</script>
<style lang="less" scoped>
@header-height: 52px;
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.page-header {
  height: @header-height;
  display: flex;
  padding: 0 20px;
  flex: 0 0 auto;
  background-color: #fff;
  box-shadow: inset 0 -1px 0 0 #e9ebee;
}
.page-header-left {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  height: @header-height;
}
.page-header-right {
  display: flex;
  height: @header-height;
  align-items: center;
}
.page-title {
  flex-shrink: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding-right: 20px;
}
.page-body {
  background-color: #fff;
  height: 100%;
  flex: auto;
  overflow-y: auto;
}
</style>
