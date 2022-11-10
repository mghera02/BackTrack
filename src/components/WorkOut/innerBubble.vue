<template>
    <div id="innerBubble" :style="[getColor()]">
        <div id="innerImage" :style="[getImage()]">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'dualBubble',
        data() {
            return {
            }
        },
        methods: {
            getColor() {
                return {
                    'background': this.innerColor,
                }
            },
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
            innerColor: String,
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
    #innerBubble { 
        width: 75%;
        height: 75%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #innerImage {
        width: 80%;
        height: 80%;
    }
</style>
