<template>
    <div class="dualBubble" :style="[getColor(), getSize()]">
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
                    background: this.color,
                }
            },
            getSize() {
                return {
                    height: this.size,
                    width: this.size,
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
    .dualBubble {
        border-radius: 50%;
        position:relative;
    }
</style>