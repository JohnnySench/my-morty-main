<script lang="ts">
import {defineComponent} from 'vue'
import HeaderLogo from "./UI Header/HeaderLogo.vue";
import HeaderActions from "./UI Header/HeaderActions.vue";

export default defineComponent({
  name: "HeaderContainer",
  components: {HeaderActions, HeaderLogo}
})
</script>

<template>
  <div class="header-wrapper w-100 d-flex align-center justify-space-between px-7 py-2">
    <HeaderLogo/>
    <HeaderActions/>
  </div>
</template>

<style scoped lang="scss">

</style>