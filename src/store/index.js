import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // equivalent to data
    products: []
  },

  getters: { // equivalent to computed properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: { // equivalent to methods
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        // make call
        // run setProducts mutation
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },

  mutations: { // new - no equivalent
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})
