<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Nav />
  <Footer />
</template>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
.book {
  z-index:1 ;
  position: relative;
  margin-top: -120px; /* Adjust this value as needed */
}
</style>
