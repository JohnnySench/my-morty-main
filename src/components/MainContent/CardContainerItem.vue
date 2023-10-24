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
  <div class="card-wrapper mx-auto">
    <v-card
        class="mx-auto d-flex"
        v-for="item of characters" :key="item.id"
        style="border-radius: 10px !important;"
        max-width="600"
    >
      <div>
        <v-img
            class="align-end text-white"
            width="230"
            height="220"
            :src="item.image"
            cover
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
      </div>
      <div>
        <card-item-info :item-character="item"/>
      </div>
    </v-card>
  </div>

</template>

<style scoped lang="scss">
  .card-wrapper {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    max-width: 1219px;
  }
</style>