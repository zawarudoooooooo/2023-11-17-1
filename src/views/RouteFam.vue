<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
import { RouterLink, RouterView } from 'vue-router'
import RouteFamBar from '../components/Route/RouteFamBar.vue'
export default{
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
    },
    mounted(){
        this.setLocation(14)
    },
    components:{
        RouterView,
        RouteFamBar
    }
}
</script>

<template>
    <div class="content">
        <div class="leftArea">
            <RouteFamBar />
        </div>
        <div class="rightArea">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .content{
        display: flex;
        .leftArea{
            width: 50vw;
            height: 50vh;
            border: 3px solid burlywood;
        }

        .rightArea{
            width: 50vw;
            height: 50vh;
            border: 3px solid cadetblue;
        }
    }
</style>