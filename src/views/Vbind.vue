<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{
            ttt:"title",
            isBlue:false,
            isLarge:false,
            styleArr:[],
            imgText:"",
            arrText:[1,2,3,4,5,6,7,8,9,10],
            test:"",
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(4)
    }
}
</script>

<template>
<!-- V-model 雙向綁定 標籤的值 和 變數
V-bind 單向綁定 標籤屬性 綁 變數 -->
    <div class="content">
        <span>V-bind</span>
        <br />
        <h1 class="title">Title</h1>
        <h1 v-bind:class="ttt">Head</h1>
        <br />

        <h3>class{}</h3>
        <label for="">isBlue</label>
        <input type="checkbox" value="true" v-model="isBlue">
        <label for="">isLarge</label>
        <input type="checkbox" value="true" v-model="isLarge">
        <br />
        <h2 :class="{
            blue:isBlue,
            large:isLarge
        }">✨神奇海螺萬萬歲✨</h2>
        <br />

        <h3>class[]</h3>
        <label for="">Blue</label>
        <input type="checkbox" value="blue" v-model="styleArr" name="test">
        <label for="">Large</label>
        <input type="checkbox" value="large" v-model="styleArr" name="test">
        <label for="">Rotate</label>
        <input type="checkbox" value="rotate" v-model="styleArr" name="test">
        <br />
        <h2 :class="styleArr">你怎麼不去問問神奇海螺❓</h2>
        <br />

        <label for="">哈哈</label>
        <input type="radio" value="https://th.bing.com/th/id/R.a73d88e60ae0a6ebff8a81b95ca60e1a?rik=HTrfC%2fQ9WmAljg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20200312%2f21eebf47afb4457caac04d71e18c08b6.jpeg&ehk=iTozgrmvBbvMkKx8udFKeihr1uBXuOc%2f%2fozu31eoKyk%3d&risl=&pid=ImgRaw&r=0" v-model="imgText" name="imgname">
        <label for="">請開始</label>
        <input type="radio" value="https://pic1.zhimg.com/50/v2-3e737ae7d44496b326128d82364c9f84_720w.jpg?source=1940ef5c" v-model="imgText" name="imgname">
        <img :src="imgText" alt="">
        <label for="">我叫</label>
        <input type="radio" value="https://th.bing.com/th/id/R.02a99e81fcf4e9a1edfa7612c93523ee?rik=GLzaxsx7DxAc7Q&pid=ImgRaw&r=0" v-model="imgText" name="imgname">
        <br />

        <select name="" id="" v-model="this.test">
            <option value="">請選擇</option>
            <option :value="index" v-for="(item,index) in arrText">{{ item }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3vmin;

        span{
            font-size: 36pt;
            color: darkgray;
        }

        p{
            font-size: 20pt;
        }

        li{
            text-align: center;
            font-size: 16pt;
        }

        h3{
            color: darkgray;
        }

        h2{
            color: darkgray;
        }

        label{
            color: darkgray;
            margin-bottom: 1vmin;
        }

        select{
            border-radius: 3px;
            color: darkgray;
            text-align: center;
        }
    }

    .title{
        color: lightslategrey;
    }

    .blue{
        color: lightblue;
    }

    .large{
        font-size: 50pt;
    }

    .rotate{
        transform: rotate(360deg);
        transition: 10s;
    }
</style>