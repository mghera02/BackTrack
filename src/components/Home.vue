<template>
    <div id="Home">
        <bubble :color="lightOrange" :size="small" :zLevel='1' :pos="['4vw', '75vw']"/>
        <bubble :color="teal" :size="big" :zLevel='0' :pos="['12vw', '60vw']"/>
        <bubble :color="darkBlue" :size="medium" :zLevel='1' :pos="['28vw', '68vw']"/>
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
                small: "15vw",
                medium: "17vw",
                big: "23vw",
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