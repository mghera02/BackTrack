<template>
    <div class="bubble" :style="[getColor(), getSize()]">
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
            }
        },
        props: {
            color: String,
            size: String,
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