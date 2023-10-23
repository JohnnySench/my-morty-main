<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "CardItemInfo",
})
</script>

<template>
  <v-card-title class="pt-4">
    Artist Morty
    <v-card-title>Alive - Human</v-card-title>
  </v-card-title>
  <v-card-text>
    <div>Whitehaven Beach</div>
    <div>Whitsunday Island, Whitsunday Islands</div>
  </v-card-text>
  <v-card-actions>
    <v-btn color="orange">
      Share
    </v-btn>
    <v-btn color="orange">
      Explore
    </v-btn>
  </v-card-actions>
</template>

<style scoped lang="scss">

</style>