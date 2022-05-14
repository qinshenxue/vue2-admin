<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-date-picker></a-date-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {}
</script>

<style lang="less" scoped>
.home {
  height: 150vh;
}
</style>
