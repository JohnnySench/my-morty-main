<script lang="ts">
import {mapActions} from "vuex";

export default {
  name: 'App',
  data: () => ({

  }),
  methods: {
    ...mapActions({
      fetchCharacters: "characters/INIT_CHARACTERS"
    })
  },
  mounted() {
    this.fetchCharacters()
  }
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
<!--  <main>-->
<!--    <card-content>-->
<!--      <card-item></card-item>-->
<!--    </card-content>-->
<!--  </main>-->
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
