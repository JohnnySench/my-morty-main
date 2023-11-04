<script lang="ts">
import {defineComponent} from 'vue'
import FooterStatistics from "./UI  Footer/FooterStatistics.vue";
import ServerStatus from "./UI  Footer/ServerStatus.vue";

export default defineComponent({
  name: "FooterContainer",
  components: {ServerStatus, FooterStatistics}
})
</script>

<template>
  <div class="footer-container py-16">
    <FooterStatistics/>
    <ServerStatus/>
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