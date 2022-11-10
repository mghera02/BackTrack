<template>
    <div id = "leftBox">
        <div id="innerImage">
            <div :style="[getImage()]"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'leftBox',
        data() {
            return {
            }
        },
        methods: {
            getImage() {
                return {
                    'position': 'relative',
                    'left': '2vw',
                    'top': '2vw',
                    'width': '20vw',
                    'height': '20vw',        
                    'background-image': `url(${this.image})`,
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    'background-size': 'contain',
                }
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
    #leftBox {
        position:relative;
        background:white;
        height: 70%;
        top:15%;
        width: 25vw;
    }
</style>