<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
export default{
    data(){
        return{
            arr:[1,2,3]
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(11)
    }
}
</script>

<template>
    <div class="content">
        <div class="header">
        </div>
        <div class="first">
            <div v-for="item in arr" class="box">
            </div>
        </div>
        <div class="middle">
            <div class="left">
            </div>
            <div class="right">
                <div class="title">
                    <p>Title</p>
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dicta ex rerum illum magnam facere.</p>
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
        height: 195vh;
        margin: auto;
        margin-top: 5vmin;
        border: 2px solid black;

        .header{
        width: 79.8vw;
        height: 40vh;
        background-color: #E7FBBE;
        margin-bottom: 10vmin;
        }

        .first{
            width: 80vw;
            height: 45vh;
            display: flex;
            justify-content: space-around;
            .box{
                width: 30vmin;
                height: 30vmin;
                background-color: #E7FBBE ;
            }
        }

        .middle{
            width: 70vw;
            height: 80vh;
            display: flex;
            justify-content: space-between;

            .left{
                width: 70vmin;
                height: 60vmin;
                background-color: #E7FBBE;
            }

            .right{
                width: 45vmin;
                height: 50vh;
                .title{
                    p{
                        font-size: 36pt;
                    }
                }
                .text{
                    p{
                        font-size: 18pt;
                    }
                }
            }
        }

        .footer{
            width: 79.8vw;
            height: 20vh;
            background-color: #E7FBBE;
        }
    }
</style>