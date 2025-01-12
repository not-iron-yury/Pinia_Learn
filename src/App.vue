<script setup>
import { useMovieStore } from './stores/MovieStore';
import Movie from './components/Movie.vue';

const movieStore = useMovieStore();

function handlerClickTabs(id) {
  // movieStore.activeTab = id;
  movieStore.setActiveTab(id);
}
</script>

<template>
  <header class="header">
    <img src="/pinia.svg" alt="logo" class="header-logo" />
    <h2>Learn Pinia</h2>
  </header>
  <main>
    <div class="tabs">
      <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]" @click="handlerClickTabs(1)">
        Избранное
      </button>
      <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]" @click="handlerClickTabs(2)">Поиск</button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <section>
        <div class="movies-header">
          <h2 class="movies-title">Избранное</h2>
          <span class="movies-count">(всего {{ movieStore.watchedVMoveies.length }} шт.)</span>
        </div>
        <Movie v-for="movie of movieStore.watchedVMoveies" :key="movie.id" :movie="movie" />
      </section>
      <section>
        <div class="movies-header">
          <h2 class="movies-title">Cписок фильмов</h2>
          <span class="movies-count">(всего {{ movieStore.movies.length }} шт.)</span>
        </div>
        <Movie v-for="movie of movieStore.movies" :key="movie.id" :movie="movie" />
      </section>
    </div>
    <div class="search" v-else-if="movieStore.activeTab === 2">Поиск</div>
  </main>
</template>

<style lang="css">
.movies {
  display: grid;
  gap: 40px;
}
.movies-header {
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 20px;
}
.movies-title {
  font-size: 25px;
  margin: 0;
}
.movies-count {
  font-size: 14px;
  padding-bottom: 5px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  max-width: 200px;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: rgb(37, 230, 37);
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}
</style>
