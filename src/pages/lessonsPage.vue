<template>
  <div class="lesson-page">
    <h1>Lessons</h1>

    <div class="sorting-container">
      <div class="sorting-controls">
        <select v-model="sortBy">
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="price">Price</option>
          <option value="spaces">Spaces</option>
        </select>
        <button @click="toggleOrder">
          {{ ascending ? "Ascending" : "Descending" }}
        </button>
      </div>
      <div class="search-input">
        <input
          class="inputValue"
          type="text"
          v-model="searchQuery"
          placeholder="Search lessons..."
        />
        <font-awesome-icon icon="xmark" @click="clearSearch" />
      </div>
    </div>

    <div class="lesson-container">
      <LessonCard
        v-for="lesson in filteredAndSortedLessons"
        :key="lesson.id"
        :lesson="lesson"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LessonCard from "@/components/lessonCard.vue";

export default {
  components: { LessonCard },
  data() {
    return {
      sortBy: "name",
      ascending: true,
      searchQuery: "",
    };
  },
  computed: {
    ...mapGetters(["lessons"]),
    filteredLessons() {
      if (!this.searchQuery.trim()) {
        return this.lessons;
      }
      const query = this.searchQuery.toLowerCase();
      return this.lessons.filter((lesson) => {
        const name = lesson.name?.toLowerCase() || "";
        const location = lesson.location?.toLowerCase() || "";
        const price = lesson.price?.toString() || "";
        const spaces = lesson.spaces?.toString() || "";

        return (
          name.includes(query) ||
          location.includes(query) ||
          price.includes(query) ||
          spaces.includes(query)
        );
      });
    },
    filteredAndSortedLessons() {
      return [...this.filteredLessons].sort((a, b) => {
        const result = a[this.sortBy] > b[this.sortBy] ? 1 : -1;
        return this.ascending ? result : -result;
      });
    },
  },
  methods: {
    ...mapActions(["addToCart", "fetchLessons"]),
    toggleOrder() {
      this.ascending = !this.ascending;
    },
    clearSearch() {
      this.searchQuery = "";
    },
  },
  mounted() {
    this.fetchLessons();
  },
};
</script>

<style scoped>
.lesson-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  font-size: 14px;
}
.lesson-page > h1 {
  color: #1d2939;
}
.sorting-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.lesson-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.search-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  background-color: #eeee;
  padding: 10px;
  border-radius: 7px;
}
.search-input .inputValue {
  background-color: transparent;
  outline: none;
  border: none;
}
.sorting-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 650px) {
  .sorting-container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
