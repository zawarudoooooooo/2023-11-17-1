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
    <div class="showArea">
        <h1>Emit</h1>
        <h3>{{ this.childText }}</h3>
        <EmitChild @orange="this.emitObj" />
    </div>
</template>

<style lang="scss" scoped>
    .showArea{
        width: 800px;
        height: 600px;
    }

</style>