<template>
  <ArticleComponent :article="article" />
</template>

<script>
import data from '@/data.json'
import ArticleComponent from '@/components/ArticleComponent.vue'
export default {
  name: 'ArticleView',
  components: {
    ArticleComponent,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: [],
    }
  },
  mounted() {
    this.fetchArticle()
  },
  methods: {
    fetchArticle() {
      const article = data.article.find((article) => article.post_id === this.id)
      this.article = article
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
