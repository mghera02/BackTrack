<template>
    <div id="popup">
        <leftBox
            id="leftBox"
            :image = 'image'/>
        <rightBox 
            :image = 'image'
            id="rightBox"
        />
    </div>
</template>

<script>
    import leftBox from './leftBox.vue'
    import rightBox from './rightBox.vue'

    export default {
        name: 'popup',
        data() {
            return {
            }
        },
        methods: {
        },
        props: {
            image: String
        },
        computed: {
        },
        components: {
            leftBox,
            rightBox,
        },
        mounted: function () {
        },
    }
</script>

<style>
    #popup {
        position:relative;
        width: 70vw;
        height:70vh;
        top: 20vh;
        left: 5vw;
        background:#F4F4F4;
        z-index: 4;
        overflow-y: hidden;
    }

    #leftBox {
        left: 6vw;
        position: absolute;
        background: white;
    }

    #rightBox {
        right: 6vw;
        position: absolute;
        background: #156595;
    }
</style>