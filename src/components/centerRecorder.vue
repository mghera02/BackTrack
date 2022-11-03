<template>
    <div id="centerRecorder">
        <div id="backDrop"></div>
        <sideCube :pos='["-2rem","-2rem"]' :color="color"/>
        <sideCube :pos='["-2rem","31rem"]' :color="color"/>
        <sideCube :pos='["31rem","-2rem"]' :color="color"/>
        <sideCube :pos='["31rem","31rem"]' :color="color"/>
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
        width:35rem;
        height:35rem;
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