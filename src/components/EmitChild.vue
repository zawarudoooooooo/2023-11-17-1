<script>
export default{
    data(){
        return{
            text:"childOrange",
            text2:"OrangeChild"

        }
    },
    methods:{
        emitGo(){
            console.log(this.text)
            this.$emit("orange",this.text);
        }
    },
}
</script>

<template>
    <div class="childArea">
        <span>Emit Child</span>
        <p>{{ this.text }}</p>
        <button type="button" @click="this.emitGo()">button</button>
        <button type="button" @click="$emit('orange',this.text2)">button2</button>
    </div>


</template>

<style lang="scss" scoped>
    .childArea{
        width: 80vw;
        height: 30vh;
        margin: auto;
        border: 3px solid dimgray;

        span{
            font-size: 36pt;
            color: lightslategrey;
        }

        p{
            font-size: 20pt;
            color: darkgray;
        }

        button{
        width: 35vmin;
        height: 4vmin;
        border-radius: 5px;
        background-color: darkgray;
        color: white;
        border-style: none;
        margin-right: 2vmin;
        }
    }

</style>