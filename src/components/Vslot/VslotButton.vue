<script>
export default{
    data(){
        return{

        }
    }
}
</script>

<template>
    <button class="vslotBtn">
        <slot />
    </button>

</template>


<style lang="scss" scoped>
    .vslotBtn{
        background: linear-gradient(315deg,pink 25%,lightblue);
        border: none;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 8px;
        cursor: pointer;
        width: 10vmin;
        color: white;
    }
</style>