<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {mapGetters} from "vuex";
import CharacterItemPhoto from "@/components/PageInfoCharacters/PageInfo UI/CharacterItemPhoto.vue";
import {CharactersItemData} from "@/globalInt";
import CharacterItemInfoStatus from "@/components/PageInfoCharacters/PageInfo UI/CharacterItemInfoStatus.vue";

export default defineComponent({
  name: "CharacterItemInfo",
  components: {CharacterItemInfoStatus, CharacterItemPhoto},
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
  <div class="character-wrapper d-flex text-center flex-column">
    <CharacterItemPhoto :info="getInfoCharacter"/>
    <CharacterItemInfoStatus :info="getInfoCharacter"/>
  </div>
</template>

<style scoped lang="scss">
.character-wrapper {
  gap: 10px;
}
</style>