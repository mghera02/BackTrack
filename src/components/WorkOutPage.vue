<template>
    <div id="workOutPage">
        <div id="backgroundBlur" :style="ifDisplay()" @click="closePopup"></div>
        <div id="bubbleCollection">
            <dualBubble 
                :color="darkBlue" 
                :size="small" 
                :zLevel='1' 
                :position='["19.5vw","7.5vw"]'
                :innerColor = "white"
                :image = "'workoutImage.png'"
                @getClick="getClick"
                :num = '1'
            />
            <dualBubble 
                :color="black" 
                :size="largest" 
                :zLevel='0' 
                :position='["38vw","2vw"]'
                :innerColor = "darkBlue"
                :image = "'workoutImage.png'"
                @getClick="getClick"
                :num = '2'
            />
            <dualBubble 
                :color="white" 
                :size="large" 
                :zLevel='0' 
                :position='["18vw", "24vw"]'
                :innerColor = "darkBlue"
                :image = "'workoutImage.png'"
                @getClick="getClick"
                :num = '3'
            />
            <dualBubble 
                :color="darkBlue" 
                :size="small" 
                :zLevel='1' 
                :position='["39.5vw","25vw"]'
                :innerColor = "white"
                :image = "'workoutImage.png'"
                @getClick="getClick"
                :num = '4'
            />
            <popup 
                :style="ifDisplay()" 
                :image = "popUpImage"
                @click="closePopup"
            />
        </div>
    </div>
</template>

<script>
    import dualBubble from './dualBubble.vue'
    import popup from './popup.vue'

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
                numSelected: -1,
                popUpImage: "workoutImage.png",
            }
        },
        methods: {
            getClick(num) {
                this.numSelected = num;
            },
            closePopup() {
                if(this.numSelected != -1) {
                    this.numSelected = -1;
                }
            },
            ifDisplay() {
                if(this.numSelected == -1) {
                    return {
                        display: 'none',
                    }
                } else {
                    return {
                        display: 'block',
                    }
                }
            }
        },
        props: {
        },
        computed: {
        },
        components: {
            dualBubble,
            popup,
        },
        mounted: function () {
        },
        watch: {
            numSelected(newNum) {
                if (newNum != -1) {
                    console.log(newNum);
                } else {
                    console.log(newNum);
                }
            }
        }
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

    #backgroundBlur {
        position:absolute;
        background: black;
        top: 0vw;
        left: 0vw;
        width: 100vw;
        height: 100vh;
        z-index: 4;
        opacity: .4;
    }
</style>