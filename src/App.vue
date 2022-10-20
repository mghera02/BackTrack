<script>
  /* eslint-disable */
  import Home from './components/Home.vue'
  import templatePage from './components/templatePage.vue'
  import workOutPage from './components/WorkOutPage.vue'

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

  const routes = {
    '': Home,
    '/': Home,
    '#/': Home,
    '/TemplatePage': templatePage,
    '/workOutPage': workOutPage,
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
  
  <template> 
    <component :is="currentView" />
  </template>
  
  <style>
    html, body {
      height: 100%;
      border: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: black;
      color: white;
    }
  </style>