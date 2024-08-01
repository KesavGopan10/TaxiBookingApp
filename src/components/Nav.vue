<script setup>
import { ref } from 'vue';
import Home from './Home.vue';
import About from '../components/About.vue';
import ChooseSection from '../components/ChooseSection.vue';
import Blog from '../components/Blog.vue';
import Login from '../components/Login.vue';


const currentSection = ref('home');

const setCurrentSection = (section) => {
  currentSection.value = section;
};

// Define the component mapping
const sectionComponents = {
  home:Home ,
  about: About,
  choose: ChooseSection,
  blog: Blog,
};
</script>

<template>
  <div class="navBar">
    <div class="nav">
      <div class="logo">RideRight</div>
      <div class="links">
        <a @click="setCurrentSection('home')" class="link">Home</a>
        <a @click="setCurrentSection('about')" class="link">About</a>
        <a @click="setCurrentSection('choose')" class="link">Why Us</a>
        <a @click="setCurrentSection('blog')" class="link">Blog</a>
        <button class="logInBtn" @click=" setCurrentSection('login')">Log In</button>
      </div>
    </div>
  </div>

  <main>
    <component :is="sectionComponents[currentSection]" />
  </main>
</template>

<style scoped>
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
.navBar {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: rgb(27, 31, 113);
}
.nav {
  color: rgb(255, 254, 254);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 60px;
  font-size: 32px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
}
.links {
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  align-items: center;
  color: rgb(255, 254, 254);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.link {
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}
.link:hover, .link:active {
  color: tomato;
}
.logInBtn {
  font-weight: 600;
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 1px solid tomato;
  background-color: tomato;
  color: white;
  padding: 2px 30px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
.logInBtn:hover {
  background-color: transparent;
  color: tomato;
}
.book {
  z-index: 0;
  position: relative;
  margin-top: -120px; /* Adjust this value as needed */
}
</style>
