<template>
  <PageWrapper class="form-detail">
    <a-descriptions title="用户信息">
      <a-descriptions-item label="用户名"> 张三 </a-descriptions-item>
      <a-descriptions-item label="电话"> 1810000000 </a-descriptions-item>
      <a-descriptions-item label="住址">
        湖北省武汉市花山软件园F2栋3楼
      </a-descriptions-item>
      <a-descriptions-item label="标签"
        ><a-tag color="blue">JavaScript</a-tag> <a-tag color="green">CSS</a-tag
        ><a-tag color="orange">HTML</a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="链接" :span="2">
        <a href="javascript:;">https://www.baidu.com</a>
      </a-descriptions-item>
      <a-descriptions-item label="多文字描述" :span="3">
        超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字超长文字
      </a-descriptions-item>
    </a-descriptions>
  </PageWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from '@/layouts/PageWrapper.vue'

@Component({
  components: {
    PageWrapper
  }
})
export default class FormDetail extends Vue {}
</script>

<style lang="less" scoped>
.form-detail {
  /deep/ .page-body {
    padding: 20px;
    .ant-descriptions-title {
      font-weight: normal;
    }
    .ant-descriptions-item-content {
      word-break: break-all;
    }
  }
}
</style>
