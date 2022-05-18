<template>
  <svg class="svg-icon" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

const req = require.context('./icons', false, /\.svg$/)
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext)
requireAll(req)

@Component
export default class SvgIcon extends Vue {
  @Prop({ type: String, required: true }) readonly icon: string

  get iconName() {
    return `#svg-icon-${this.icon}`
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
