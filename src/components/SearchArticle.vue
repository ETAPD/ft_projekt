<template>
  <div v-if="results.length">
    <div v-for="(row, rowIndex) in chunkedResults" :key="rowIndex" class="row image-container">
      <div
        v-for="article in row"
        :key="article.post_id"
        class="col"
        :style="{
          padding: '10px',
          margin: '10px',
          backgroundImage: `url(${article.title_img})`,
          backgroundSize: 'cover',
        }"
        @click="goToArticle(article.post_id)"
      >
        <h2 class="title">{{ article.title }}</h2>
        <p class="description" v-html="truncateContent(article.content, 200)"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchArticle',
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  methods: {
    truncateContent(content, length) {
      return content.length > length ? content.substring(0, length) + '...' : content
    },
    goToArticle(postId) {
      this.$router.push({ name: 'article', params: { id: postId } })
    },
  },
  computed: {
    chunkedResults() {
      const chunkSize = 3
      const chunks = []
      for (let i = 0; i < this.results.length; i += chunkSize) {
        chunks.push(this.results.slice(i, i + chunkSize))
      }
      return chunks
    },
  },
}
</script>

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
