<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ExternalLink",
  computed: {
    styleLinksFooter() {
      return [
        {
          icon: 'mdi-dot-net',
          title: 'deploys by',
          subtitle: 'netlify',
          action: () => {
            window.open('https://www.netlify.com/', '_blank')
          }
        },
        {
          icon: 'mdi-hexagon-multiple',
          title: 'powered by',
          subtitle: 'stellate',
          action: () => {
            window.open('https://stellate.co/?ref=powered-by', '_blank')
          }
        },
      ]
    }
  }
})
</script>

<template>
  <div class="d-flex align-center justify-center mt-4">
    <div
        v-for="(icon, index) in styleLinksFooter"
        class="container-link mr-6"
        :key="index"
        @click="icon.action"
    >
      <div class="icon-wrapper mr-2">
        <v-icon
            class="icon-footer"
            size="x-large"
            color="white"
            :icon="icon.icon"
        />
      </div>
      <div class="link-wrapper d-flex flex-column text-capitalize">
        <span class="text-grey">{{ icon.title }}</span>
        <span class="text--white">{{ icon.subtitle }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-link {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  cursor: pointer;
}

.icon-footer {
  &:hover {
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
}
</style>