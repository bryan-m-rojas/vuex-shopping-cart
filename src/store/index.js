import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // equivalent to data
    products: []
  },

  getters: { // equivalent to computed properties
    productsCount () {
      // ...
    }
  },

  actions: { // equivalent to methods
    fetchProducts () {
      // make call
      // run setProducts mutation
    }
  },

  mutations: { // new - no equivalent
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})
