<template>
  <dir v-show="isLoading"><span>loading...</span></dir>
  <h1>movie {{ $route.params.id }} detail</h1>
  <title>{{ queryMovie }}</title>
  <button @click="$router.back()">back</button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const queryMovie = ref({});
const isLoading = ref(true);
const route = useRouter();
onMounted(async () => {
  const data = await fetch(`http://localhost:3000/movies/${props.id}`);
  console.log("status", data.status);
  if (data.status == 404) {
    route.push({ name: "movies" });
  }
  const res = await data.json();
  queryMovie.value = res;
  console.log("data", queryMovie);
  isLoading.value = false;
});
</script>

<style></style>
