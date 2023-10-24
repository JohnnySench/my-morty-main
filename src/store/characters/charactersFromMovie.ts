import axios from "axios";

interface State {
    characters: Array<Object>,
}

export const charactersFromMovie = {
    state: (): State => ({
        characters: [],
    }),
    getters: {
        GET_CHARACTERS(state: State): Array<Object> {
            return state.characters
        }
    },
    mutations: {
        SET_CHARACTERS(state: State, data: Array<Object>): void {
            state.characters = data;
            console.log(state.characters)
        }
    },
    actions: {
        async INIT_CHARACTERS() {
            return await axios.get<Object>("https://rickandmortyapi.com/api/character")
        }
    },
    namespaced: true
}