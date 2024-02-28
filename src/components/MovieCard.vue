<template>
  <div>
    <router-link :to="{ name: 'detail', params: { id: movie.id } }">{{
      movie.title
    }}</router-link>
    <h1>{{ movie.year }}</h1>
    <h1>{{ movie.runtime }}</h1>
    <div>
      <img :src="movie.poster" alt="" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: Object,
});
</script>

<style></style>
