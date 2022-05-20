<template>
  <PageWrapper class="">列表带筛选</PageWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from '@/layouts/PageWrapper.vue'

@Component({
  components: { PageWrapper }
})
export default class ListWithFilter extends Vue {}
</script>
