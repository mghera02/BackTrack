<template>
    <div id="timer">
        00:00
    </div>
</template>

<script>
    export default {
        name: 'timer',
        data() {
            return {
            }
        },
        methods: {
        },
        props: {
        },
        computed: {
        },
        components: {
        },
        mounted: function () {
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');  

    #timer {
        position:absolute;
        right: 10px;
        font-family: 'Roboto', sans-serif;
        bottom: 10px;
        font-size:3em;
    }
</style>