<script lang="ts">
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";

export default defineComponent({
  name: "ServerStatus",
  computed: {
    ...mapGetters({
      serverStatus: "characters/GET_SERVER_STATUS"
    }),
  },
})
</script>

<template>
  <div class="d-flex align-center justify-center mt-4 text-grey">
    <span class="text-uppercase statistics font-weight-bold mr-2 text--link">server status</span>
    <div class="circle-status mr-2" :class="serverStatus ? 'green-circle': 'red-circle'"></div>
  </div>
</template>

<style scoped lang="scss">
.red-circle {
  background-color: red;
}

.green-circle {
  background-color: green;
}
.circle-status {
  height: 9px;
  width: 9px;
  border-radius: 50%;
}
.statistics {
  font-size: 14px !important;
}
</style>