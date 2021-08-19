import { createStore } from "vuex";
import sort from "./modules/sort";

export default createStore({
  state: {
    card: [],
  },
  mutations: {
    addCard(state, card) {
      state.card.push(card);
    },
  },
  actions: {},
  modules: {
    sort,
  },
});
