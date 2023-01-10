<template>
    <div id="coloredCircle" :style="[getColor()]">
    </div>
</template>

<script>
    export default {
        name: 'coloredCircle',
        data() {
            return {
            }
        },
        methods: {
            getColor() {
                let borderColor = false;

                if(this.color == "white") {
                    borderColor = true;
                }

                if(borderColor) {
                    return {
                        'border': 'solid',
                        'border-color': 'black', 
                        'background': this.color,
                    }
                } else {
                    return {
                        'border': 'solid',
                        'border-color': 'black', 
                        'background': this.color,
                    }
                }
            }
        },
        props: {
            color: String,
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
    #coloredCircle {
        position: relative;
        top: 0vw;
        left: 0vw;
        background: #FF3055;
        width: 12.5vw;
        height: 12.5vw;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        margin-right:5vw;
    }
</style>