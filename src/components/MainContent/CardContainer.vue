<script lang="ts">
import {defineComponent} from 'vue'
import {mapActions} from "vuex";
import CardContainerItem from "./CardContainerItem.vue";
interface State {
  dataCharacters: Object[]
}
export default defineComponent({
  name: "CardContainer",
  components: {CardContainerItem},
  data:(): State =>({
    dataCharacters: []
  }),
  methods: {
    ...mapActions({
      fetchCharacters: "characters/INIT_CHARACTERS"
    })
  },
  async mounted() {
    await this.fetchCharacters()
        .then(res => this.dataCharacters = [...res.data.results])
  }
})
</script>

<template>
  <div class="card-container py-16" >
    <card-container-item v-if="dataCharacters.length > 0" :characters="dataCharacters"/>
  </div>
</template>

<style scoped lang="scss">
  .card-container {
    background-color: rgb(39,43,51);
  }
</style>