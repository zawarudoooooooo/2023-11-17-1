<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
import EmitChild from '../components/EmitChild.vue';
export default{
    data(){
        return{
            childText:"",

        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        emitObj(params){
            console.log(params)
            this.childText=params

        }
    },
    components:{
        EmitChild
    },
    mounted(){
        this.setLocation(8)
    }
}
</script>

<template>
    <div class="content">
        <span>Emit</span>
        <p>{{ this.childText }}</p>
        <EmitChild @orange="this.emitObj" />
    </div>
</template>

<style lang="scss" scoped>
    .content{
        text-align: center;

        span{
            font-size: 36pt;
            color: lightslategrey;
        }
    }
</style>