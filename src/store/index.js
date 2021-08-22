import { createStore } from "vuex";
import sort from "./modules/sort";

export default createStore({
  state: {
    card: [],
  },
  mutations: {
    addCard(state, card) {
      state.card.push(card);
      localStorage.setItem("card", JSON.stringify(state.card));
    },
    getCard(state, cards) {
      state.card = cards;
    },
    deleteCard(state, card) {
      state.card.splice(
        state.card.findIndex((el) => el.id === card.id),
        1
      );
      localStorage.setItem("card", JSON.stringify(state.card));
    },
  },
  actions: {},
  modules: {
    sort,
  },
});
