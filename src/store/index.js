import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vuex.Store({
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
    }
  },

  mutations: { // new - no equivalent 
    setProducts () {
      // update products
    }
  }
})