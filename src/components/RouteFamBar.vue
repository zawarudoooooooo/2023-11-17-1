<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{


        }
    },
    components:{
        RouterLink
    }
}
</script>

<template>
    <RouterLink to="/RouteFam/RouteChildOne" class="routerItem">RouteChildOne</RouterLink>
    <RouterLink to="/RouteFam/RouteChildTwo" class="routerItem">RouteChildTwo</RouterLink>
</template>

<style lang="scss" scoped>
    .routerItem{
        text-decoration: none;
        color: lightslategray;
        font-size: 34pt;
        margin-left: 2vmin;
    }

</style>