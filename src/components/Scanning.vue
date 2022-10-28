<template>
    <div id="scanningPage">
        <centerRecorder />
    </div>
</template>

<script>
    import centerRecorder from './centerRecorder.vue'

    export default {
        name: 'Scanning',
        data() {
            return {
            }
        },
        methods: {
        },
        props: {
        },
        computed: {
        },
        components: {
            centerRecorder
        },
        mounted: function () {
        },
    }
</script>

<style>
    #scanningPage {
        width:100%;
        height:100%;
        background: #032539;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>