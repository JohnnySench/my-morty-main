<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {mapGetters} from "vuex";
import CharacterItemPhoto from "@/components/PageInfoCharacters/PageInfo UI/CharacterItemPhoto.vue";
import {CharactersItemData} from "@/globalInt";

export default defineComponent({
  name: "CharacterItemInfo",
  components: {CharacterItemPhoto},
  props: {
    infoCharacter: {
      type: Object as PropType<CharactersItemData>
    }
  },
  computed: {
    ...mapGetters({
      getInfoCharacter: "characters/GET_CHARACTERS"
    })
  }
})
</script>

<template>
  <div class="d-flex align-start">
    <CharacterItemPhoto :info="getInfoCharacter"/>
  </div>
</template>

<style scoped lang="scss">

</style>