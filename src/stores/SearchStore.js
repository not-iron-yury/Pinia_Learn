import { defineStore } from 'pinia';
const url = 'https://594e11f9a59c6f1d.mokky.dev/movies?original_title';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: () => [],
  }),
  actions: {
    async getMovies(search) {
      try {
        this.loader = true;
        const res = await fetch(`${url}=*${search}*`);
        const data = await res.json();
        this.movies = data;

        if (res.status !== 200) {
          console.error('Ошибка fetch', res.status);
        }
      } finally {
        this.loader = false;
      }
    },
  },
});
