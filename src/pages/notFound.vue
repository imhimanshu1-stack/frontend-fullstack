<template>
  <div class="not-found">
    <h1>404</h1>
    <p>The page you are looking is not available for now.</p>
    <router-link to="/">Go Back Home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.not-found h1 {
  font-size: 100px;
  color: #1d2939;
}
.not-found p {
  font-size: 20px;
}
.not-found a {
  color: #1d2939;
  text-decoration: underline;
  cursor: pointer;
}
</style>
