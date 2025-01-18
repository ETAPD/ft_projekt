import { defineStore } from 'pinia'
import data from '@/data.json'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    results: [],
  }),
  actions: {
    fetchResults() {
      try {
        if (this.searchQuery.trim()) {
          this.results = data.article.filter(
            (article) =>
              article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              article.description.toLowerCase().includes(this.searchQuery.toLowerCase()),
          )
        } else {
          this.results = data.article
        }
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    },
    updateSearchQuery(query) {
      this.searchQuery = query
      this.fetchResults()
    },
  },
})
