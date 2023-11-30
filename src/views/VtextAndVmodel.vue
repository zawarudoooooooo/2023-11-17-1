<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{
            title:"title",

            info:{
                name:"多多普洱",
                ice:"去冰",
                sugar:"三分糖",
            },
            cool:"cool",
            selectText:"",
            lazyText:"",
            numberText:"",
            trimText:"",
            checkText:[],
            radioText:"",

        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(1)
    }
}
</script>

<template>
    <div class="content">
        <span>V-text</span>
        <span>{{ locationinfo }}</span>
        <p>{{ this.title }}</p>
        <br />

        <span>V-text</span>
        <p v-text="'this is a page'"></p>
        <p v-text="title"></p>
        <p>{{ this.info }}</p>
        <p v-text="info"></p>
        <br />

<span>V-model</span>
<input type="text" v-model="cool">
<p>{{ this.cool }}</p>
<br />

<select name="" id="" v-model="selectText">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
</select>

    <h4>{{ this.selectText }}</h4>
    <br />

<span>V-model.lazy</span>
    <input type="text" v-model.lazy="lazyText">
    <p>{{ this.lazyText }}</p>
<br />

<span>V-model.number</span>
    <input type="number" v-model.number="numberText">
    <p>{{ this.numberText }}</p>
<br />
    
<span>V-model.trim</span>
    <input type="text" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>
<br />


<span>Checkbox</span>
    <div class="checkArea">
        <label for="">朝ごはん</label>
        <input type="checkbox" v-model="checkText" name="meal" value="breakfast" id="breakfast">
        <label for="">昼ごはん</label>
        <input type="checkbox" v-model="checkText" name="meal" value="lunch" id="lunch">
        <label for="">夕食</label>
        <input type="checkbox" v-model="checkText" name="meal" value="dinner" id="dinner">
    </div>
    <p>{{ this.checkText }}</p>
    <br />

<span>Radiobox</span>
    <div class="radioArea">
        <label for="">早餐</label>
        <input type="radio" v-model="radioText" name="food" value="meat">
        <label for="">午餐</label>
        <input type="radio" v-model="radioText" name="food" value="hotpot" >
        <label for="">晚餐</label>
        <input type="radio" v-model="radioText" name="food" value="pizza" >
    </div>
    <p>{{ this.radioText }}</p>

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
        color: darkgray;
    }

    p{
        font-size: 20pt;
    }

    input{
        width: 35vmin;
        height: 4vmin;
        border-radius: 5px;
        margin-top: 3vmin;
    }

    select{
        width: 15vmin;
        height: 4vmin;
        text-align: center;
        border-radius: 5px;
    }

    .checkArea{
        color: darkgray;

        input{
            width: 7vmin;
            height: 2vmin;
        }
    }
    .radioArea{
        color: darkgray;

        input{
            width: 7vmin;
            height: 2vmin;
        }
    }
}
</style>
