<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
export default{
    data(){
        return{
            userinfoArr:JSON.parse(localStorage.getItem("this.userinfoArr")) || [],
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        goSignup(){
            this.$router.push('/ExpenseTrackerSignup')
        },
        goProfile(){
            this.$router.push('/ExpenseTrackerProfile')
        },
        loginCheck(){
            const account = document.getElementById('loginAc').value
            const password = document.getElementById('loginPw').value

            let existingUserInfo = localStorage.getItem('this.userinfoArr')

            if(account!==""||password!==""){
                console.log(existingUserInfo)

                if(account==existingUserInfo.userName&&password==existingUserInfo.userPassword){
                    console.log(123)
                    alert("登錄成功")
                    this.goProfile()
                    
                }else{
                    //alert("登錄成功")
                    //this.goProfile()
                    alert("帳號或密碼錯誤，請重新輸入")
                }
            }else{
                alert("帳號或密碼不得為空，請重新輸入")
                this.goProfile()
            }

            // if(account==existingUserInfo.userName&&password==existingUserInfo.userPassword){
            //     alert("登錄成功")
            // }

            
        }
    },
    mounted(){
        this.setLocation(13)
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>Expense Tracker</p>
        </div>
        <div class="inputArea">
            <p>Account</p>
            <input type="text" placeholder="請輸入帳號" id="loginAc">
            <p>Password</p>
            <input type="password" placeholder="請輸入密碼" id="loginPw">
        </div>
        <div class="buttonArea">
            <button type="button" @click="goSignup()">Sign Up</button>
            <button type="button" @click="loginCheck()">Log In</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content{
        width: 30vw;
        text-align: center;
        color: dimgray;
        margin-top: 3vmin;
        margin-left: 75vmin;
        .title{
            font-size: 36pt;
        }

        .inputArea{
            height: 25vh;
            p{
                font-size: 12pt;
                margin-bottom: 0;
                margin-right: 43vmin;
            }

            input{
                width: 25vw;
                height: 4vh;
                border-radius: 10px;
                border-style: none;
                outline: none;
                background-color: lightgray;
                padding-left: 2vmin;
                margin-bottom: 3vmin;
            }
        }

        .buttonArea{
            width: 30vw;
            display: flex;
            justify-content: space-around;

            button{
                width: 8vw;
                height: 4vh;
                border-radius: 5px;
                background-color: lightgray;
                color: white;
                font-weight: bold;
                border-style: none;

                &:hover{
                    background-color: dimgray;
                    color: white;
                }

                &:active{
                    background-color: lightgray;
                    color: white;
                }
            }
        }
    }
</style>