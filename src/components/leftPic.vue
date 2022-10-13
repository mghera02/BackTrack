<template>
    <div id = "leftPic">
        <div id="innerImage" :style="[getImage()]"></div>
    </div>
</template>

<script>
    export default {
        name: 'templatePage',
        data() {
            return {
            }
        },
        methods: {
            getImage() {
                return {
                    'background-image': `url(${this.image})`,
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover',
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
    #leftPic {
        position:relative;
        background:white;
        width:20vw;
        height:55vh;
        left: 5vw;
        top:7.5vh;
    }

    #innerImage {
        width: 80%;
        height: 80%;
    }
</style>