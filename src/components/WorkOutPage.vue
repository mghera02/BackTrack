<template>
    <div id="workOutPage">
        <dualBubble :color="darkBlue" :size="small" :zLevel='1' :position='["26.5vw","7.5vw"]'/>
        <dualBubble :color="black" :size="largest" :zLevel='0' :position='["45vw","2vw"]'/>
        <dualBubble :color="white" :size="large" :zLevel='0' :position='["25vw", "24vw"]'/>
        <dualBubble :color="darkBlue" :size="small" :zLevel='1' :position='["47.5vw","25vw"]'/>
    </div>
</template>

<script>
    import dualBubble from './dualBubble.vue'

    export default {
        name: 'workOutPage',
        data() {
            return {
                darkBlue:"#156595",
                black: '#1D1D1D',
                white: '#F4F4F4',
                small: "20vw",
                large: "22.5vw",
                largest: "25vw",
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