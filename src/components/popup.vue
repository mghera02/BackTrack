<template>
    <div id="popup">
        <leftPic/>
    </div>
</template>

<script>
    import leftPic from './leftPic.vue'

    export default {
        name: 'popup',
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
            leftPic,
        },
        mounted: function () {
        },
    }
</script>

<style>
    #popup {
        position:relative;
        width: 70vw;
        height:70vh;
        top: 20vh;
        left: 5vw;
        background:#F4F4F4;
        z-index: 4;
    }
</style>