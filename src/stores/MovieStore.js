import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// ---------- Options API ---------- //
// export const useMovieStore = defineStore('movieStore', {
//   state: () => ({
//     movies: [],
//     activeTab: 2,
//   }),
//   getters: {
//     watchedVMoveies() {
//       return this.movies.filter(itm => itm.isWatched);
//     },
//   },
//   actions: {
//     setActiveTab(id) {
//       this.activeTab = id;
//     },
//     toggleWatched(id) {
//       const indx = this.movies.findIndex(el => el.id === id);
//       this.movies[indx].isWatched = !this.movies[indx].isWatched;
//     },
//     deleteMovie(id) {
//       this.movies = this.movies.filter(el => el.id !== id);
//     },
//   },
// });

// ---------- Composition API ---------- //
export const useMovieStore = defineStore('movieStore', () => {
  // state
  const movies = ref([]);
  const activeTab = ref(2);

  // getters
  const watchedVMoveies = computed(() => movies.value.filter(itm => itm.isWatched));

  // actions
  const setActiveTab = id => {
    activeTab.value = id;
  };
  const toggleWatched = id => {
    const indx = movies.value.findIndex(el => el.id === id);
    movies.value[indx].isWatched = !movies.value[indx].isWatched;
  };
  const deleteMovie = id => {
    movies.value = movies.value.filter(el => el.id !== id);
  };

  return {
    movies,
    activeTab,
    watchedVMoveies,
    setActiveTab,
    toggleWatched,
    deleteMovie,
  };
});
