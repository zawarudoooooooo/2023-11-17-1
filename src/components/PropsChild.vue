<script>
export default{
    data(){
        return{

        }
    },
    props:[
        "parentMsg",
        "inputname",
        "inputpw",
        "inputphone",
    ]
}
</script>

<template>
        <div class="childArea">
            <span>childArea</span>
            <!-- <h3>{{ this.parentMsg }}</h3> -->
            <h3>{{ this.inputname }}</h3>
            <h3>{{ this.inputpw }}</h3>
            <h3>{{ this.inputphone }}</h3>
        </div>
</template>

<style lang="scss" scoped>
    .childArea{
        width: 50vmin;
        height: 50vmin;
        border: 3px solid lightslategrey;
        margin: auto;
        margin-top: 3vmin;

        span{
        font-size: 36pt;
        color: darkgray;
    }

        h3{
            color: lightslategrey;
        }
    }

</style>