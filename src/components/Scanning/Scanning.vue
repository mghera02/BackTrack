<template>
    <div id="scanningPage">
        <triangle 
            @click="triangleHit()" 
            :color="orange" 
            :size="'large'"
        />
        <triangle 
            @click="triangleHit()" 
            :color="blue" 
            :size="'small'"
        />
        <centerRecorder />
        <timer />
        <div v-if="popUp">
            <popUpBody />
        </div>
    </div>
</template>

<script>
    import centerRecorder from './centerRecorder.vue'
    import triangle from './triangle.vue'
    import timer from './timer.vue'
    import popUpBody from './popUpBody.vue'
   
    export default {
        name: 'Scanning',
        data() {
            return {
                white: "white",
                red: "#FF3055",
                green: "#0EEF4d",
                orange: "orange",
                blue: "#00698A",
                popUp: false,
            }
        },
        methods: {
            triangleHit() {
                if(this.popUp) {
                    this.popUp = false;
                } else {
                    this.popUp = true;
                }
            },
            popUpClose() {
                this.popUp = false;
            }
        },
        props: {
        },
        computed: {
        },
        components: {
            centerRecorder,
            triangle,
            timer,
            popUpBody
        },
        mounted: function () {
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    #scanningPage {
        width:100%;
        height:100%;
        background: #00698A;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #detailPopUp {
        width: 70vw;
        height: 45vw;
        background: #F4F4F4;
        position: absolute;
        top: 10vh;
        left: 15vw;
        z-index: 2;
    }

    #popUpTitle {
        text-align:center;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 5.6vw;
        transform: scaleX(1.15);
        color:black;
        position:relative;
        top:6vw;
        text-shadow: 1px 2px 4px #333;
    }

    #returnSymbol {
        font-size: 2em;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
    }

    #popUpBody {
        position:relative;
        top:0vw;
        left:0vw;
        width:100%;
        height:100%;
        align-content: bottom;
    }

    #colorGroup {
        position:relative;
        display: flex;
        flex-direction: row;
        position:relative;
        top: 10vw;
        left: 10vw;
        width: 80vw;
    }

    #labelGroup {
        color: black;
        font-size: 2vw;
        position:relative;
        display: flex;
        flex-direction: row;
        position:relative;
        top: 17vw;
        left: 10vw;
        width: 50vw;
        text-align:center;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        transform: scaleX(1.15);
        text-shadow: 1px 2px 4px #333;
    }

    #circleLabel {
        position: relative;
        top: -10vw;
        left: -1.5vw;
        min-width: 20vw;
        height: 12.5vw;
        display: flex;
        flex-direction: row;
        text-align:center;
        margin-right:-3.25vw;
        align-items: center;
        justify-content:center;
    }

    #returnBtn {
        position:absolute;
        top:auto;
        bottom:2vw;
        left: 85%;
        width:10%;
        font-size: 1.5em;
        text-align: center;
        color: black;
        cursor: pointer;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
    }
</style>