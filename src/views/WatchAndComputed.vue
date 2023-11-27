<script>
export default{
    data(){
        return{
            point:0,
            ntd:0,
        }
    },
    watch:{
        point(){
            this.ntd=this.point*10
            console.log(this.ntd)
        }
    },
    computed:{
        jyp(){
            return this.ntd*4.5;
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
        }
    },
}
</script>

<template>
    <div class="content">
        <p>this.point:{{ this.point }}</p>
        <p>this.ntd:{{ this.ntd }}</p>
        <p>this.jyp:{{ this.jyp }}</p>
        <div class="circle" @click="clickPoint"></div>
    </div>
</template>

<style lang="scss" scoped>
    .content{
        text-align: center;
        p{
            font-size: 28pt;
            color: burlywood;
        }
        .circle{
            width: 200px;
            height: 200px;
            background-color: bisque;
            border-radius: 50%;
            margin: auto;
            margin-top: 7vmin;

            &:hover{
                scale: 1.5;
                background-color: burlywood;
            }

            &:active{
                scale: 0.8;
                background-color: bisque;
            }
        }
    }
</style>