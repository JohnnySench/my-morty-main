<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FooterStatistics"
})
</script>

<template>
  <div class="text-caption text-uppercase statistics font-weight-bold text-grey">
    <span class="mr-8 text--link">characters: 826</span>
    <span class="mr-8 text--link">locations: 122</span>
    <span class="text--link">episodes: 51</span>
  </div>

</template>

<style scoped lang="scss">
  .statistics {
    font-size: 14px !important;
  }
</style>