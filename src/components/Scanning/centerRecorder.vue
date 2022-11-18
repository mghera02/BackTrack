<template>
    <div id="centerRecorder">
        <div id="backDrop">
            <div id="startBtn">
                <div id="bigText">
                    Start
                </div>
            </div>
        </div>
        <sideCube :pos='["-30px","-30px"]' :color="color"/>
        <sideCube :pos='["-30px","480px"]' :color="color"/>
        <sideCube :pos='["480px","-30px"]' :color="color"/>
        <sideCube :pos='["480px","480px"]' :color="color"/>
    </div>
</template>

<script>
    import sideCube from './sideCube.vue'

    export default {
        name: 'centerRecorder',
        data() {
            return {
                color: 'green'
            }
        },
        methods: {
        },
        props: {
        },
        computed: {
        },
        components: {
            sideCube
        },
        mounted: function () {
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    #centerRecorder {
        position:relative;
        background: white;
        width:550px;
        height:550px;
        display: flex;
        z-index:2;
    }

    #backDrop{
        position:relative;
        background:white;
        width:100%;
        height:100%;
        z-index:2;
        border: solid;
        border-color: #999;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #startBtn{
        width:300px;
        height:300px;
        border-radius: 50%;
        border: 30px solid;
        border-color: #00698A;
        background:white;
        position:relative;
        text-align:center;
        cursor: pointer;
    }
    
    #bigText {
        transform: scaleX(1.25);
        font-size: 5em;
        font-weight: 600;
        font-family: 'Raleway', sans-serif;
        text-shadow: 1px 6px 4px #333;
        color: black;
        position:relative;
        top:100px;
    }
</style>