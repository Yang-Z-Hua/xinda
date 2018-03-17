import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    //状态集合
    state:{
        num:0
    },
    //突变集合
    mutations:{

    },
    //指令集合
    actions:{

    },
    //显示集合
    getters:{
        getNum:(state)=>state.num
    }
})