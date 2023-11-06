<script lang="ts">

import CardContainer from "./components/MainContent/CardContainer.vue";
import FooterContainer from "./components/FooterContent/FooterContainer.vue";
import HeaderContainer from "./components/HeaderContent/HeaderContainer.vue";
import BackgroundMain from "./components/MainContent/BackgroundContent/BackgroundMain.vue";

export default {
  name: 'App',
  components: {BackgroundMain, HeaderContainer, FooterContainer, CardContainer},
  data: () => ({}),

}
</script>

<template>
  <nav>
    <HeaderContainer/>
  </nav>
  <main>
    <BackgroundMain/>
    <CardContainer/>
  </main>
  <footer>
    <FooterContainer/>
  </footer>
</template>

<style lang="scss" scoped>

</style>
