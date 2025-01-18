import { defineStore } from 'pinia'
import data from '@/data.json'

export const useRelatedArticlesStore = defineStore('relatedArticles', {
  state: () => ({
    relatedArticles: [],
  }),
  actions: {
    fetchRelatedArticles(category) {
      try {
        if (category) {
          this.relatedArticles = data.article
            .filter((article) => article.category_id === category)
            .slice(0, 3)
        } else {
          this.relatedArticles = []
        }
      } catch (error) {
        console.error('Error fetching related articles:', error)
      }
    },
  },
})
