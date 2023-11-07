<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CharacterTimeline"
})
</script>

<template>
  <div class="timeline-wrapper">
    <v-timeline side="end" align="start">
      <v-timeline-item
          dot-color="pink"
          size="small"
      >
        <div class="d-flex">
          <strong class="me-4">5pm</strong>
          <div>
            <strong>New Icon</strong>
            <div class="text-caption">
              Mobile App
            </div>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style scoped lang="scss">

</style>