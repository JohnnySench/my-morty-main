<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {CharactersItemData} from "@/globalInt";
import AliveCharacters from "@/components/MainContent/UI components/AliveCharacters.vue";

export default defineComponent({
  name: "CharacterItemInfoStatus",
  components: {AliveCharacters},
  props: {
    info: {
      type: Object as PropType<CharactersItemData>
    }
  },
  computed: {
    statusCharacters():Object {
      return {
        status: this.info.status,
        species: this.info.species,
        gender: this.info.gender
      }
    },
  }
})
</script>

<template>
  <div>
    <AliveCharacters
        :status-info="statusCharacters"
        :big-circle="true"
        :text-color="'text-black'"/>
  </div>
</template>

<style scoped lang="scss">

</style>