import { defineStore } from 'pinia'
import data from '@/data.json'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    results: [],
  }),
  actions: {
    fetchResults() {
      if (this.searchQuery.trim()) {
        this.results = data.article.filter(
          (article) =>
            (article.title &&
              article.title.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
            (article.description &&
              article.description.toLowerCase().includes(this.searchQuery.toLowerCase())),
        )
      } else {
        this.results = data.article
      }
    },
    updateSearchQuery(query) {
      this.searchQuery = query
      this.fetchResults()
    },
  },
})
