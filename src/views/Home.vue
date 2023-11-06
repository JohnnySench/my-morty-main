<script lang="ts">
import {defineComponent} from 'vue'
import CardContainer from "../components/MainContent/CardContainer.vue";
import FooterContainer from "../components/FooterContent/FooterContainer.vue";
import HeaderContainer from "../components/HeaderContent/HeaderContainer.vue";
import BackgroundMain from "../components/MainContent/BackgroundContent/BackgroundMain.vue";

export default defineComponent({
  name: "Home",
  components: {FooterContainer, CardContainer, BackgroundMain, HeaderContainer}
})
</script>

<template>
  <main>
    <BackgroundMain/>
    <CardContainer/>
  </main>
</template>

<style scoped lang="scss">

</style>