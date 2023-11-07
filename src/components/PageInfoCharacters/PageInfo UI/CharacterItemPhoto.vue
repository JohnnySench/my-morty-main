<script lang="ts">
import {defineComponent, PropType} from 'vue'
import CharactersItemData from "@/globalInt";
import {copyToClipboard} from '@/utils/base_tools'

export default defineComponent({
  name: "CharacterItemPhoto",
  props: {
    info: {
      type: Object as PropType<CharactersItemData>
    },
  },
  data:() => ({
    alertVisible: false
  }),
  methods: {
    openPhoto(url:string) {
      return url ? window.open(url, '_blank'): alert('Не могу открыть')
    },
    copyField() {
      const link = this.info?.name;
      copyToClipboard(link);
      let alertTimeout = setTimeout(() => {
        this.alertVisible = true;
      }, 1000)
      clearTimeout(alertTimeout)
    }
  }
})
</script>

<template>
  <div class="d-flex text-center flex-column">
    <div class="photo mb-4" @click="openPhoto(info.image)">
      <v-img width="300px" height="300px" :src="info.image"/>
    </div>
    <div class="character-name">
      <h2 class="text--link">{{info.name}}</h2>
      <v-icon @click="copyField" icon="mdi-content-copy"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .photo {
    border-radius: 50%;
    overflow: hidden;
    transition: all .2s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
</style>