<script setup>
import { ref } from 'vue';
// import SignInForm from './components/SignInForm.vue';
import Book from '../components/Book.vue';
import About from '../components/About.vue';
import ChooseSection from '../components/ChooseSection.vue';
import Blog from '../components/Blog.vue';
import Footer from '../components/Footer.vue';

const currentSection = ref('signin');
const isLoggedIn = ref(false);

const setCurrentSection = (section) => {
  currentSection.value = section;
};

const handleLogin = () => {
  isLoggedIn.value = true;
  currentSection.value = 'home';
};
</script>

<template>
  <div v-if="!isLoggedIn">
    <SignInForm @login="handleLogin" />
  </div>
  <div v-else>
    <div class="navBar">
      <div class="nav">
        <div class="logo">RideRight</div>
        <div class="links">
          <a @click="setCurrentSection('home')" class="link">Home</a>
          <a @click="setCurrentSection('about')" class="link">About</a>
          <a @click="setCurrentSection('choose')" class="link">Why Us</a>
          <a @click="setCurrentSection('blog')" class="link">Blog</a>
          <button class="logInBtn" @click="isLoggedIn = false">Log Out</button>
        </div>
      </div>
    </div>

    <main>
      <Book v-if="currentSection === 'home'" class="book" />
      <About v-if="currentSection === 'about'" />
      <ChooseSection v-if="currentSection === 'choose'" />
      <Blog v-if="currentSection === 'blog'" />
    </main>

    <Footer />
  </div>
</template>

  
  <style scoped>
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(45deg, skyblue, darkblue);
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: linear-gradient(45deg, skyblue, darkblue);
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background 0.3s ease;
    align-items: center;
    justify-content: center;
  }
  
  .form:hover {
    background: linear-gradient(45deg, darkblue, skyblue);
  }
  
  ::placeholder {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .form button {
    align-self: flex-end;
  }
  
  .flex-column > label {
    color: white;
    font-weight: 600;
  }
  
  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10em;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
    background-color: white;
  }
  
  .input {
    margin-left: 10px;
    border-radius: 10rem;
    border: none;
    width: 100%;
    height: 100%;
  }
  
  .input:focus {
    outline: none;
  }
  
  .inputForm:focus-within {
    border: 1.5px solid orange;
  }
  
  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }
  
  .flex-row > div > label {
    font-size: 14px;
    color: black;
    font-weight: 400;
  }
  
  .span {
    font-size: 14px;
    margin-left: 5px;
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
  
  .button-submit {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    background: transparent;
    transition: ease-out 0.5s;
    border: 2px solid;
    border-radius: 10em;
    box-shadow: inset 0 0 0 0 blue;
    margin: 20px 0 10px 0;
    color: white;
    font-size: 15px;
    font-weight: 500;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }
  
  .button-submit:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 royalblue;
  }
  
  .button-submit:active {
    transform: scale(0.9);
  }
  
  .p {
    text-align: center;
    color: white;
    font-size: 14px;
    margin: 5px 0;
  }
  
  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  
  .btn:hover {
    border: 1px solid orange;
  }
  
  .google svg {
    fill: #FBBB00;
  }
  
  .apple svg {
    fill: #000;
  }
  </style>
  