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
    sizeClasses() {
      return {
        width: '20px',
        height: '20px'
      }
    }
  }
})
</script>

<template>
  <div>
    <AliveCharacters :status-info="statusCharacters" :size="sizeClasses"/>
  </div>
</template>

<style scoped lang="scss">

</style>