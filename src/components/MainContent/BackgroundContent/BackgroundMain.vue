<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BackgroundMain"
})
</script>

<template>
  <div class="back-wrapper"></div>
</template>

<style scoped lang="scss">
  .back-wrapper {
    min-height: 440px;
    background-image: url("https://i.pinimg.com/originals/b1/37/7f/b1377fac621ae7ef5ea12fa3054428d5.jpg");
    background-position: center;
  }
</style>