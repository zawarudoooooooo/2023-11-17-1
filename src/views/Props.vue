<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
import PropsChild from "../components/PropsChild.vue"
export default{
    data(){
        return{
            title:"father to son",
            name:"",
            password:"",
            phone:"",
            openchild:false,
            drink:{
                name:"珍珠奶茶",
                sugar:"半糖",
                money:50,
            }
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        check(){
            this.openchild=!this.openchild
        },
    },
    components:{
        PropsChild
    },
    mounted(){
        this.setLocation(7)
    }
}
</script>

<template>
    <div class="area">
        <h2>{{ this.title }}</h2>
        <PropsChild 
        v-bind:parentMsg="this.title" 
        :inputname = "this.name"
        :inputpw = "this.password"
        :inputphone = "this.phone"
        v-show="this.openchild==true" />
    </div>

    <div class="infoArea" v-show="this.openchild==false">
        <label for="">名字</label>
        <input type="text" v-model="this.name">
        <label for="">密碼</label>
        <input type="text" v-model="this.password">
        <label for="">手機</label>
        <input type="text" v-model="this.phone">
        <button type="submit" @click="check()">提交</button>
    </div>
</template>

<style lang="scss" scoped>
    .area{
        margin-top: 1vmin;
        text-align: center;
        margin-bottom: 3vmin;

        h2{
            color: darkgray;
        }
    }
    .infoArea{
        text-align: center;

        label{
            color: darkgray;
            margin-right: 2vmin;
            margin-left: 2vmin;
        }

        input{
            border-radius: 5px;
            border-style: none;
            outline: none;
            background-color: darkgray;
            opacity: 0.5;
            padding-left: 1vmin;
        }

        button{
            border-radius: 5px;
            border-style: none;
            background-color: darkgray;
            opacity: 0.5;
            margin-left: 2vmin;
            color: white;
        }
    }
</style>