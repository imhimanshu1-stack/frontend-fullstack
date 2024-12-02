<template>
  <div class="order-page">
    <h1>Order Details</h1>
    <div v-if="orderData.length" class="order-list">
      <div v-for="order in orderData" :key="order._id" class="order-card">
        <h2>Customer Information</h2>
        <p><strong>Name:</strong> {{ order.name }}</p>
        <p><strong>Email:</strong> {{ order.email }}</p>
        <p><strong>Phone:</strong> {{ order.phone }}</p>

        <h3>Items Ordered:</h3>
        <div class="order-items">
          <div
            v-for="item in order.items"
            :key="item.productId"
            class="order-item"
          >
            <p><strong>Product Name:</strong> {{ item.name }}</p>
            <p><strong>Price:</strong> ${{ item.price }}</p>
            <p><strong>Quantity:</strong> {{ item.quantity }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-orders">
      <p>No orders found.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      orderData: [],
    };
  },
  methods: {
    fetchOrders() {
      const token = localStorage.getItem("token");
      axios({
        method: "GET",
        url: "https://backend-fullstack-a6fo.onrender.com/api/v1/view-order",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          this.orderData = response.data.Data;
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    },
  },
  mounted() {
    this.fetchOrders();
  },
};
</script>

<style scoped>
.order-page {
  width: 100%;
  padding: 20px;
  font-size: 14px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.order-card h2,
h3 {
  margin-bottom: 10px;
  font-weight: 600;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.order-item {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.no-orders {
  text-align: center;
  color: #999;
}
</style>
