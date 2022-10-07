<template>
    <div class="logInButton" :style="[getColor()]">
    </div>
</template>

<script>
    export default {
        name: 'logInButton',
        data() {
            return {
            }
        },
        methods: {
            getColor() {
                return {
                    background: this.color,
                }
            },
        },
        props: {
            color: String,
        },
        computed: {
        },
        mounted: function () {
        },
    }
</script>

<style>
    .logInButton {
        width: 14vw;
        height: 3vw;
        position: relative;
        left: 15vw;
        top: 19vw;  
        margin-bottom: 1vw;
    }
</style>