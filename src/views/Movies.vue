<template>
  <div class="text-center" v-show="loading">
    <span>loading...</span>
  </div>
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-3 gap-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MovieCard from "../components/MovieCard.vue";

const movies = ref([]);
const loading = ref(true);
onMounted(async () => {
  const data = await fetch("http://localhost:3000/movies");
  const response = await data.json();
  movies.value = response;
  loading.value = false;
});
</script>

<style></style>
