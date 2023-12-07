<script>
export default{
    data(){
        return{
            message:"message"
        }
    },
}
</script>

<template>
    <div class="div">
        <slot :text="this.message" :count="1"></slot>
    </div>
</template>

<style lang="scss" scoped>

</style>