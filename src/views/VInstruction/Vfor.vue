<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
export default{
    data(){
        return{
            arr:[1,2,3,4,5,6],
            arr2:[
                {
                    name:"紅茶",
                    sugar:"無糖",
                    money:20,
                },
                {
                    name:"綠茶",
                    sugar:"半糖",
                    money:25,
                },
                {
                    name:"青茶",
                    sugar:"全糖",
                    money:30,
                },
            ],
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(2)
    }
}
</script>

<template>
    <div class="content">
        <span>V-for</span>
        <p v-for="item in arr">{{ item }}</p>
        <p v-for="(item,index) in arr">{{ index }}</p>
        <br />

        <ol v-for="item in arr2">
            <li>{{ item.name }}</li>
            <li>{{ item.sugar }}</li>
            <li>{{ item.money }}</li>
            <p>------------------</p>
        </ol>
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

        li{
            text-align: center;
            font-size: 16pt;
            color: darkgray;
        }
    }
</style>