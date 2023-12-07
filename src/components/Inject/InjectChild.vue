<script>
export default{
    inject:[
        "proMessage",
        "hey",
        "setMSG",
        "arr",
        "obj",
    ]
}
</script>

<template>
    <div class="childArea">
        <span>Child Area</span>
        <p>{{ this.proMessage }}</p>
        <p>{{ this.hey }}</p>
        <p>{{ this.setMSG }}</p>
        <p>{{ this.arr }}</p>
        <p>{{this.obj}}</p>
    </div>
</template>

<style lang="scss" scoped>
    .childArea{
        width: 40vw;
        height: 35vh;
        border: 3px solid lightskyblue;
        margin: auto;

        span{
            font-size: 28pt;
            color: lightskyblue;
        }

        p{
            font-size: 18pt;
            color: black;
            margin: 0;
        }
    }
</style>