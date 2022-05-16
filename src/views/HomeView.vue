<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-date-picker></a-date-picker>
    <a-select default-value="lucy" style="width: 320px">
      <a-select-option value="jack"> Jack </a-select-option>
      <a-select-option value="lucy"> Lucy </a-select-option>
      <a-select-option value="disabled" disabled> Disabled </a-select-option>
      <a-select-option value="Yiminghe"> yiminghe </a-select-option>
    </a-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import UserService from '@/api/user'

@Component({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {
  async created() {
    const res = await UserService.login({})
    console.log(res.data)
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 150vh;
}
</style>
