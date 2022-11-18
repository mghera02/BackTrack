<template>
    <div id="Contact">
        <div id="WhiteBox">
            <bubble :color="lightOrange" :size="small" :zLevel='1' :pos="['20vh', '10vw']"/>
            <bubble :color="teal" :size="big" :zLevel='0' :pos="['25vh', '4vw']"/>
            <bubble :color="darkBlue" :size="medium" :zLevel='1' :pos="['40vh', '7vw']"/>
            <div id="ContactHeader">Contact us</div>
            <div id="GmailParent">
                <div id="Gmail"></div>
            </div>
            <div id="InstagramParent">
                <div id="Instagram"></div>
            </div>
            <div id="TwitterParent">
                <div id="Twitter"></div>
            </div>

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
        height: 70vh;
        width: 40vw;
    }
    #ContactHeader {
        color: black;
        font-size: 3.5vw;
        font-family: 'Roboto', sans-serif;
        position: relative;
        top: 15vw;
        left: 16vw;
    }
    #GmailParent {
        position: relative;
        top: 18vw;
        left: 16vw;
        width: 50%;
        height: 50%; 
    }
    #Gmail {
        width: 5vw;
        height: 3.5vw;
        background-image: url('../../assets/gmail.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #InstagramParent {
        position: relative;
        top: 0.5vw;
        left: 22.75vw;
        width: 30%;
        height: 30%; 
    }
    #Instagram {
        width: 4vw;
        height: 4vw;
        background-image: url('../../assets/instagram.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    #TwitterParent {
        position: relative;
        top: -10.5vw;
        left: 28vw;
        width: 30%;
        height: 30%;
    }
    #Twitter {
        width: 5.3vw;
        height: 5.3vw;
        background-image: url('../../assets/twitter.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>