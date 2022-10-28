<template>
    <div id="centerRecorder">
        <div id="backDrop"></div>
        <sideCube :pos='["-20px","-20px"]' :color="color"/>
        <sideCube :pos='["-20px","570px"]' :color="color"/>
        <sideCube :pos='["570px","-20px"]' :color="color"/>
        <sideCube :pos='["570px","570px"]' :color="color"/>
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
    #centerRecorder {
        position:relative;
        background: white;
        width:650px;
        height:650px;
        display: flex;
        z-index:2;
    }

    #backDrop{
        position:relative;
        background:white;
        width:100%;
        height:100%;
        z-index:2;
    }
</style>