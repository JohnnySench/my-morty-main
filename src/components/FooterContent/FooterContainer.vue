<script lang="ts">
import {defineComponent} from 'vue'
import FooterStatistics from "./UI  Footer/FooterStatistics.vue";
import ServerStatus from "./UI  Footer/ServerStatus.vue";
import ExternalLink from "./UI  Footer/ExternalLink.vue";
import SourcesLinks from "./UI  Footer/SourcesLinks.vue";

export default defineComponent({
  name: "FooterContainer",
  components: {SourcesLinks, ExternalLink, ServerStatus, FooterStatistics}
})
</script>

<template>
  <div class="footer-container py-16">
    <FooterStatistics/>
    <ServerStatus/>
    <ExternalLink/>
    <SourcesLinks/>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  background-color: rgb(32, 35, 41);
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  text-align: center;
}

</style>