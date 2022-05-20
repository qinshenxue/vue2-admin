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
    <div class="page-filter" v-if="showFilter">
      <div class="page-filter-left">
        <slot name="filter-left"></slot>
      </div>
      <div class="page-filter-right">
        <slot name="filter-right"></slot>
      </div>
      <div class="filter-right"></div>
    </div>
    <div class="page-body" ref="body">
      <slot :height="bodyHeight"></slot>
    </div>
    <div class="page-footer">
      <div class="page-footer-left">
        <slot name="footer-left"></slot>
      </div>
      <div class="page-footer-right">
        <slot name="footer-right"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator'
@Component
export default class PageWrapper extends Vue {
  @Prop(String)
  title: string // 页面标题

  @Prop(Boolean)
  showFilter: boolean // 显示筛选条

  get pageTitle() {
    return this.title !== undefined ? this.title : this.$route?.meta?.title
  }

  bodyHeight = 0

  @Ref('body') readonly bodyRef: HTMLDivElement
  calcBodyHeight() {
    const rect = this.bodyRef.getBoundingClientRect()
    this.bodyHeight = rect.height
  }

  ready = false

  mounted() {
    this.calcBodyHeight()
    window.addEventListener('resize', this.calcBodyHeight)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.calcBodyHeight)
  }
}
</script>
<style lang="less" scoped>
@header-height: 52px;
@footer-height: 52px;
@filter-height: 48px;

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

.page-filter {
  height: @filter-height;
  display: flex;
  padding: 0 20px;
  flex: 0 0 auto;
  background-color: #fff;
}
.page-filter-left {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  height: @filter-height;
}
.page-filter-right {
  display: flex;
  height: @filter-height;
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

.page-footer {
  flex: 0 0 auto;
  background: #ffffff;
  box-shadow: inset 0 1px 0 0 #e9ebee;
  display: flex;
  padding: 0 20px;
}
.page-footer-left {
  flex: 1;
  height: @footer-height;
  display: flex;
  min-width: 0;
  align-items: center;
}
.page-footer-right {
  display: flex;
  height: @footer-height;
  align-items: center;
}
</style>
