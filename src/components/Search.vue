<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../stores/SearchStore';
import Loader from './Loader.vue';
import Movie from '../components/Movie.vue';

const searchStore = useSearchStore();

function handleSearch(event) {
  const movieTitle = event.target.elements['search-input'];
  if (movieTitle.value) {
    searchStore.getMovies(movieTitle.value);
    movieTitle.value = '';
  }
}
</script>

<template>
  <section>
    <h2>Поиск</h2>
    <div class="search">
      <form @submit.prevent="handleSearch" class="search-form">
        <label class="search-label"
          >Какой фильм ты хочешь посмотреть?
          <input id="search-input" class="search-input" type="text" placeholder="Введи название фильма" />
        </label>
        <button class="btn search-btn">Найти</button>
      </form>
    </div>
    <Loader v-if="searchStore.loader" />
    <div v-else>
      <Movie v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :is-search="true" />
    </div>
  </section>
</template>

<style scoped>
.search {
  margin-bottom: 20px;
}

.search-form {
  display: grid;
  grid-template-columns: 1fr 150px;
  align-items: end;
  gap: 10px;
}
.search-btn {
  max-width: 150px;
  width: 100%;
  padding: 14px;
  border-radius: 4px;
}

.search-label {
  display: grid;
  gap: 3px;
}
.search-input {
  height: 40px;
  padding: 0 10px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
}
</style>
