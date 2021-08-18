import { createStore } from 'vuex'

export default createStore({
  state: {
    card:[]
  },
  mutations: {
    addCard(state, card){
      state.card.push(card)
    }
  },
  actions: {
  },
  modules: {
  }
})
