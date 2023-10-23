<script lang="ts">

import CardContainer from "./components/MainContent/CardContainer.vue";

export default {
  name: 'App',
  components: {CardContainer},
  data: () => ({

  }),

}
</script>

<template>
  <h1>Hello</h1>
<!--  <header>-->
<!--    <navheader>-->
<!--      logo-->
<!--      actionsbtns-->
<!--    </navheader>-->
<!--    titleheader-->
<!--  </header>-->
  <main>
    <h1>MAIN</h1>
    <CardContainer/>
  </main>
<!--  <footer>-->
<!--    statistic-->
<!--    server-->
<!--    company-->
<!--    links-->
<!--    author-->
<!--  </footer>-->

</template>

<style lang="scss" scoped>

</style>
