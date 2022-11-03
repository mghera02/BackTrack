<template>
    <div id="triangle">
    </div>
</template>

<script>
    export default {
        name: 'triangle',
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
        },
        mounted: function () {
        },
    }
</script>

<style>
    #triangle {
        position:absolute;
        top:0;
        left:10px;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-top: 60px solid orange;
    }
</style>