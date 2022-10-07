<template>
    <div class="bubble" :style="[getColor(), getSize(), getZLevel(), getPos()]">
    </div>
</template>

<script>
    export default {
        name: 'bubble',
        data() {
            return {
            }
        },
        methods: {
            getColor() {
                return {
                    background: this.color
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
            getPos() {
                return {
                    position: "absolute",
                    top: this.pos[0],
                    left: this.pos[1],
                }
            }
        },
        props: {
            color: String,
            size: String,
            zLevel: Number,
            pos: Array,
        },
        computed: {
        },
        mounted: function () {
        },
    }
</script>

<style>
    .bubble {
        border-radius: 50%;
        opacity: 0.65;
    }
</style>