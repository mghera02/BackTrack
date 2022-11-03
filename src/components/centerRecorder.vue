<template>
    <div id="centerRecorder">
        <div id="backDrop"></div>
        <sideCube :pos='["-20pt","-20pt"]' :color="color"/>
        <sideCube :pos='["-20pt","370pt"]' :color="color"/>
        <sideCube :pos='["370pt","-20pt"]' :color="color"/>
        <sideCube :pos='["370pt","370pt"]' :color="color"/>
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
        width:425pt;
        height:425pt;
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