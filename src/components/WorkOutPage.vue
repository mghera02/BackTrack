<template>
    <div id="workOutPage">
        <dualBubble :color="darkBlue" :size="smallest"/>
        <dualBubble :color="black" :size="small"/>
        <dualBubble :color="white" :size="large"/>
        <dualBubble :color="darkBlue" :size="largest"/>
    </div>
</template>

<script>
    import dualBubble from './dualBubble.vue'

    export default {
        name: 'workOutPage',
        data() {
            return {
                darkBlue:"#032539",
                black: '#1D1D1D',
                white: '#F4F4F4',
                smallest: "20em",
                small: "30em",
                large: "25em",
                largest: "20em",
            }
        },
        methods: {
        },
        props: {
        },
        computed: {
        },
        components: {
            dualBubble,
        },
        mounted: function () {
        },
    }
</script>

<style>
    #workOutPage {
        height: 100vh;
        width: 100vw;
        background: white;
    }
</style>