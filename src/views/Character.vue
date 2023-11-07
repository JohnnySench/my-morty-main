<script lang="ts">
import {defineComponent} from 'vue'
import PageInfo from "../components/PageInfoCharacters/PageInfo.vue";
import {mapActions} from "vuex";

export default defineComponent({
  name: "Character",
  data: () => ({
    cardInfo: []
  }),
  components: {PageInfo},
  methods: {
    ...mapActions({
      getCharacter: "characters/INIT_CARD_ONE_CHARACTER"
    })
  },

  mounted() {
    this.getCharacter(this.$route.params.userId)
  }
})
</script>

<template>
  <div class="container">
    <PageInfo/>
  </div>

</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  overflow: hidden;
}
</style>