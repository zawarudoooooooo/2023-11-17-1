<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,

    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="routerItem">Home</RouterLink>
        <RouterLink to="/VtextAndVmodel" class="routerItem">V-text And V-model</RouterLink>
        <RouterLink to="/Vfor" class="routerItem">V-for</RouterLink>
        <RouterLink to="/Von" class="routerItem">V-on</RouterLink>
        <RouterLink to="/Three" class="routerItem">三格切版</RouterLink>
        <RouterLink to="/Nine" class="routerItem">九格切版</RouterLink>
    </div>

</template>

<style lang="scss" scoped>
.headerShow{
    width: 100vw;
    height: 10vh;
    text-align: center;
    background-color: burlywood;

    .routerItem{
        text-decoration: none;
        color: aliceblue;
        margin-left: 3vmin;
        font-size: 20pt;
    }
}
</style>