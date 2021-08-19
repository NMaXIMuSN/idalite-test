import { createStore } from "vuex";
import sort from "./modules/sort";

export default createStore({
  state: {
    card: [],
    idCard: 0,
  },
  mutations: {
    addCard(state, card) {
      state.card.push(card);
      localStorage.setItem('card', JSON.stringify(state.card))
      localStorage.setItem('idCard', state.idCard)
    },
    getCard(state, cards){
      state.card = cards
    },
    getIdCard(state, idCard){
      state.idCard = idCard
    }
  },
  actions: {},
  modules: {
    sort,
  },
});
