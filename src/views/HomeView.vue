<script>
import { useSearchStore } from '@/stores/search'
import SearchArticle from '@/components/SearchArticle.vue'
export default {
  name: 'HomeView',
  components: {
    SearchArticle,
  },
  data() {
    console.log('Data initialization')
    return {
      useSearchStore: useSearchStore(),
      results: [],
    }
  },
  computed: {
    searchResults() {
      console.log('Computing searchResults')
      const results = this.useSearchStore.results
      console.log('Computed results:', results)
      return results
    },
  },
  watch: {
    searchResults(newResults) {
      console.log('Watch searchResults - new value:', newResults)
      this.results = newResults
      console.log('Updated results array:', this.results)
      true
    },
  },
  mounted() {
    this.useSearchStore.fetchResults()
  },
}
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img src="\media\img\gamer_font.jpg" alt="" class="img-fluid" />
    </div>

    <div class="container" id="results"></div>
    <SearchArticle :results="results" :key="results.length" />
  </div>
</template>

<style scoped>
.col {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 250px;
  width: 100%;
  cursor: pointer;
}

.col::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: background-color 0.5s;
  border-radius: 25px;
  z-index: 0;
  cursor: pointer;
}

.col:hover::before {
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.col .title {
  display: inline;
  z-index: 1;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
}

.col .desription {
  display: none;
  z-index: 1;
  opacity: 1 !important;
}

.col:hover .title {
  display: none;
}

.col:hover .desription {
  display: inline;
  color: rgba(255, 255, 255, 1) !important;
  opacity: 1 !important;
}

.image-container img {
  object-fit: cover;
  object-position: center;
  width: 95%;
  height: 450px;
  margin-top: 2%;
  justify-content: center;
  align-items: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
