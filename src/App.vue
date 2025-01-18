<script setup>
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <header>
    <TheNavigation />
  </header>
  <main><RouterView /></main>

  <footer>
    <TheFooter />
  </footer>
</template>
