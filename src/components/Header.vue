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
    <p>{{ locationInfo }}</p>
</template>

<style lang="scss" scoped>
    .header{
        width: 100vw;
        height: 20vh;
        background-color: lightcyan;
        opacity: 0.7;
    }

    p{
        text-align: center;
        font-size: 10pt;
        color: darkgray;
        margin-top: 3vmin;
        margin-bottom: 0;
    }
</style>