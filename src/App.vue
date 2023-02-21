<script>
  /* eslint-disable */
  // import Home from './components/Home/Home.vue'
  import templatePage from './components/templatePage.vue'
  import workOutPage from './components/WorkOut/WorkOutPage.vue'
  import contact from './components/Contact/Contact.vue'
  import scanning from './components/Scanning/Scanning.vue'
  // import MissionStatement from './components/MissionStatement/MissionStatement.vue'
  import Login from './components/Login/Login.vue';
  
  const routes = {
    '': Login,
    '/': Login,
    '#/': Login,
    '/TemplatePage': templatePage,
    '/workOutPage': workOutPage,
    '/Contact': contact,
    '/Scanning': scanning,
    '/MissionStatement': Login,
  }
  
  export default {
    data() {
      return {
        currentPath: window.location.hash
      }
    },
    computed: {
      currentView() {
        return routes[this.currentPath.slice(1) || '/']
      }
    },
    mounted() {
      window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash
      })
    }
  }
</script>

<script setup>
  /* eslint-disable */
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const isLoggedIn = ref(true)
  
  // runs after firebase is initialized
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })
  const signOut = () => {
    firebase.auth().signOut()
    router.push('/')
  }
</script>

<template>
  <component :is="currentView" />
</template>

<style>
  html, body {
    height: 100vh;
    width: 100vw;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: black;
    color: white;
  }
  #app {
    width:100%;
    height:100%;
  }
</style>
