import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: localStorage.getItem("token"),
    cart: [],
    lessons: [],
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LESSONS(state, lessons) {
      state.lessons = lessons;
    },
    SET_CART(state, cart) {
      state.cart = [...cart];
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem("token", token);
      commit("SET_TOKEN", token);
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit("SET_TOKEN", null);
    },

    clearCart({ commit }) {
      commit("CLEAR_CART");
    },

    fetchLessons({ commit }) {
      const token = localStorage.getItem("token");

      axios({
        method: "GET",
        url: "http://localhost:3300/api/v1/fetch-all-products",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          commit("SET_LESSONS", response.data.products);
        })
        .catch((error) => {
          console.error("Error fetching lessons:", error);
        });
    },

    // Add to cart
    addToCart({ dispatch }, { productId, quantity }) {
      const token = localStorage.getItem("token");

      axios({
        method: "POST",
        url: "http://localhost:3300/api/v1/add-to-cart",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          productId,
          quantity,
        },
      })
        .then((response) => {
          console.log(response.data.message);

          dispatch("fetchLessons");
          dispatch("fetchCart");
        })
        .catch((error) => {
          console.error("Error adding to cart:", error.response?.data || error);
        });
    },

    // Fetch the user's cart
    fetchCart({ commit }) {
      const token = localStorage.getItem("token");

      axios({
        method: "GET",
        url: "http://localhost:3300/api/v1/view-cart",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          commit("SET_CART", response.data.Data.items);
        })
        .catch((error) => {
          console.error("Error fetching cart:", error);
        });
    },
    // Remove item from cart
    removeItemFromCart({ dispatch }, productId) {
      const token = localStorage.getItem("token");

      axios({
        method: "POST",
        url: "http://localhost:3300/api/v1/remove-item-from-cart",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          productId,
        },
      })
        .then((response) => {
          console.log(response.data.message);

          dispatch("fetchCart");
        })
        .catch((error) => {
          console.error(
            "Error removing item from cart:",
            error.response?.data || error
          );
        });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    cartItems: (state) => state.cart,
    cartCount: (state) =>
      state.cart.reduce((count, item) => count + item.quantity, 0),
    lessons: (state) => state.lessons,
    isCartNotEmpty: (state) => state.cart.length > 0,
  },
});
