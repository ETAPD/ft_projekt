<template>
  <div v-if="results.length">
    <div v-for="(row, rowIndex) in chunkedResults" :key="rowIndex" class="row image-container">
      <div
        v-for="post in row"
        :key="post.post_id"
        class="col"
        :style="{
          padding: '10px',
          margin: '10px',
          backgroundImage: `url(${post.title_img})`,
          backgroundSize: 'cover',
        }"
        @click="goToArticle(post.post_id)"
      >
        <h2 class="title">{{ post.title }}</h2>
        <p class="description">{{ truncateContent(post.content, 200) }}</p>
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
      window.location.href = `article.php?id=${postId}`
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
