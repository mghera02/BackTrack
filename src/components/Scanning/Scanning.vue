<template>
    <div id="scanningPage">
        <triangle @click="triangleHit()" :color="orange" :size="'large'"/>
        <triangle @click="triangleHit()" :color="blue" :size="'small'"/>
        <centerRecorder />
        <timer />
        <div v-if="popUp" id="detailPopUp">
            
        </div>
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
                blue: "#00698A",
                popUp: false,
            }
        },
        methods: {
            triangleHit() {
                this.popUp = true;
                console.log("hello");
            }
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

    #detailPopUp {
        width: 10vw;
        height: 10vw;
        background: white;
        position: absolute;
    }
</style>