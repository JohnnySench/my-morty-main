import {createStore} from "vuex";
import {charactersFromMovie} from "./characters/charactersFromMovie.ts";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        characters: charactersFromMovie
    }
})