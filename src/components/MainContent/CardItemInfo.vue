<script lang="ts">
import {defineComponent} from 'vue'
import AliveCharacters from "./UI components/AliveCharacters.vue";
export default defineComponent({
  name: "CardItemInfo",
  components: {AliveCharacters},
  props: {
    itemCharacter: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <v-card-title class="pt-4">
    {{itemCharacter.name}}
    <AliveCharacters :health="itemCharacter.status" :gender="itemCharacter.species"/>
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