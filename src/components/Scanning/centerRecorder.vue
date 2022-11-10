<template>
    <div id="centerRecorder">
        <div id="backDrop"></div>
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
                color: 'white'
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
    }
</style>