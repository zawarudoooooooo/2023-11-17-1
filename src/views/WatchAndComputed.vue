<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{
            point:0,
            NTD:0,
        }
    },
    watch:{
        point(){
            this.NTD=this.point*10
            console.log(this.NTD)
        }
    },
    computed:{
        JPY(){
            return this.NTD*4.5;
        }

    },
    beforeCreate(){ //vue檔建立，但事件,變數,屬性等等尚未建立
        console.log("beforeCreate")
    },
    created(){ //vue檔建立且事件,變數,屬性等等已建立
        console.log("created")
    },
    beforeMount(){ //DOM Tree 尚未連接
        console.log("beforeMount")
    },
    mounted(){ //DOM Tree已連接
        console.log("mounted")
    },
    beforeUpdate(){ //變數已更動，但畫面未更新
        console.log("beforeUpdate")
    },
    updated(){ //變數已更動且畫面也同步更新完成
        console.log("updated")
    },
    beforeUnmount(){
        console.log("beforeUnmount")
    },
    unmounted(){
        console.log("unmounted")
    },
    methods:{
        clickPoint(){
            this.point+=1
        },
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(6)
    }
}
</script>

<template>
    <div class="content">
        <span>Watch And Computed</span>
        <br />
        <p>point:{{ this.point }}</p>
        <p>NTD:{{ this.NTD }}</p>
        <p>JPY:{{ this.JPY }}</p>
        <div class="circle" @click="clickPoint"></div>
    </div>
</template>

<style lang="scss" scoped>
    .content{
        text-align: center;
        margin-top: 1vmin;

        span{
        font-size: 36pt;
        color: lightslategrey;
        }
        
        p{
            font-size: 28pt;
            color: darkgray;
        }
        .circle{
            width: 200px;
            height: 200px;
            background-color: darkgray;
            border-radius: 50%;
            margin: auto;
            margin-top: 7vmin;

            &:hover{
                scale: 1.2;
                background-color: lightslategray;
            }

            &:active{
                scale: 0.8;
                background-color: darkgray;
            }
        }
    }
</style>