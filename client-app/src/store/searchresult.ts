import { defineStore } from 'pinia';

export const useSearchResultsStore = defineStore({
  id: 'searchResults',
  state: () => ({
    results: [] as { id: number; user_id: string; speciality: string; status: string }[],
  }),
  actions: {
    setResults(results: { id: number; user_id: string; speciality: string; status: string }[]) {
      this.results = results;
    },
  },
});