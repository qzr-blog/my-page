import Vue from 'vue'
import Vuex from 'vuex'

import user from 'store/modules/user.js'
import page from 'store/modules/page.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    page
  }
})

export default store