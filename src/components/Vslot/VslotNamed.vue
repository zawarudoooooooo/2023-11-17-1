<script>
export default{
    data(){
        return{

        }
    },
}
</script>

<template>
    <slot name="header" class="headerSlot">
        <p>header</p>
    </slot>
    <slot />
    <slot name="footer">
        <p>footer</p>
    </slot>
</template>

<style lang="scss" scoped>

</style>