<template>
    <div id="rightBox">
        <h2>This is a Title</h2>
        <h5>This is some content</h5>
        <div id="startTrackingBtn" @click="goToScanPage()"> <span id="arrowSymbol">&#8594;</span> <br>Start Tracking</div>
    </div>
</template>

<script>
    export default {
        name: 'rightBox',
        data() {
            return {
            }
        },
        methods: {
            goToScanPage() {
                window.location.href = "/#/Scanning";
            }
        },
        props: {
            image: String
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
    #rightBox {
        position:relative;
        background:#156595;
        width:25vw;
        height:70%;
        top:15%;
        font-family: 'Roboto', sans-serif;
    }

    h2 {
        text-align:center;
        font-size: 2vw;
    }

    h5 {
        position: relative;
        left:2vw;
        font-size:1vw;
    }

    #startTrackingBtn{
        position:relative;
        top:11vw;
        left:17.5vw;
        color:white;
        width:8vw;
        cursor:pointer;
    }

    #arrowSymbol {
        position:relative;
        left:1vw;
        font-size: 2vw;
    }
</style>