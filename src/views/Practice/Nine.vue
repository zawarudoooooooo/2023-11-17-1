<script>
export default{
    data(){
        return{
            arr:[1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>

<template>
    <div class="content">
        <div class="header">
        </div>
        <div class="first">
        </div>
        <div class="middle">
            <div class="left">
            </div>
            <div class="right">
                <div class="text">
                    <span>Title</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in?</p>
                </div>
                <div class="boxArea">
                    <div class="box" v-for="item in arr">
                        <p>Product name</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .content{
        width: 80vw;
        height: 230vh;
        margin: auto;
        margin-top: 5vmin;
        border: 1px solid black;

        .header{
            width: 80vw;
            height: 20vh;
            background-color: mistyrose;
        }

        .first{
            width: 80vw;
            height: 50vh;
            background-color: linen;
            margin-bottom: 5vmin;
        }

        .middle{
            width: 80vw;
            height: 140vh;
            display: flex;
            justify-content: space-between;

            .left{
                width: 20vw;
                height: 130vh;
                background-color: mistyrose;
            }

            .right{
                width: 55vw;
                height: 100vh;

                .text{
                    width: 50vw;
                    height: 10vmin;
                    display: flex;
                    justify-content: space-between;

                    span{
                        font-size: 34pt;
                    }

                    p{
                        font-size: 16pt;
                    }
                }

                .boxArea{
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    margin-top: 5vmin;
                    .box{
                        width: 30vmin;
                        height: 30vmin;
                        background-color: linen;
                        margin-bottom: 7vmin;

                        p{
                            margin-left: 8vmin;
                            margin-top: 32vmin;
                        }
                    }
                }
            }
        }

        .footer{
            width: 80vw;
            height: 15vh;
            background-color: mistyrose;
        }
    }
</style>