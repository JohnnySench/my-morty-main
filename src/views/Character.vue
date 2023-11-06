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
  computed: {
    getUserId():string {
      return this.$route.params.userId
    }
  },
  methods: {
    ...mapActions({
      getCharacter: "characters/INIT_CARD_ONE_CHARACTER"
    })
  },
  async mounted() {
    await this.getCharacter(this.getUserId)
        .then(response => {
          console.log(response)
        })
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