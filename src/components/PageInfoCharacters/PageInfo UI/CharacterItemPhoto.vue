<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {CharactersItemData} from "@/globalInt";
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
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
      }, 1500)
    }
  }
})
</script>

<template>
  <div class="d-flex text-center flex-column">
    <div class="photo mb-4" @click="openPhoto(info.image)">
      <v-img width="300px" height="300px" :src="info.image"/>
    </div>
    <div class="character-name d-flex align-center justify-center">
      <h2 class="text--link mr-4">{{info.name}}</h2>
      <v-icon @click="copyField" icon="mdi-content-copy"/>
    </div>
    <span class="location-character text-grey">location: {{info.location?.name}}</span>
  </div>
  <v-alert
      v-if="alertVisible"
      type="success"
      title="Alert title"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
  ></v-alert>
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