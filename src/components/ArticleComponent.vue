<template>
  <main>
    <div class="container-article" v-if="article">
      <div class="title">
        <h1>{{ article.title }}</h1>
      </div>
      <section class="container-text">
        <img :src="article.title_img" alt="title image" />
        <div v-html="article.content"></div>
      </section>
      <RelatedArticles :relatedArticles="relatedArticles" />
    </div>
  </main>
</template>

<script>
import { useRelatedArticlesStore } from '../stores/relatedArticles'
import RelatedArticles from './RelatedArticles.vue'

export default {
  name: 'ArticleComponent',
  components: {
    RelatedArticles,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      useRelatedArticles: useRelatedArticlesStore(),
    }
  },
  computed: {
    relatedArticles() {
      return this.useRelatedArticles.relatedArticles
    },
  },
  watch: {
    article: {
      handler(article) {
        this.useRelatedArticles.fetchRelatedArticles(article.category_id)
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.useRelatedArticles.fetchRelatedArticles(this.article.category_id)
  },
}
</script>

<style>
.container-article {
  margin-top: 10%;
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
