import axios from "axios";
import CharactersItemData from "../../globalInt.ts";

interface State {
    characters: Array<Object>,
    serverIsOn: boolean,
    oneCharacter: Array<CharactersItemData>
}

export const charactersFromMovie = {
    state: (): State => ({
        characters: [],
        serverIsOn: false,
        oneCharacter: []
    }),
    getters: {
        GET_CHARACTERS(state: State): Array<Object> {
            return state.characters
        },
        GET_SERVER_STATUS(state: State): boolean {
            return state.serverIsOn
        }
    },
    mutations: {
        SET_CHARACTERS(state: State, data: Array<CharactersItemData>): void {
            state.characters = data;
        },
        SET_SERVER_IS_ON(state: State, data: boolean): void {
            state.serverIsOn = data;
        }
    },
    actions: {
        async INIT_CHARACTERS() {
            return await axios.get<Object>("https://rickandmortyapi.com/api/character")
        },
        async INIT_CARD_ONE_CHARACTER({commit}: any, userId: string) {
            await axios.get<CharactersItemData>(`https://rickandmortyapi.com/api/character/${userId}`)
                .then(response => {
                    commit('SET_CHARACTERS', response.data)
                })
        }
    },
    namespaced: true
}