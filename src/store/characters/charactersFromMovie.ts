import axios from "axios";

interface State {
    characters: Object
}
export const charactersFromMovie = {
    state: () :State => ({
        characters: {}
    }),
    getters: {
        GET_CHARACTERS(state: State):Object {
            return state.characters
        }
    },
    mutations: {
        SET_CHARACTERS(state: State, data: Object) {
            state.characters = data;
        }
    },
    actions: {
        async INIT_CHARACTERS({commit}) {
            try {
                await axios.get("https://rickandmortyapi.com/api/character")
                    .then(response => {
                        commit('SET_CHARACTERS', response.data)
                    })

            } catch (e) {
                alert(e)
            } finally {
                console.log('В любом случае сделаю это')
            }
        }
    },
    namespaced: true
}