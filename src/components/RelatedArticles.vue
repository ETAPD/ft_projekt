<template>
  <div v-if="relatedArticles.length" class="related-articles-container">
    <h2 class="related-articles-heading">Podobné články</h2>
    <div
      v-for="(row, rowIndex) in chunkedRelatedArticles"
      :key="rowIndex"
      class="row image-container"
    >
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
  name: 'RelatedArticles',
  props: {
    relatedArticles: {
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
    chunkedRelatedArticles() {
      const chunkSize = 3
      const limitedResults = this.relatedArticles.slice(0, 9)
      const chunks = []
      for (let i = 0; i < limitedResults.length; i += chunkSize) {
        chunks.push(limitedResults.slice(i, i + chunkSize))
      }
      return chunks
    },
  },
}
</script>

<style scoped>
.related-articles-container {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
}

.related-articles-heading {
  margin-top: 0;
}

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
  z-index: 1;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
}

.col .description {
  display: none !important;
  z-index: 1;
  opacity: 1 !important;
}

.col:hover .title {
  display: none;
}

.col:hover .description {
  display: block !important;
  color: rgba(255, 255, 255, 1) !important;
  opacity: 1 !important;
}

.image-container img {
  object-fit: cover;
  object-position: center;
  width: 95%;
  height: 450px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
