<template>
  <div class="lesson-card">
    <img
      class="lesson-img"
      :src="
        `https://backend-fullstack-a6fo.onrender.com/${lesson.photo}` ||
        './123.png'
      "
      alt="hello"
    />
    <div class="subject-class">
      <h2>{{ lesson.name }}</h2>
      <p>${{ lesson.price }}</p>
    </div>
    <p>Location: {{ lesson.location }}</p>
    <p>Spaces Left: {{ lesson.stock }}</p>
    <button :disabled="lesson.stock === 0" @click="addToCartHandler(lesson)">
      Add to Cart
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["lesson"],
  methods: {
    ...mapActions(["addToCart"]),
    addToCartHandler(lesson) {
      this.addToCart({ productId: lesson._id, quantity: 1 });
    },
  },
};
</script>
<style scoped>
.lesson-card {
  width: 30%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: flex-start;
}

.lesson-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: top;
}

.subject-class {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.subject-class h2 {
  font-size: 16px;
  font-weight: 600;
}

.subject-class p {
  font-size: 20px;
  font-weight: 700;
}

@media (max-width: 1170px) {
  .lesson-card {
    width: 45%;
  }
}

@media (max-width: 800px) {
  .lesson-card {
    width: 100%;
  }
}
</style>
