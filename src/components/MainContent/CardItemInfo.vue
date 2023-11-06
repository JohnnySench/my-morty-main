<script lang="ts">
import {defineComponent, PropType} from 'vue'
import AliveCharacters from "./UI components/AliveCharacters.vue";
import CharactersItemData from "../../globalInt";
export default defineComponent({
  name: "CardItemInfo",
  components: {AliveCharacters},
  props: {
    itemCharacter: {
      type: Object as PropType<CharactersItemData>,
      required: true
    }
  },
  computed: {
    statusCharacters():Object {
      return {
        status: this.itemCharacter.status,
        species: this.itemCharacter.species,
        gender: this.itemCharacter.gender
      }
    }
  }
})
</script>

<template>
  <v-card-title class="pt-4 d-inline-block">
      <router-link :to="{name: 'character', params: {userId: itemCharacter.id}}">
        <h3 class="font-weight-bold text--white text--link">
          {{itemCharacter.name}}
        </h3>
      </router-link>
    <AliveCharacters :status-info="statusCharacters"/>
  </v-card-title>
  <v-card-text class="pt-0 status-location">
    <div class="font-weight-bold grey-text">Last known location:</div>
    <div class="text--white text--link text-capitalize">{{itemCharacter.location.name}}</div>
  </v-card-text>
  <v-card-text class="pt-0 status-location">
    <div class="font-weight-bold grey-text">First seen in:</div>
    <div class="text-capitalize text--white text--link">{{itemCharacter.origin.name}}</div>
  </v-card-text>

</template>

<style scoped lang="scss">
  .grey-text {
    font-size: 16px;
    color: rgb(158,158,158);
    margin-bottom: 4px;
  }
  .status-location {
    font-size: 18px;
  }
</style>