<script>
  /* eslint-disable */
  import Home from './components/Home/Home.vue'
  import templatePage from './components/templatePage.vue'
  import workOutPage from './components/WorkOut/WorkOutPage.vue'
  import contact from './components/Contact/Contact.vue'
  import scanning from './components/Scanning/Scanning.vue'
  
  const routes = {
    '': Home,
    '/': Home,
    '#/': Home,
    '/TemplatePage': templatePage,
    '/workOutPage': workOutPage,
    '/Contact': contact,
    '/Scanning': scanning,
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