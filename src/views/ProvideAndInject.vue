<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
import InjectFather from "../components/InjectFather.vue"
import { computed } from 'vue'
import { ref,provide } from 'vue'
export default{
    data(){
        return{
            message:"Hola",
            dataArr:["a","b"],
            drink:{
                name:"多多綠茶",
                money:50,
            }
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        addArr(){
            this.dataArr.push(this.setupMsg)
        },
        addObj(){
            this.drink.sweet="三分糖"
        }
    },
    components:{
        InjectFather
    },
    provide(){
        return{
            //proMessage:this.message,
            hey:"Hey",
            proMessage: computed(()=>this.message),
            arr:this.dataArr,
            obj:this.drink,
        }
    },
    setup(){
        let setupMsg = ref('setupMsg')
        provide('setMSG',setupMsg)
        return{
            setupMsg
        }
    },
    mounted(){
        this.setLocation(9)
    }
}
</script>

<template>
    <p>Provide And Inject</p>
    <div class="grandFaArea">
        <span>GrandFather Area</span>
        <p>{{ this.message }}</p>
        <input type="text" v-model="message">
        <p>{{ this.setupMsg }}</p>
        <input type="text" v-model="setupMsg">
        <button type="button" @click="addArr()">Arr</button>
        <button type="button" @click="addObj()">Obj</button>
        <InjectFather />
    </div>
</template>

<style lang="scss" scoped>
    p{
        font-size: 36pt;
        color: lightslategrey;
        text-align: center;
        margin-top: 3vmin;
    }
    .grandFaArea{
        width: 60vw;
        height: 90vh;
        border: 3px solid burlywood;
        margin: auto;
        margin-top: 5vmin;
        text-align: center;

        span{
            font-size: 36pt;
            color: burlywood;
        }

        p{
            font-size: 20pt;
            color: black;
            margin: 0;
        }

        input{
        width: 35vmin;
        height: 4vmin;
        border-radius: 5px;
        margin-top: 1vmin;
        margin-bottom: 3vmin;
        }
        
        button{
        width: 10vmin;
        height: 4vmin;
        border-radius: 5px;
        background-color: darkgray;
        color: white;
        border-style: none;
        margin-left: 2vmin;
        }
    }
</style>