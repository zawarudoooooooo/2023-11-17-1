<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
export default{
    data(){
        return{
            car:false,
            car2:false,
            house:0,
            house2:0,
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(5)
    }
}

</script>

<template>
    <div class="content">
        <span>V-if</span>
        <br />
        <label for="">今日天氣晴</label>
        <input type="checkbox" value="ture" v-model="car">
        <p v-if="car">今日大晴天</p>
        <p v-if="car==3">真的好熱喔</p>
        <br />

        <span>V-show</span>
        <br />
        <label for="">昨日天氣晴</label>
        <input type="checkbox" value="ture" v-model="car2">
        <p v-if="car2">也是大晴天</p>
        <br />

        <span>V-if & V-else</span>
        <br />
        <label for="">今日運勢如何</label>
        <select name="" id="" v-model="house">
            <option value="0">請選擇</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>

        <p v-if="house==1">大吉</p>
        <p v-if="house==2">中吉</p>
        <p v-else>吉</p>
        <br />

        <span>V-if & V-else-if & V-else</span>
        <br />
        <label for="">今日運勢如何</label>
        <select name="" id="" v-model="house2">
            <option value="0">請選擇</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>

        <p v-if="house2==1">大吉</p>
        <p v-else-if="house2==2">中吉</p>
        <p v-else>吉</p>
    
    </div>
</template>

<style lang="scss" scoped>
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1vmin;

        span{
            font-size: 36pt;
            color: lightslategrey;
        }

        p{
            font-size: 20pt;
            color: darkgray;
            
        }

        input{
            width: 5vmin;
            height: 4vmin;
            border-radius: 5px;
            margin-top: 3vmin;
        }

        label{
            font-size: 20pt;
            color: darkgray;
        }

        select{
        width: 15vmin;
        height: 4vmin;
        text-align: center;
        border-radius: 3px;
        margin-top: 3vmin;
        color: darkgray;
    }

}
</style>