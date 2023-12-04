<script>
    export default{
        data(){
            return{
                info:{
                    name:"",
                    number:"",
                    gender:"",
                    address:"",
                    age:"",
                }
            }
        },
        methods:{
            get(){
                this.$emit('get',this.obj)
            }
        }
    }

</script>

<template>
    <div class="content">
        <span>Child One</span>
        <p>請輸入資料</p>
        <p>姓名</p>
        <input type="text" v-model="this.info.name" id="normalinput">
        <p>手機</p>
        <input type="number" v-model="this.info.number" id="normalinput">
        <p>性別</p>
        <label for="man">男</label>
        <input type="radio" id="mam" name="gneder" value="man" v-model="this.info.gender">
        <label for="female">女</label>
        <input type="radio" id="women" name="gender" value="woman" v-model="this.info.gender">
        <p>地址</p>
        <input type="text" v-model="this.info.address" id="normalinput">
        <p>年齡</p>
        <input type="number" v-model="this.info.age" id="ageinput">
        <button tye="button"  @click="$emit('get',this.info)">送出</button>
    </div>
</template>


<style lang="scss" scoped>
    .content{
        width: 50vw;
        height: 60vh;
        border: 1px solid dimgray;

        span{
            font-size: 36pt;
            color: darkgray;
        }

        p{
            font-size: 14pt;
            color: darkgray;
            margin: 0;
            
        }

        #normalinput{
            width: 20vw;
            border-radius: 5px;
            border-style: none;
            outline: none;
            background-color: darkgray;
            opacity: 0.5;
            padding-left: 1vmin;
            color: white;
        }

        #ageinput{
            width: 20vw;
            border-radius: 5px;
            border-style: none;
            outline: none;
            background-color: darkgray;
            opacity: 0.5;
            padding-left: 1vmin;
            margin-left: 8vmin;
            color: white;
        }

        input{
            font-size: 14pt;
            margin: 0;
            color: darkgray;
        }

        button{
            border-radius: 5px;
            border-style: none;
            background-color: darkgray;
            opacity: 0.5;
            margin-left: 2vmin;
            color: white;
        }

        label{
            font-size: 14pt;
            color: lightslategrey;
        }
}
</style>