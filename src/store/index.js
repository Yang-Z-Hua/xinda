import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  //状态集合
  state: {
    num: 0,
  },
  // 突变集合
  mutations: {
    SET_NUM(state, n) {
      state.num = n;
    },
    ADD_NUM(state, n) {
      if (n == state.num) {
      } else {
        state.num += 1;
      }

    },
    JIAN_NUM(state, n) {
        state.num-= 1;
    }
  },
  //   指令集合
  actions: {
    setNum({
      commit
    }, n) {
      commit('SET_NUM', n)
    },
    addNum({
      commit
    }, n) {
      commit('ADD_NUM', n)
    },
    jianNum({
      commit
    }, n) {
      commit('JIAN_NUM', n)
    }
  },
  //   显示集合
  getters: {
    getNum: (state) => state.num
  },
})
