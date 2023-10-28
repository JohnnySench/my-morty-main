<script lang="ts">
import {defineComponent, PropType} from 'vue'

interface Status {
  status: string,
  species: string,
  gender: string
}

export default defineComponent({
  name: "AliveCharacters",
  props: {
    statusInfo: {
      type: Object as PropType<Status>
    }
  },
  computed: {
    classAliveStatus() {
      return {
        'red-circle': this.statusInfo?.status === 'Dead',
        'green-circle': this.statusInfo?.status === 'Alive',
        'unknown-circle': this.statusInfo?.status === 'unknown'
      }
    },
    classGenderStatus() {
      return {
        'pink-circle': this.statusInfo?.gender === 'Female',
        'blue-circle': this.statusInfo?.gender === 'Male',
        'white-circle': this.statusInfo?.gender === 'unknown'
      }
    }
  }
})
</script>

<template>
  <div class="status-wrapper">
    <div class="d-flex align-center">
      <div class="circle-status mr-2" :class="classAliveStatus"></div>
      <span class="font-weight-bold text-status text--white text-capitalize">{{ statusInfo.status }} - {{ statusInfo.species }}</span>
    </div>
    <div class="d-flex align-center">
      <div class="circle-status mr-2" :class="classGenderStatus"></div>
      <span class="font-weight-bold text-status text--white text-capitalize">{{ statusInfo.gender }}</span>
    </div>
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

.text-status {
  font-size: 16px;
}
.status-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
.pink-circle {
  background-color: deeppink;
}
.blue-circle {
  background-color: blue;
}
.white-circle {
  background-color: white;
}

</style>