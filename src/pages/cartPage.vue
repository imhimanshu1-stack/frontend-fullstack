<template>
  <div class="cart-page">
    <div class="cart-container">
      <h1>Shopping Cart</h1>
      <div class="cart-box">
        <ul class="cart-item-container">
          <li class="cart-item" v-for="item in cartItems" :key="item._id">
            {{ item.name }} - ${{ item.price }} (Quantity: {{ item.quantity }})
            <button @click="removeItem(item.productId)">Remove</button>
          </li>
          <p>Total Items: {{ cartCount }}</p>
        </ul>
      </div>
      <button
        v-if="cartCount > 0"
        @click="toggleCheckoutForm"
        class="checkout-btn"
      >
        Checkout
      </button>
    </div>
    <div v-if="showCheckoutForm" class="form-container">
      <div class="checkout-form">
        <label>
          Name:
          <input v-model="name" type="text" placeholder="Enter your name" />
        </label>
        <span v-if="nameError" class="error">{{ nameError }}</span>

        <label>
          Phone:
          <input
            v-model="phone"
            type="text"
            placeholder="Enter your phone number"
          />
        </label>
        <span v-if="phoneError" class="error">{{ phoneError }}</span>
        <div class="cart-btn-container">
          <button @click="handleCancel" class="button">Cancel</button>
          <button
            :disabled="!isCheckoutEnabled"
            @click="handleCheckout"
            class="submit-btn"
          >
            Submit Order
          </button>
        </div>
      </div>
    </div>
    <div v-if="checkoutMessage" class="success-message">
      {{ checkoutMessage }}
    </div>
    <button
      @click="handleNavigate"
      v-if="checkoutMessage"
      class="view-order-btn"
    >
      View Order
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      phone: "",
      showCheckoutForm: false,
      checkoutMessage: "",
    };
  },
  computed: {
    ...mapGetters(["cartItems", "cartCount"]),
    nameError() {
      if (this.name && !/^[A-Za-z\s]+$/.test(this.name)) {
        return "Name must only contain letters.";
      }
      return null;
    },
    phoneError() {
      if (this.phone && !/^\d+$/.test(this.phone)) {
        return "Phone number must only contain numbers.";
      }
      return null;
    },
    isCheckoutEnabled() {
      return (
        this.name.trim() &&
        !this.nameError &&
        this.phone.trim() &&
        !this.phoneError &&
        this.cartItems.length > 0
      );
    },
  },
  methods: {
    ...mapActions(["removeItemFromCart", "fetchCart", "clearCart"]),
    toggleCheckoutForm() {
      this.showCheckoutForm = !this.showCheckoutForm;
    },
    handleCheckout() {
      const token = localStorage.getItem("token");
      axios({
        method: "POST",
        url: "http://localhost:3300/api/v1/create-order",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          name: this.name,
          phone: this.phone,
        },
      })
        .then((res) => {
          this.checkoutMessage = `Order submitted successfully for ${this.name}. Thank you!`;
          this.name = "";
          this.phone = "";
          this.showCheckoutForm = false;
          console.log(res);
          this.fetchCart();
          this.clearCart();
        })
        .catch((err) => {
          console.log(err);

          this.name = "";
          this.phone = "";
          this.showCheckoutForm = false;
        });
    },
    handleCancel() {
      this.name = "";
      this.phone = "";
      this.showCheckoutForm = false;
    },

    handleNavigate() {
      this.$router.push("/view-order");
    },

    removeItem(productId) {
      this.removeItemFromCart(productId);
    },
  },
  mounted() {
    this.fetchCart();
  },
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart-container {
  width: 50%;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7px;
  background-color: white;
  border: 1px solid #1d2939;
}
.cart-item-container {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.cart-box {
  height: 300px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-btn {
  background-color: #1d2939;
  color: white;
  padding: 10px 15px;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #2a3b4c;
}
.form-container {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
}
.checkout-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  background-color: white;
  z-index: 3;
  padding: 20px;
  border-radius: 7px;
}

.checkout-form label {
  display: flex;
  flex-direction: column;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error {
  color: red;
  font-size: 12px;
}

.submit-btn {
  background-color: #1d2939;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.view-order-btn {
  background-color: #1d2939;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 7px;
}
.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.success-message {
  margin-top: 20px;
  color: green;
  font-weight: bold;
}
.cart-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.cart-btn-container {
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
}

@media (max-width: 1100px) {
  .cart-container {
    width: 70%;
  }
  .checkout-form {
    width: 70%;
  }
}

@media (max-width: 650px) {
  .cart-container {
    width: 100%;
  }
  .checkout-form {
    width: 100%;
  }
  .cart-page {
    padding: 0px;
  }
  .cart-item {
    flex-direction: column;
    gap: 7px;
    align-items: flex-start;
  }
}
</style>
