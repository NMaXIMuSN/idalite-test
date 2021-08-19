export default {
  state: {
    sortCard: 0,
    sortText: ["По умолчанию", "По цене min", "По цене max", "По наименованию"],
  },
  mutations: {
      newSort(state, newValue){
          state.sortCard = newValue
      }
  },
  actions: {},
  getters: {},
};
