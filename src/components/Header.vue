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
        ...mapState(counter,["locationInfo"])
    }
}
</script>

<template>
    <div class="header">
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