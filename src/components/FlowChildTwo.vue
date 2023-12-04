<script>
    export default{
        data(){
            return{

            }
        },
        props:[
            "name",
            "number",
            "gender",
            "address",
            "age",
            "pageChange"
        ]
    }
</script>

<template>
    <div class="content">
        <span>Child Two</span>
        <p>請確認資料</p>
        <p>名字是 : {{this.name}}</p>
        <p>手機是 : {{this.number}}</p>
        <p>姓別是 : {{this.gender}}</p>
        <p>地址是 : {{this.address}}</p>
        <p>年齡是 : {{this.age}}</p>
        <button type="button" @click="pageChange">返回</button>
    </div>


</template>


<style lang="scss" scoped>
    .content{
        width: 50vw;
        height: 60vh;
        border: 1px solid dimgrey;

        span{
            font-size: 36pt;
            color: darkgray;
        }

        p{
            font-size: 14pt;
            color: darkgray;
            margin-bottom: 2vmin;
        }

        button{
            border-radius: 5px;
            border-style: none;
            background-color: darkgray;
            opacity: 0.5;
            color: white;
            margin-top: 4vmin;
        }
}
</style>