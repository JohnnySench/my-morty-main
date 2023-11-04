<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FooterStatistics",
  computed: {
    infoForFooter() {
      return [
        {
          titleField: 'characters',
          valueField: 826, //будет в будущем проп
          classField: 'mr-8 text--link',
          action: this.clickOnCharacters
        },
        {
          titleField: 'locations',
          valueField: 122, //будет в будущем проп
          classField: 'mr-8 text--link',
          action: () => console.log('click on location')
        },
        {
          titleField: 'episodes',
          valueField: 51, //будет в будущем проп
          classField: 'mr-8 text--link',
          action: () => console.log('click on episodes')
        },
      ]
    }
  },
  methods: {
    clickOnCharacters() {
      console.log('click on characters')
    }
  }
})
</script>

<template>
  <div class="text-caption text-uppercase statistics font-weight-bold text-grey">
    <span
        v-for="(item, index) in infoForFooter"
        :key="index"
        @click="item.action"
        :class="item.classField">{{ item.titleField }}: {{ item.valueField }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.statistics {
  font-size: 14px !important;
}
</style>