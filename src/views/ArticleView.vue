<template>
  <main>
    <div class="container-article" v-if="article">
      <div class="title">
        <h1>{{ article.title }}</h1>
      </div>
      <section class="container-text">
        <div v-html="article.content"></div>
      </section>
    </div>
  </main>
</template>

<script>
import data from '@/data.json'

export default {
  name: 'ArticleView',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: null,
    }
  },
  mounted() {
    this.fetchArticle()
  },
  methods: {
    fetchArticle() {
      const article = data.article.find((article) => article.post_id === this.id)
      if (article) {
        this.article = article
      } else {
        console.error('Article not found')
      }
    },
  },
}
</script>

<style scoped>
main {
  margin-top: 10%;
}
.container-article {
  box-sizing: border-box;
  width: 80%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.title_img {
  width: 400px !important;
  margin-top: 2%;
  height: auto;
}

.container-text {
  width: 55%;
}

.container-text img {
  width: 100% !important;
  height: auto;
}
.container-article img {
  width: 100% !important;
  height: auto;
}
</style>
