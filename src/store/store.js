import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        initialPath: 'M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z',
        finishedPath: 'M0,0C0,0,0,60,0,60C0,60,80,60,80,60C80,60,80,0,80,0C80,0,0,0,0,0M80,0C80,0,40,30,40,30C40,30,0,60,0,60C0,60,40,30,40,30C40,30,80,0,80,0',
        path: 'M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z'
    },
    getters: {
        getPath: state => {
            return state.path
        }
    },
    mutations: {
        changePath: (state, payload) => {
            state.path = payload.path
        },
        finishedPath: state => {
            state.path = state.finishedPath
            console.log(state.path)
        },
        resetPath: state => {
            state.path = state.initialPath
            console.log(state.path)
        }
    }
})