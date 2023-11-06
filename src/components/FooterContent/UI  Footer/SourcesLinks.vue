<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SourcesLinks",
  computed: {
    linkIconSources() {
      return [
        {
          icon: 'mdi-github',
          action: () => window.open('https://github.com/JohnnySench', '_blank')
        },
        {
          icon: 'mdi-twitter',
          action: () => window.open('https://vk.com/jekahandstand', '_blank')
        },
        {
          icon: 'mdi-heart',
          action: () => window.open('https://music.yandex.ru/home', '_blank')
        },
      ]
    }
  }
})
</script>

<template>
  <div class="d-flex align-center flex-nowrap justify-center mt-6">
    <div
        v-for="(icon, index) of linkIconSources"
        class="text-grey mr-8"
        :key="index">
      <v-icon
          class="text--link"
          :icon="icon.icon"
          @click="icon.action"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>