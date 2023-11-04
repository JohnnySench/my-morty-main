import axios from "axios";

interface State {
    characters: Array<Object>,
    serverIsOn: boolean
}

export const charactersFromMovie = {
    state: (): State => ({
        characters: [],
        serverIsOn: false
    }),
    getters: {
        GET_CHARACTERS(state: State): Array<Object> {
            return state.characters
        },
        GET_SERVER_STATUS(state: State): boolean {
            return  state.serverIsOn
        }
    },
    mutations: {
        SET_CHARACTERS(state: State, data: Array<Object>): void {
            state.characters = data;
        },
        SET_SERVER_IS_ON(state: State, data: boolean): void {
            state.serverIsOn = data;
        }
    },
    actions: {
        async INIT_CHARACTERS() {
            return await axios.get<Object>("https://rickandmortyapi.com/api/character")

        }
    },
    namespaced: true
}