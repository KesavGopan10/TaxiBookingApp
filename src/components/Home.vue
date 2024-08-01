<script setup>
import Header from './Header.vue';
import Book from './Book.vue';
import About from './About.vue';
import ChooseSection from './ChooseSection.vue';
import Blog from './Blog.vue';
import Carousel from './carousel.vue';
import Download from './DownloadApp.vue';

</script>

<template>  
    <Header />
    <Book class="book" />
    <About />
    <ChooseSection />
    <Download />
    <Blog />
    <Carousel />
</template>

<style scoped>
.book {
  z-index:1 ;
  position: relative;
  margin-top: -120px; /* Adjust this value as needed */
}
</style>