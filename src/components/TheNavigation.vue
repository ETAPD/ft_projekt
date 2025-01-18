<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-center">
        <ul class="navbar-nav d-flex flex-row">
          <li :class="['nav-item', { active: isActive('/') }]">
            <router-link class="nav-link ps-3" to="/">Domov</router-link>
          </li>
          <li :class="['nav-item', { active: isActive('/contact') }]">
            <router-link class="nav-link ps-3" to="/contact">Kontakt</router-link>
          </li>
          <li :class="['nav-item', { active: isActive('/about') }]">
            <router-link class="nav-link ps-3" to="/about">O-nás</router-link>
          </li>
        </ul>
        <form class="d-flex ms-3" @submit.prevent>
          <input
            class="form-control me-2 search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchQuery"
            @input="onSearch"
            @focus="expandSearch"
            @blur="shrinkSearch"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { useSearchStore } from '@/stores/search'

export default {
  name: 'TheNavigation',
  data() {
    return {
      searchQuery: '',
      useSearchStore: useSearchStore(),
    }
  },
  props: {},
  methods: {
    onSearch() {
      this.useSearchStore.updateSearchQuery(this.searchQuery)
    },
    expandSearch() {
      // Add logic to expand the search input if needed
    },
    shrinkSearch() {
      // Add logic to shrink the search input if needed
    },
    isActive(route) {
      return this.$route.path === route
    },
  },
  computed: {
    useSearch() {
      return useSearchStore()
    },
  },
  watch: {
    searchQuery: function (searchQuery) {
      this.useSearchStore.updateSearchQuery(searchQuery)
    },
  },
}
</script>

<style scoped>
/* Nav bar */

nav {
  font-family: 'Barlow Condensed', sans-serif;
  background-color: rgba(29, 28, 25, 0.521) !important;
  backdrop-filter: blur(10px) !important;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
  -webkit-box-shadow: 6px 15px 40px 0px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 6px 15px 40px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 6px 15px 40px 0px rgba(0, 0, 0, 0.38);
  width: 100% !important;
  backdrop-filter: blur(10px) !important;
  font-weight: bold;
}

.nav-item.active .nav-link {
  color: #ff0000;
  text-decoration: underline;
}

nav li a:hover {
  color: #ff4e00 !important;
  text-decoration: underline;
}

nav li a {
  text-decoration: none;
  font-size: 20px !important;
  font-weight: bold;
}

nav button {
  color: black !important;
  border-color: white !important;
  font-weight: bold;
  font-family: 'Barlow Condensed', sans-serif;
}

nav button:hover {
  background-color: #ff4e00 !important;
}

.middle {
  justify-content: center;
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

.search {
  border-radius: 35px;
  height: 38px;
  width: 40px;
  background: linear-gradient(to right, #ffbe0b, #f42b03);
  border: none;
  box-shadow: none;
  color: white;
  padding-left: 9px;
  transition: 0.5s;
  cursor: pointer;
}

.search:focus {
  outline: none;
  border: none;
  box-shadow: none;
  width: 420px;
  cursor: unset;
  padding-left: 15px;
}

.search::placeholder {
  color: rgba(255, 255, 255, 0.719);
}

form.d-flex {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.placeholder-image {
  position: absolute;
  height: auto;
  width: 23px !important;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.login a:hover {
  color: #ff4e00 !important;
  text-decoration: underline;
}

.login a {
  text-decoration: none;
  font-size: 20px !important;
  font-weight: bold;
}
</style>
