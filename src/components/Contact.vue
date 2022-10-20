<template>
    <div id="Contact">
        <div id="WhiteBox">
            <bubble :color="lightOrange" :size="small" :zLevel='1' :pos="['20vh', '10vw']"/>
            <bubble :color="teal" :size="big" :zLevel='0' :pos="['25vh', '8vw']"/>
            <bubble :color="darkBlue" :size="medium" :zLevel='1' :pos="['40vh', '10vw']"/>
        </div>
    </div>
</template>

<script>
    import bubble from './bubble.vue'
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
                halloween: "#EB6123",
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
    #Contact {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background: #1c768f;
        opacity: 0.65;
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
</style>