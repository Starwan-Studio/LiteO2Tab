import { createStore } from 'vuex'

export default createStore({
    state: {
        customBackground: '',
        customSearch: '',
    },
    mutations: {},
    actions: {
        changeCustomBackground(state,payload) {
            state.customBackground = payload
        },
        changeCustomSearch(state,payload){
            state.customSearch = payload
        }
    },
    modules: {},
    getters: {
        CustomBackground: state => state.customBackground,
        CustomSearch: state => state.customSearch
    }
})