<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderLogo",
  methods: {
    redirectToMainPage() {
      return window.open("https://rickandmortyapi.com/", '_blank')
    }
  }

})
</script>

<template>
  <div>
    <v-icon
        @click="redirectToMainPage"
        icon="mdi-brain"
        size="xxx-large"/>
  </div>
</template>

<style scoped lang="scss">

</style>