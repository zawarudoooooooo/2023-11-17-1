<script>
import { mapState, mapActions } from 'pinia';
import counter from "../../stores/counter";
export default{
    data(){
        return{
            userinfoArr:[]
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),

        goLogin(){
            this.$router.push('/ExpenseTrackerLogin')
        },
        goEntry(){
            this.$router.push('/')
        },
        signupCheck(){
            const account = document.getElementById("inputAc").value;
            const password = document.getElementById("inputPw").value;
            const repassword = document.getElementById("inputrePw").value;

            if(account!="" && password!="" &&repassword!=""){
                if(password==repassword){
                    alert("註冊成功，請重新登錄")

                    let userObj={
                        userName:account,
                        userPassword:password
                    }
                    this.userinfoArr.push(userObj)
                    localStorage.setItem("this.userinfoArr", JSON.stringify((this.userinfoArr)))

                    inputAc.value="",
                    inputPw.value="",
                    inputrePw.value=""

                    //this.goLogin()

                }else{
                    alert("輸入密碼不相符，請再次輸入")
                }
            }else{
                alert("輸入欄不能空白，請再次檢查")
                }
        },
    },
    mounted(){
        this.setLocation(13)
    }
}
</script>

<template>
    <div class="content">
        <div class="title">
            <p>Sign Up</p>
        </div>
        <div class="inputArea">
            <p>Account</p>
            <input type="text" placeholder="請輸入帳號" id="inputAc">
            <p>Password</p>
            <input type="password" placeholder="請輸入密碼" id="inputPw">
            <p id="rpw">Repeat Password</p>
            <input type="password" placeholder="請確認密碼" id="inputrePw">
        </div>
        <div class="buttonArea">
            <button type="button" @click="goEntry()">Cancle</button>
            <button type="button" @click="signupCheck()">Sign Up</button>
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
            height: 36vh;
            p{
                font-size: 12pt;
                margin-bottom: 0;
                margin-right: 43vmin;
            }

            #rpw{
                margin-right: 36vmin;
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