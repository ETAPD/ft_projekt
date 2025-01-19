<template>
  <ContactComponent />
</template>

<script>
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  name: 'ContactView',
  components: {
    ContactComponent,
  },
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {},
}
</script>

<style scoped>
h2 {
  text-align: center;
  color: #333;
}
main {
  margin-top: 14%;
}
.container {
  width: 75%;
  margin: 10%;
  background-color: rgb(167, 165, 165);
  border-radius: 15px;
  padding: 20px;
}
p {
  margin-bottom: 20px;
}
.contact-info {
  font-size: 18px;
}
.contact-info a {
  color: #0066cc;
  text-decoration: none;
}
.contact-info a:hover {
  color: #ff4e00;
  text-decoration: underline;
}
.social-links {
  list-style: none;
  padding: 0;
}
.social-links li {
  display: inline;
  margin-right: 10px;
}
.social-links a {
  color: #0066cc;
  text-decoration: none;
}
.social-links a:hover {
  text-decoration: underline;
}
</style>
