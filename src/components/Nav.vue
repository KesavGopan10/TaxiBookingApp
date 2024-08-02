<script setup>
import { ref } from 'vue';
import Home from './Home.vue';
import About from '../components/About.vue';
import ChooseSection from '../components/ChooseSection.vue';
import Blog from '../components/Blog.vue';
import Login from '../components/Login.vue';

const currentSection = ref('home');
const isMenuOpen = ref(false);

const setCurrentSection = (section) => {
  currentSection.value = section;
  isMenuOpen.value = false; // Close menu on section change
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Define the component mapping
const sectionComponents = {
  home: Home,
  about: About,
  choose: ChooseSection,
  blog: Blog,
  login: Login,
};
</script>

<template>
  <div class="navBar">
    <div class="nav">
      <div class="logo">RideRight</div>
      <div class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div class="links" :class="{ 'active': isMenuOpen }">
        <a @click="setCurrentSection('home')" class="link">Home</a>
        <a @click="setCurrentSection('about')" class="link">About</a>
        <a @click="setCurrentSection('choose')" class="link">Why Us</a>
        <a @click="setCurrentSection('blog')" class="link">Blog</a>
        <button class="logInBtn" @click="setCurrentSection('login')">Log In</button>
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
  position: relative;
}
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease;
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
  margin-top: -120px;
}

/* Updated styles for responsive menu */
@media screen and (max-width: 768px) {
  .nav {
    padding-left: 20px;
    box-sizing: border-box;
  }

  .links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgb(27, 31, 113);
    padding: 20px;
    gap: 15px;
  }
  .links.active {
    display: flex;
  }
  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }
  .bar {
    width: 30px;
    height: 3px;
    background-color: white;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  .menu-toggle.active .bar:nth-child(1) {
    transform: rotate(45deg);
  }
  .menu-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }
  .menu-toggle.active .bar:nth-child(3) {
    transform: rotate(-45deg);
  }
  
}
</style>