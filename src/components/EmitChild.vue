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
        <p>Emit Child</p>
        <p>{{ this.text }}</p>
        <button type="button" @click="this.emitGo()">button</button>
        <button type="button" @click="$emit('orange',this.text2)">button2</button>
    </div>


</template>

<style lang="scss" scoped>
    .childArea{
        width: 300px;
        height: 300px;
        border: 1px solid orange;
    }

</style>