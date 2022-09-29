<template>
    <div id="Home">
        <bubble :color="lightOrange" :size="small"/>
        <bubble :color="teal" :size="big"/>
        <bubble :color="darkBlue" :size="medium"/>
    </div>
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

<style>
    #Home {
        height: 100vh;
        width: 100vw;
        background: white;
    }
</style>