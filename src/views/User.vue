<template lang="">
    <div>
        <h1>UserId:{{$route.params.userId}}</h1>
        <h2>Props:{{this.userId}}</h2>
    </div>
</template>
<script>
export default {
    props:[
        "userId"
    ],
    mounted(){
        console.log(this.$route.params.userId)
        console.log(this.userId)
    }
    
}
</script>
<style lang="">
    
</style>