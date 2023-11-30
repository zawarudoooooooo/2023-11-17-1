<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{
            title:"",
            text:"",

        }
    },
    methods:{
        print(){
            console.log("沒有人在家")
            this.title="沒有人在家";
        },
        sky(){
            console.log("sky")
        },
        write(){
            console.log(this.text)
            alert("神奇海螺萬萬歲")
        },
        goOtherWay(){
            this.$router.push('/Vfor')
            alert("pooooooo")
        },
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(3)
    }
}
</script>

<template>
    <div class="content">
        <span>V-on</span>
        <br />
        <button type="button" @click="print()">叮咚叮咚</button>
        <p>{{ this.title }}</p>
        <br />

        <select name="" id="" @change="sky()">
            <option value="1">1</option>
            <option value="2">2</option>

        </select>
        <br />

        <input type="text" v-model="this.text" @keydown.enter="write()" placeholder="隨便輸入點啥">
        <br />

        <i class="fa-solid fa-poo fa-2xl" @click="goOtherWay"></i>
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

        input{
        width: 35vmin;
        height: 4vmin;
        border-radius: 5px;
        }

        button{
        width: 35vmin;
        height: 4vmin;
        border-radius: 5px;

        }

        select{
        width: 15vmin;
        height: 4vmin;
        text-align: center;
        border-radius: 5px;
        }

        i{
            color: darkgray;
            margin-top: 2vmin;
            &:hover{
                color: chocolate;
            }
        }
    }    


</style>