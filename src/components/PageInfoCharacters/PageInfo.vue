<script lang="ts">
import {defineComponent} from 'vue'
import CharacterTimeline from "./PageInfo UI/CharacterTimeline.vue";
import CharacterItemInfo from "./PageInfo UI/CharacterItemInfo.vue";
import {mapGetters} from "vuex";

export default defineComponent({
  name: "PageInfo",
  components: {CharacterItemInfo, CharacterTimeline},
  computed: {
    ...mapGetters({
      getInfoCharacter: "characters/GET_CHARACTERS"
    })
  }
})
</script>

<template>
  <div class="h-100">
    <div class="d-flex justify-center pt-16 character-container px-8">
        <CharacterItemInfo/>
        <CharacterTimeline/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .character-container {
    gap: 150px;
  }
</style>