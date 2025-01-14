import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        id: 3,
        original_title: 'Бэтмен навсегда',
        overview:
          'В третьем фильме «Бэтмен навсегда» (1995) Китона заменил Вэл Килмер, а режиссёром стал Джоэл Шумахер (Бёртон остался продюсером). Сборы составили 336 млн.',
        release_date: '1995',
        isWatched: false,
      },
      {
        id: 2,
        original_title: 'Бэтмен возвращается',
        overview: 'В 1992 году вышел сиквел, где Бэтмена вновь сыграл Китон. Сборы составили 266 миллионов долларов.',
        release_date: '1992',
        isWatched: false,
      },
      {
        id: 1,
        original_title: 'Бэтмен',
        overview:
          'В 1989 году вышел фильм Бэтмен, снятый Тимом Бёртоном. Роль Бэтмена исполнил Майкл Китон, а роль Джокера — Джек Николсон. Фильм получил восторженные отклики фанатов и критиков, при бюджете в $48 млн он собрал $411 млн в прокате, став самым прибыльным фильмом по комиксам DC, оставаясь таковым до 2008 года.',
        release_date: '1989',
        isWatched: false,
      },
    ],
    activeTab: 2,
  }),
  getters: {
    watchedVMoveies() {
      return this.movies.filter(itm => itm.isWatched);
    },
  },
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    toggleWatched(id) {
      const indx = this.movies.findIndex(el => el.id === id);
      this.movies[indx].isWatched = !this.movies[indx].isWatched;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter(el => el.id !== id);
    },
  },
});
