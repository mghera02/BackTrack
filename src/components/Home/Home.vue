<template>
    <!-- <div id="Home">
        <div id="HeaderImg"></div>
        <bubble :color="lightOrange" :size="small" :zLevel='1' :pos="['4vw', '74vw']"/>
        <bubble :color="teal" :size="big" :zLevel='0' :pos="['12vw', '60vw']"/>
        <bubble :color="darkBlue" :size="medium" :zLevel='1' :pos="['28vw', '68vw']"/>
        <div id="Header">Back Track</div>
        <div id="Subheader">We got your back.</div>
        <hr>
        <div>
            <logInButton :color="halloween"/>
            <logInButton :color="'black'"/>
            <logInButton @click="goToWorkoutPage()" :color="'blue'"/>
        </div>
    </div> -->
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email1" /></p>
    <p><input type="password" placeholder="Password" v-model="password1" /></p>
    <p><button @click="register">Submit</button></p>

    <h1>Login to Your Account</h1>
    <p><input type="text" placeholder="Email" v-model="email2" /></p>
    <p><input type="password" placeholder="Password" v-model="password2" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="signIn">Submit</button></p>
</template>

<script>
    import bubble from './bubble.vue'
    import logInButton from './logInButton.vue'
    /* eslint-disable */
    export default {
        name: 'Home',
        data() {
            return {
                lightOrange: "#fa991c",
                darkBlue: "#032539",
                teal: "#1c768f",
                small: "15vw",
                medium: "17vw",
                big: "23vw",
                halloween: "#EB6123"
            }
        },
        methods: {
            goToWorkoutPage() {
                window.location.href = "/#/workOutPage"
            }
        },
        props: {
        },
        computed: {
        },
        components: {
            bubble,
            logInButton,
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
  const email1 = ref('')
  const password1 = ref('')
  const router = useRouter() // get a reference to our vue router

  // Register (Account should NOT exist with given email)
  const register = () => {
    firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email1.value, password1.value) // need .value because ref()
      .then((data) => {
        console.log(data);
        console.log('Successfully registered!');
        router.push('/#/workOutPage') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }

  // Sign In (Account SHOULD exist with given email)
  const email2 = ref('')
  const password2 = ref('')
  const errMsg = ref() // ERROR MESSAGE
  const signIn = () => { // we also renamed this method
    firebase
      .auth()
      .signInWithEmailAndPassword(email2.value, password2.value) // THIS LINE CHANGED
      .then((data) => {
        console.log(data);
        console.log('Successfully logged in!');
        router.push('/#/workOutPage') // redirect to the workout page
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
          case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
      });
  }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    #Home {
        height: 100vh;
        width: 100vw;
        background: white;
    }
    #HeaderImg {
        background-image: ('../../assets\backtrackB.png');
        top: 15vw;
        left: 14.7vw;
        height: 15vh;
        width: 15vw;
        border-width: 1vw;
        border-color: red;
    }
    #Header {
        color: black;
        font-size: 3.15vw;
        font-family: 'Roboto', sans-serif;
        position: relative;
        top: 15vw;
        left: 14.7vw;
    }
    #Subheader {
        color: black;
        font-size: 1.95vw;
        font-family: 'Roboto', sans-serif;
        position: relative;
        top: 15vw;
        left: 14.7vw;
    }
    hr {
        border: none;
        background: #fa991c;
        opacity: 0.65;
        width: 15vw;
        height: 0.2vw;
        position: relative;
        left: -27.5vw;
        top: 17vw;
    }
</style>