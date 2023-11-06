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
        class="header-icon"
        size="xxx-large"/>
  </div>
</template>

<style scoped lang="scss">
  .header-icon {
    transition: all .1s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
</style>