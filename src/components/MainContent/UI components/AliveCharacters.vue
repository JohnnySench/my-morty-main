<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AliveCharacters",
  props: {
    health: {
      type: String,
      required: true,
      default: 'Dead'
    },
    gender: {
      type: String,
      required: true
    }
  },
  computed: {
    getClassStatus() {
      return {
        'red-circle': this.health === 'Dead',
        'green-circle': this.health === 'Alive',
        'unknown-circle': this.health === 'unknown'
      }
    }
  }
})
</script>

<template>
  <div class="d-flex align-center">
    <div class="circle-status mr-2" :class="getClassStatus"></div>
    <span>{{health}} - {{gender}}</span>
  </div>
</template>

<style scoped lang="scss">
  .circle-status {
    height: 9px;
    width: 9px;
    border-radius: 50%;
  }
  .red-circle {
    background-color: red;
  }
  .green-circle {
    background-color: green;
  }
  .unknown-circle {
    background-color: yellow;
  }
</style>