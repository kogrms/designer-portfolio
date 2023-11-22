import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTab: "product",
    // loading: true,
  },
  getters: {},
  mutations: {
    setActiveTab(state, tab) {
      state.activeTab = tab;
      // localStorage.setItem("activeTab", JSON.stringify(state.activeTab));
    },
  },
  actions: {},
  modules: {},
});
