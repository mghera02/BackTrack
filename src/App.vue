<script>
  /* eslint-disable */
  import Home from './components/Home.vue'
  import templatePage from './components/templatePage.vue'
  import workOutPage from './components/WorkOutPage.vue'
  import contact from './components/Contact.vue'
  
  const routes = {
    '': Home,
    '/': Home,
    '#/': Home,
    '/TemplatePage': templatePage,
    '/workOutPage': workOutPage,
    '/contact': contact,
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