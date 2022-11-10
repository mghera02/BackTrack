<template>
    <div id="Contact">
        <div id="WhiteBox">
            <bubble :color="lightOrange" :size="small" :zLevel='1' :pos="['20vh', '10vw']"/>
            <bubble :color="teal" :size="big" :zLevel='0' :pos="['25vh', '4vw']"/>
            <bubble :color="darkBlue" :size="medium" :zLevel='1' :pos="['40vh', '8vw']"/>
        </div>
        <div id="Header">
            Contact us
        </div>
        <div id="Gmail">
        </div>
    </div>
</template>

<script>
    import bubble from '../Home/bubble.vue'
    export default {
        name: 'Contact',
        data() {
            return {
                lightOrange: "#fa991c",
                darkBlue: "#032539",
                teal: "#1c768f",
                small: "5vw",
                medium: "7vw",
                big: "10vw",
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
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    #Contact {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background: #637b8a;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #WhiteBox {
        background: white;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70vh;
        width: 40vw;
    }
    #Header {
        color: black;
        font-size: 3.15vw;
        font-family: 'Roboto', sans-serif;
        position: relative;
        top: -4vh;
        left: -24vw;
    }
    #Gmail {
        width: 7.5%;
        height: 7.5%;
        background-image: url('../../assets/gmail.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>