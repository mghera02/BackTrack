<template>
    <div id="Home">
        <bubble :color="lightOrange" :size="small" :zLevel='1' :pos="['4vw', '74vw']"/>
        <bubble :color="teal" :size="big" :zLevel='0' :pos="['12vw', '60vw']"/>
        <bubble :color="darkBlue" :size="medium" :zLevel='1' :pos="['28vw', '68vw']"/>
        <logInButton :color="halloween"/>
        <logInButton :color="'black'"/>
        <div id="Header">
            Back Track
        </div>
        <div id="Subheadding">
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
    #Header {
        color: black;
        font-size: 3em;
        font-family: 'Roboto', sans-serif;
    }
</style>