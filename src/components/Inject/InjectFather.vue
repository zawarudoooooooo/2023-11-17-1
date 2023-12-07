<script>
import InjectChild from './InjectChild.vue';
export default{
    data(){
        return{

        }
    },
    components:{
        InjectChild
    }
}
</script>

<template>
    <div class="fatherArea">
        <span>Father Area</span>
        <InjectChild />
    </div>
</template>

<style lang="scss" scoped>
    .fatherArea{
        width: 50vw;
        height: 50vh;
        border: 3px solid cadetblue;
        margin: auto;

        span{
            font-size: 30pt;
            color: cadetblue;
        }
    }
</style>