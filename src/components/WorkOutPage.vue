<template>
    <div id="workOutPage">
        <div id="bubbleCollection">
            <dualBubble 
                :color="darkBlue" 
                :size="small" 
                :zLevel='1' 
                :position='["19.5vw","7.5vw"]'
                :innerColor = "white"
                :image = "'workoutImage.png'"
            />
            <dualBubble 
                :color="black" 
                :size="largest" 
                :zLevel='0' 
                :position='["38vw","2vw"]'
                :innerColor = "darkBlue"
                :image = "'workoutImage.png'"
            />
            <dualBubble 
                :color="white" 
                :size="large" 
                :zLevel='0' 
                :position='["18vw", "24vw"]'
                :innerColor = "darkBlue"
                :image = "'workoutImage.png'"
            />
            <dualBubble 
                :color="darkBlue" 
                :size="small" 
                :zLevel='1' 
                :position='["39.5vw","25vw"]'
                :innerColor = "white"
                :image = "'workoutImage.png'"
            />
        </div>
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
        position: relative;
        height: 100vh;
        width: 100vw;
        background: white;
    }

    #bubbleCollection {
        width: 80%;
        height: 100%;
        position:absolute;
        top:0vh;
        border-right: 10vw solid #fa991c;
        border-left:  10vw solid  #fa991c;
    }
</style>