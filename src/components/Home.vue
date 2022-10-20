<template>
    <div id="Home">
        <bubble :color="lightOrange" :size="small"/>
        <bubble :color="teal" :size="big"/>
        <bubble :color="darkBlue" :size="medium"/>
    </div>

    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
</template>

<script>
    import bubble from './bubble.vue'
    /* eslint-disable */
    export default {
        name: 'Home',
        data() {
            return {
                lightOrange: "#fa991c",
                darkBlue: "#032539",
                teal: "#1c768f",
                small: "5em",
                medium: "10em",
                big: "20em",
            }
        },
        methods: {
        },
        props: {
        },
        computed: {
        },
        components: {
            bubble,
        },
        mounted: function () {
        }
    }
</script>

<script setup>
  import { ref } from 'vue'
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  import { useRouter } from 'vue-router' // import router
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  const register = () => {
    firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log(data);
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>

<style>
    #Home {
        height: 100vh;
        width: 100vw;
        background: white;
    }
</style>