<template>
    <div id="triangleContainer">
        <div id="triangle" :style="[getAppearance()]">
        </div>
        <div v-if="color=='orange'" id="stick">
        </div>
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
            getAppearance() {
                let size;
                let top;
                let left;

                if(this.size == "small") {
                    size = 35;
                    left = 65;
                    top = 117.5;
                } else {
                    size = 50
                    left = 50;
                    top = 110;
                }

                return {
                    position: "absolute",
                    top: `${top}px`,
                    left: `${left}px`,
                    borderTop: `${size * 1.5}px solid ${this.color}`,
                    borderLeft: `${size}px solid transparent`,
                    borderRight: `${size}px solid transparent`
                }
            }
        },
        props: {
            color: String,
            size: String
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
    #stick {
        width:15px;
        height: 110px;
        background: black;
        position:absolute;
        top:0;
        left:90px;
    }

    #triangleContainer {
        cursor:pointer;
    }
</style>