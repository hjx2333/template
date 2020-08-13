import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    secret: ''
  },
  mutations: {
    setSecret(state, value) {
      state.secret = value
    }
  },
  actions: {},
  modules: {}
});