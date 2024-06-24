import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day: 24,
    month: 6,
    year: 2024,
    count: 0,
    restaurantName: "La belle vue",
    shoppingCart: 0,
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "/images/crossiant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        quantity: 1,
        price: 2.99
      },
      {
        name: "Baguette de pain",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        quantity: 1,
        price: 3.99
      },
      {
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        quantity: 1,
        price: 4.99
      }
    ]
  },
  getters: {
    formattedDate(state) {
      return `${state.day}/${state.month}/${state.year}`
    },
    copyright(state) {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.restaurantName} ${currentYear}`
		}
  },
  mutations: {
    ADDTOSHOPPING_CART(state,amount=1) {
			state.shoppingCart += amount
		},
    INCREMENT_DAY(state) {
      state.day++
    },
    DECREMENT_DAY(state) {
      state.day--
    },
    INCREMENT_MONTH(state) {
      state.month++
    },
    DECREMENT_MONTH(state) {
      state.month--
    },
    INCREMENT_YEAR(state) {
      state.year++
      state.month = 1
    },
    DECREMENT_YEAR(state) {
      state.year--
      state.month = 12
    },
    INCREMENT_COUNT(state, amount = 1) {
      state.count += Number(amount)
    },
    DECREMENT_COUNT(state, amount = 1) {
      state.count -= Number(amount)
    },
  },
  actions: {
    updateShoppingCart(context,quantity){
      if(context.state.shoppingCart != null){
        context.commit('ADDTOSHOPPING_CART',quantity)
      }
    },
    incrementMonth(context) {
      if(context.state.month + 1 > 12) {
        context.commit("INCREMENT_YEAR")
      }
      else {
        context.commit("INCREMENT_MONTH")
      }
    },
    decrementMonth(context) {
      if(context.state.month - 1 < 1) {
        context.commit("DECREMENT_YEAR")
      }
      else {
        context.commit("DECREMENT_MONTH")
      }
    },
    incrementCount(context, amount) {
      context.commit('INCREMENT_COUNT', amount)
    },
    
    decrementCount(context, amount) {
      context.commit('DECREMENT_COUNT', amount)
    },

    updateCount(context, amount) {
      if (context.state.count  >= 0) {
        context.commit('INCREMENT_COUNT', amount)
      } else {
        context.commit('DECREMENT_COUNT', amount)
      }
    }
    
  },
  modules: {
  }
})
