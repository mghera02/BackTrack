<template>
    <div id="scanningPage">
        <triangle :color="orange" :size="'large'"/>
        <triangle :color="blue" :size="'small'"/>
        <centerRecorder />
        <timer />
    </div>
</template>

<script>
    import centerRecorder from './centerRecorder.vue'
    import triangle from './triangle.vue'
    import timer from './timer.vue'

    export default {
        name: 'Scanning',
        data() {
            return {
                orange: "orange",
                blue: "#00698A"
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
            triangle,
            timer
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