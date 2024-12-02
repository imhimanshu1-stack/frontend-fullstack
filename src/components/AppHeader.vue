<template>
  <header class="app-header">
    <h1>Lesson Booking App</h1>
    <nav v-if="isLoggedIn">
      <router-link to="/">Home</router-link>
      <router-link v-if="isCartNotEmpty" to="/cart">Cart</router-link>
      <router-link to="/view-order">View Order</router-link>
      <button class="logout-button" @click="handleLogout">Logout</button>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn", "isCartNotEmpty"]),
  },
  methods: {
    ...mapActions(["fetchCart", "logout"]),

    handleLogout() {
      this.logout();
      this.$router.push("/login");
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.fetchCart();
    }
  },
};
</script>

<style scoped>
.app-header {
  background-color: #1d2939;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.app-header > h1 {
  font-weight: 600;
  color: white;
  font-size: 24px;
}
.app-header nav {
  margin-top: 10px;
}
.app-header a {
  color: white;
  text-decoration: none;
  margin: 0 7px;
  font-size: 16px;
}
.logout-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
}
.logout-button:hover {
  text-decoration: underline;
}
.app-header a:hover {
  text-decoration: underline;
}
@media (max-width: 800px) {
  .app-header {
    flex-direction: column;
  }
}
</style>
