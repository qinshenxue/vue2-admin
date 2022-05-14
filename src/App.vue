<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import zhCN from '@qinsx/ant-design-vue/lib/locale-provider/zh_CN'

@Component
export default class extends Vue {
  locale = zhCN

  created() {
    console.log(this.locale.a)
  }
}
</script>
