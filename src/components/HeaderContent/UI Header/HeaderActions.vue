<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderActions",
  computed: {
    styleActionsBtn() {
      return [
        {
          title: 'Docs',
          class: 'text--link',
          component: 'VBtn',
          variant: 'plain',
          prependIcon: 'mdi-file-document-alert-outline',
          action: () => console.log('Нажал на Docs')
        },
        {
          title: 'About',
          class: 'text--link',
          component: 'VBtn',
          variant: 'plain',
          prependIcon: 'mdi-information-outline',
          action: () => console.log('Нажал на About')
        },
        {
          title: 'Support us',
          class: 'text--link',
          component: 'VBtn',
          variant: 'outlined',
          action: () => console.log('Нажал на Support us')
        },
      ]
    }
  }
})
</script>

<template>
  <div class="header-actions">
    <component
      :is="button.component"
      v-for="(button, index) in styleActionsBtn"
      :variant="button.variant"
      :key="index"
      :text="button.title"
      :class="button.class"
      :prepend-icon="button.prependIcon"
      class="font-weight-bold text-uppercase"
      @click="button.action"
    />
  </div>
</template>

<style scoped lang="scss">
  .header-actions {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
</style>