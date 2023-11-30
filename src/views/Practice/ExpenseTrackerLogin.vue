<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
export default{
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(12)
    }
}
</script>

<template>


</template>

<style lang="scss scoped">

</style>