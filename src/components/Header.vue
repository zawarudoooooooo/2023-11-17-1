<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{
            arr:["aaa","bbb","ccc"]

        }
    },
    components:{
        RouterLink,
    },
    computed:{
        ...mapState(counter,["locationInfo"])
    }
}
</script>

<template>
    <div class="header">
        <RouterLink v-for="i in arr" :to="`/User/${i}`" class="user">User{{ i }}</RouterLink>
    </div>
    <div class="buttom">
        <p>{{ locationInfo }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        width: 100vw;
        height: 20vh;
        background-color: lightcyan;
        opacity: 0.7;

        .user{
            text-decoration: none;
            color: lightslategray;
            margin-left: 2vmin;
        }
    }

    .buttom{
        position: relative;

        p{
        text-align: center;
        font-size: 10pt;
        color: darkgray;
        position: absolute;
        bottom: 0;
        left: 1%;
        }
    }
</style>