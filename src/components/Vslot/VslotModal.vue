<script>
export default{
    data(){
        return{

        }
    },
}
</script>

<template>
    <div class="container">
        <div class="modal">
            <!-- <i class="fa-solid fa-tree" @click="$emit('alertMessage')"></i> -->
            <!-- <p>Ha ! Ha ! Merry Christmas</p> -->
            <div class="circleRed">
                <div class="circleYellow">
                    <div class="circleMiddle">
                        <i class="fa-solid fa-cake-candles" @click="$emit('alertMessage')"></i>
                        <small>Happy Birthday</small>
                    </div>
                </div>
            </div>

        </div>

        <slot>

        </slot>

        <div class="bg"></div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        position: fixed;
        top: 0;
        left: -100;
        width: 150vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;

        .modal{
            width:25vw;
            height: 50vh;
            border-radius: 50%;
            background-color: skyblue;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid black;
            margin-left: 80vmin;
            margin-top: 25vmin;

            .circleRed{
                width:21vw;
                height: 43vh;
                border-radius: 50%;
                background-color: red;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid black;
                margin-top: 3.5vmin;

                    .circleYellow{
                        width:16vw;
                        height: 35vh;
                        border-radius: 50%;
                        background-color: yellow;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border: 1px solid black;
                        margin-top: 4vmin;

                        .circleMiddle{
                            width:12vw;
                            height: 25vh;
                            border-radius: 50%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            border: 1px solid black;
                            margin-top: 4.5vmin;

                            i{
                                color: lightgrey;
                                font-size: 30pt;
                                margin-top: 3vmin;
                                animation: rotation 5s infinite linear;
                                
                                @keyframes rotation {
                                    from {
                                            transform: rotate(0deg);
                                    }
                                    to {
                                            transform: rotate(359deg);
                                    }
                                }
                            }

                            small{
                                font-size: 20pt;
                                color: lightgrey;
                                font-weight: bold;
                                
                            }
                        }
                    }
            }



            // height: 40vh;
            // width: 50vw;
            // background-color: lightcyan;
            // border-radius: 10px;
            // display: flex;
            // flex-direction: column;
            // align-items: center;
            // position: relative;
            // position: absolute;
            // left: 29%;
            // top: 25%;


            // i{
            //     position: absolute;
            //     top: 10px;
            //     right: 10px;
            //     color: green;
            //     cursor: pointer;
            //     font-size: 50pt;
            // }

            // p{
            //     font-size: 40pt;
            //     color: dimgray;
            //     margin: auto;
            // }
        }

        .bg{
            position: absolute;
            width: inherit;
            height: inherit;
            background-color: rgba(0,0,0,0.2);
            backdrop-filter: blur(2px);
            top: 0;
            left: -100;
        }
    }
</style>