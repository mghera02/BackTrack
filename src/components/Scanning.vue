<template>
    <div id="scanningPage">
        <triangle />
        <centerRecorder />
    </div>
</template>

<script>
    import centerRecorder from './centerRecorder.vue'
    import triangle from './triangle.vue'

    export default {
        name: 'Scanning',
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
            centerRecorder,
            triangle
        },
        mounted: function () {
        },
    }
</script>

<style>
    #scanningPage {
        width:100%;
        height:100%;
        background: #00698A;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>