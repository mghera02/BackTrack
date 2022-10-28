<template>
    <div id="sideCube" :style="[getPos(), getColor()]">
    </div>
</template>

<script>
    export default {
        name: 'sideCube',
        data() {
            return {
            }
        },
        methods: {
            getPos() {
                return {
                    position: "absolute",
                    top: this.pos[0],
                    left: this.pos[1],
                }
            },
            getColor() {
                let anim = ''
                let background = ''
                let border = ''

                switch(this.color) {
                    case 'red':
                        anim = 'redFadeAnim'
                        background = '#ff3055';
                        border = '#892222';
                        break;
                    case 'green':
                        anim = 'greenFadeAnim'
                        background = '#44ff73';
                        border = '#228939';
                        break;
                    case 'yellow':
                        anim = 'yellowFadeAnim'
                        background = '#44ff73';
                        border = '#228939';
                        break;
                    case 'white':
                        anim = 'cyanFadeAnim'
                        background = '#44ff73';
                        border = '#228939';
                        break;
                }
                return {
                    background: background,
                    animation: `${anim} 4s infinite`,
                    borderColor: border
                }
            }
        },
        props: {
            pos: Array,
            color: String
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
    #sideCube {
        background: #44ff73;
        width:100px;
        height:100px;
        z-index: 0;
        animation: greenFadeAnim 4s infinite;
        border-radius:5%;
        border: 2px solid;
        border-color: #228939;
    }
    @keyframes greenFadeAnim {
        0%   { box-shadow: 
            0px 0px 15px 5px #04b233,
            0px 0px 15px 10px #02a030,
            0px 0px 15px 20px #029023,
            0px 0px 15px 25px #008010
        }
        50%   { box-shadow: 
            0px 0px 7px 2.5px #04b233,
            0px 0px 7px 5px #02a030,
            0px 0px 7px 10px #029023,
            0px 0px 7px 12.5px #008010
        }
        100%   { box-shadow: 
            0px 0px 15px 5px #04b233,
            0px 0px 15px 10px #02a030,
            0px 0px 15px 20px #029023,
            0px 0px 15px 25px #008010
        }
    }

    @keyframes redFadeAnim {
        0%   { box-shadow: 
            0px 0px 15px 5px #b23030,
            0px 0px 15px 10px #a02020,
            0px 0px 15px 20px #901010,
            0px 0px 15px 25px #800000
        }
        50%   { box-shadow: 
            0px 0px 7px 2.5px #b23030,
            0px 0px 7px 5px #a02020,
            0px 0px 7px 10px #901010,
            0px 0px 7px 12.5px #800000
        }
        100%   { box-shadow: 
            0px 0px 15px 5px #b23030,
            0px 0px 15px 10px #a02020,
            0px 0px 15px 20px #901010,
            0px 0px 15px 25px #800000
        }
    }
</style>