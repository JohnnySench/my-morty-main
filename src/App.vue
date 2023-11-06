<script lang="ts">
import HeaderContainer from "./components/HeaderContent/HeaderContainer.vue";
import FooterContainer from "./components/FooterContent/FooterContainer.vue";
export default {
  name: 'App',
  components: {FooterContainer, HeaderContainer},
  data: () => ({}),
}
</script>

<template>
  <div class="container">
    <HeaderContainer/>
    <router-view/>
    <FooterContainer/>
  </div>

</template>

<style lang="scss" scoped>

</style>
