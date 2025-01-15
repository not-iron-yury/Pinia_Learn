<script setup>
import { useMovieStore } from '../stores/MovieStore';
import { useSearchStore } from '../stores/SearchStore';

const movieStore = useMovieStore();
const searchStore = useSearchStore();

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <article class="movie">
    <!-- <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      class="movie-img"
    /> -->
    <div class="movie-name">{{ movie.original_title }} ({{ movie.release_date }})</div>
    <p class="movie-overview">{{ movie.overview }}</p>

    <div class="movie-buttons" v-if="!isSearch">
      <button class="btn movie-buttons-watched" @click="movieStore.toggleWatched(movie.id)">
        <span>{{ movie.isWatched ? 'Просмотренно' : 'В избранное' }}</span>
      </button>
      <button class="btn movie-buttons-delete" @click="movieStore.deleteMovie(movie.id)">
        <span>Удалить</span>
      </button>
    </div>
    <div class="movie-buttons" v-else>
      <button class="btn movie-buttons-watched" @click="searchStore.addToUserMovies(movie)">
        <span>Добавить в список</span>
      </button>
    </div>
  </article>
</template>

<style lang="css" scoped>
.movie {
  display: grid;
  grid-template-columns: 220px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  /* justify-content: center; */
}

.movie-buttons-watched {
  color: #fff;
  background: rgb(0, 132, 255);
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: rgb(255, 0, 128);
}
</style>
