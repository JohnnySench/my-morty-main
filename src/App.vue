<script lang="ts">

import CardContainer from "./components/MainContent/CardContainer.vue";
import FooterContainer from "./components/FooterContent/FooterContainer.vue";
import HeaderContainer from "./components/HeaderContent/HeaderContainer.vue";

export default {
  name: 'App',
  components: {HeaderContainer, FooterContainer, CardContainer},
  data: () => ({}),

}
</script>

<template>
  <HeaderContainer/>
  <main>
    <CardContainer/>
  </main>
  <footer>
    <FooterContainer/>
  </footer>

</template>

<style lang="scss" scoped>

</style>
