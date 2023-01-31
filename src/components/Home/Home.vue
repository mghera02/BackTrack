<template>
    <div id="Home">
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
    </div>
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