import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useMovieStore } from './MovieStore';

const url = 'https://594e11f9a59c6f1d.mokky.dev/movies?original_title';

// ---------- Options API ---------- //
// export const useSearchStore = defineStore('searchStore', {
//   state: () => ({
//     loader: false,
//     movies: [],
//   }),
//   actions: {
//     async getMovies(search) {
//       try {
//         this.loader = true;
//         const res = await fetch(`${url}=*${search}*`);
//         const data = await res.json();
//         this.movies = data;

//         if (res.status !== 200) {
//           console.error('Ошибка fetch', res.status);
//         }
//       } finally {
//         this.loader = false;
//       }
//     },
//     addToUserMovies(obj) {
//       const movieStore = useMovieStore(); // а тут работает
//       movieStore.movies.push({ ...obj, isWatched: false });
//       movieStore.activeTab = 1;
//     },
//   },
// });

// ---------- Composition API ---------- //
export const useSearchStore = defineStore('searchStore', () => {
  // state
  const loader = ref(false);
  const movies = ref([]);

  // actions
  const getMovies = async search => {
    try {
      loader.value = true;
      const res = await fetch(`${url}=*${search}*`);
      const data = await res.json();
      movies.value = data;

      if (res.status !== 200) {
        console.error('Ошибка fetch', res.status);
      }
    } finally {
      loader.value = false;
    }
  };

  const addToUserMovies = obj => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...obj, isWatched: false });
    movieStore.setActiveTab(1);
  };

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies,
  };
});
