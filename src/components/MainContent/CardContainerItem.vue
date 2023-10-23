<script lang="ts">
import {defineComponent, PropType} from 'vue'
import CardItemInfo from "./CardItemInfo.vue";

export default defineComponent({
  name: "CardContainerItem",
  components: {CardItemInfo},
  props: {
    characters: {
      type: Array as PropType<Object[]>,
      required: true
    }
  },
})
</script>

<template>
  <div class="card-wrapper">
    <v-card
        class="mx-auto d-flex"
        v-for="item of characters" :key="item.id"
        style="border-radius: 10px !important;"
        max-width="400"
    >
      <div>
        <v-img
            class="align-end text-white"
            height="220"
            :src="item.image"
            cover
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
      </div>
      <div>
        <card-item-info/>
      </div>
    </v-card>
  </div>

</template>

<style scoped lang="scss">
  .card-wrapper {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
</style>