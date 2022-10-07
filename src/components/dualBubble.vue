<template>
    <div class="dualBubble" :style="[getColor(), getSize(), getZLevel(), getPosition()]">
        <innerBubble 
            :innerColor="innerColor"
            :image="image"
        >
        </innerBubble>
    </div>
</template>

<script>
    import innerBubble from './innerBubble.vue'

    export default {
        name: 'dualBubble',
        data() {
            return {
                darkBlue:"#156595",
                black: '#1D1D1D',
                white: '#F4F4F4',
                small: "32.5em",
                large: "35em",
                largest: "40em",
            }
        },
        methods: {
            getColor() {
                let borderNeeded = 0;

                if(this.color=='#F4F4F4') {
                    borderNeeded = 1;
                }

                return {
                    background: this.color,
                    border: borderNeeded ? 'solid' : 'none',
                    borderColor: "#032539"
                }
            },
            getSize() {
                return {
                    height: this.size,
                    width: this.size,
                }
            },
            getZLevel() {
                return {
                    zIndex: this.zLevel
                }
            },
            getPosition() {
                return {
                    position: 'absolute',
                    left: this.position[0],
                    top: this.position[1],
                }
            }
        },
        props: {
            color: String,
            size: String,
            zLevel: Number,
            position: Array,
            innerColor: String,
            image: String,
        },
        computed: {
        },
        components: {
            innerBubble
        },
        mounted: function () {
        },
    }
</script>

<style>
    .dualBubble {
        border-radius: 50%;
        position:relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dualBubble:hover {
        z-index: 2 !important;
        box-shadow: 0em 0em 1em #fff;
    }
</style>
