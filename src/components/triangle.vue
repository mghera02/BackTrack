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
        left:10rem;
        border-left: 4rem solid transparent;
        border-right: 4rem solid transparent;
        border-top: 6rem solid orange;
    }
</style>