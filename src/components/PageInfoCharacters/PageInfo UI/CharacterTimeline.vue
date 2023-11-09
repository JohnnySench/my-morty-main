<script lang="ts">
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
interface Info {
  title: string,
  text: string,
  icon: string
}
export default defineComponent({
  name: "CharacterTimeline",
  computed: {
    ...mapGetters({
      getInfoCharacter: "characters/GET_CHARACTERS"
    }),
    textInfoPerson():Info[] {
      return [
        {
          title: 'Персонаж премии Дарвина',
          text: 'Ричард «Рик» Санчез (англ. Rick Sanchez)' +
              ' — главный протагонист мультсериала «Рик и Морти».' +
              ' Безумный ученый, чей алкоголизм, безрассудность' +
              ' и социопатия заставляют беспокоиться семью его дочери.',
          icon: 'mdi-smoke'
        },
        {
          title: 'Персонаж премии Малина',
          text: 'Морти Смит (англ. Morty Smith) или Мортимер «Морти»' +
              ' Смит-старший — является одним из главных героев сериала.' +
              ' Приходится внуком Рику и часто вынужден ходить ' +
              'по пятам на его различных «злоключениях»',
          icon: 'mdi-safety-goggles'
        },
        {
          title: 'Персонаж премии Оскара',
          text: 'Мистер Жопосранчик (англ. Mr. Poopybutthole)' +
              ' — давний друг семьи Смитов, много раз' +
              ' сопровождавший Рика и Морти в их путешествиях.',
          icon: 'mdi-liquor'
        },
      ]
    }
  },
  methods: {
  }
})
</script>

<template>
  <v-timeline align="start">
    <v-timeline-item
        v-for="(person, index) in textInfoPerson"
        fill-dot
        :key="index"
        :icon="person['icon']"
        dot-color="white"
    >
      <v-card>
        <v-card-title>
          {{person['title']}}
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>{{person['text']}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped lang="scss">

</style>