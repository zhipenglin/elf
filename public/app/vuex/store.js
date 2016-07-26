/**
 * Created by ifchangetoclzp on 2016/7/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import add from './modules/add'

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        add
    }
});



