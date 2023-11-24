<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    },
    computed:{
        ...mapState(counter,["location","locationInfo"])
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="routerItem" :class="{'cass' : this.location===1}">Home</RouterLink>
        <RouterLink to="/VtextAndVmodel" class="routerItem" :class="{'cass':this.location===2}">V-text And V-model</RouterLink>
        <RouterLink to="/Vfor" class="routerItem">V-for</RouterLink>
        <RouterLink to="/Von" class="routerItem">V-on</RouterLink>
        <RouterLink to="/Vbind" class="routerItem">V-bind</RouterLink>
        <RouterLink to="/VifAndVshow" class="routerItem">V-if And V-show</RouterLink>
        <RouterLink to="/Three" class="routerItem">三格切版</RouterLink>
        <RouterLink to="/Nine" class="routerItem">九格切版</RouterLink>
    </div>

    <span>{{ location }}</span>
    <span>{{ locationInfo }}</span>

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

span{
    text-align: center;
    font-size: 18pt;
}
</style>