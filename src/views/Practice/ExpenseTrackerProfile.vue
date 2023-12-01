<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
export default{
    data(){
        return{
            addDialog:false,
            deleteDialog:false,
            balanceNum:0,
            positiveNum:0,
            negativeNum:0,
            addArr:[],
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        showAddDialog(){
            this.addDialog=true
        },
        closeAddDialog(){
            this.addDialog=false
        },
        showDeleteDialog(){
            this.deleteDialog=true
        },
        closeDeleteDialog(){
            this.deleteDialog=false
        },
        //新增視窗防呆和丟資料
        addItem() {
            const item = document.getElementById("addItem").value;
            const money = document.getElementById("addMoney").value;

            if (item != "" && money != "") {
                if(money>0){
                    this.positiveNum+=this.money
                }else{
                    this.negativeNum+=this.money
                }
                    alert("新增成功")
                    this.balanceNum = this.positiveNum - this.negativeNum;
                    this.item = "";
                    this.money = "";

                    let itemObj = {
                        text: item,
                        amount: money,
                    }

                    this.addArr.push(itemObj)
                    localStorage.setItem("this.addArr", JSON.stringify((this.addArr)));
                }
            else {
                alert("欄位不能為空白，請再次檢查")
            }
        },
    },
    mounted(){
        this.setLocation(14)
    }
}
</script>

<template>
    <div class="content">
        <div class="profileArea">
            <div class="title">
                <p>Expense Tracker</p>
            </div>
            <div class="userName">
                <p>Ting Ya</p>
            </div>
            <div class="balanceArea">
                <p>Your Balance</p>
                <p id="balanceNum">${{ this.balanceNum }}</p>
            </div>
        </div>
        <div class="recordArea">
            <div class="incomeAndExpense">
                <div class="income">
                    <p>INCOME</p>
                    <p id="positiveNum">${{ this.positiveNum }}</p>
                </div>
                <div class="expense">
                    <p>EXPENSE</p>
                    <P id="negativeNum">${{ this.negativeNum }}</P>
                </div>
            </div>
            <div class="buttonArea">
                <button type="button" @click="showAddDialog()">Add transaction</button>
            </div>
            <div class="addTransaction" v-if="addDialog">
                <div class="addShow">
                    <i class="fa-solid fa-xmark" @click="closeAddDialog()"></i>
                    <p>Text</p>
                    <input type="text" placeholder="請輸入項目" id="addItem" v-model="item">
                    <p>Amount</p>
                    <input type="number" placeholder="請輸入金額" id="addMoney" v-model="money">
                    <button type="button" @click="addItem()">Add transaction</button>
                </div>
            </div>
            <div class="deleteItem" v-if="deleteDialog">
                <div class="deleteShow">
                    <i class="fa-solid fa-xmark" @click="closeDeleteDialog()"></i>
                    <p>Sure to delete?</p>
                    <button type="button">Delete</button>
                </div>
            </div>
            <div class="listArea">
                <ul>
                    <li>
                        <div class="itemArea" v-for="(item,index) in addArr">
                            <p>{{ item.text }}</p>
                            <p>${{ item.amount }}</p>
                            <div class="listBtn">
                                <button type="button" @click="showDeleteDialog()">Delete</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        display: flex;

        .profileArea{
            width: 25vw;
            height: 100vh;
            background-color: darkgray;
            opacity: 0.6;
            text-align: center;
            color: white;

            .title{
                margin-top: 25vmin;
                height: 25vh;

                p{
                    font-size: 30pt;
                }
            }

            .userName{
                height: 15vh;

                p{
                    font-size: 26pt;
                }
            }

            .balanceArea{

                p{
                    font-size: 20pt;
                }

                #balanceNum{
                    font-size: 28pt;
                }
            }
        }

        .recordArea{
            .incomeAndExpense{
                width: 75vw;
                height: 28vh;
                display: flex;
                justify-content: space-around;
                text-align: center;
                margin-top: 5vmin;

                p{
                    font-size: 26pt;
                    margin-bottom: 1vmin;
                }

                .income{
                    color: #9fd6a3;
                }

                .expense{
                    color: #e1c0ce;
                }
            }

            .buttonArea{
                height: 15vh;
                text-align: center;

                button{
                    width: 20vw;
                    height: 6vh;
                    border-radius: 5px;
                    background-color: lightgrey;
                    color: white;
                    font-size: 20pt;
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

            .addTransaction{
                position: relative;
                .addShow{
                    width: 30vw;
                    height: 35vh;
                    border-radius: 10px;
                    background-color: lightgray;
                    text-align: center;
                    padding-top: 2vmin;
                    margin: auto;

                    i{
                        position: absolute;
                        right: 31.5%;
                        color: white;
                        font-size: 15pt;
                    }

                    P{
                        margin-bottom: 0;
                        color: white;
                        font-size: 14pt;
                    }

                    input{
                        width: 25vw;
                        height: 5vh;
                        border-radius: 5px;
                        outline: none;
                        border-style: none;
                        margin-bottom: 2vmin;
                        padding-left: 2vmin;
                    }

                    button{
                    width: 12vw;
                    height: 6vh;
                    border-radius: 5px;
                    background-color: white;
                    color: dimgray;
                    font-size: 14pt;
                    border-style: none;
                    margin-top: 2vmin;

                    &:hover{
                        background-color: dimgray;
                        color: white;
                    }

                    &:active{
                        background-color: white;
                        color: dimgray;
                    }
                    }
                }
            }

            .deleteItem{
                width: 30vw;
                height: 35vh;
                border-radius: 10px;
                background-color: lightgray;
                text-align: center;
                padding-top: 2vmin;
                margin: auto;

                    i{
                        position: absolute;
                        right: 23%;
                        color: white;
                        top: 72%;
                        font-size: 16pt;
                    }

                    P{
                        margin-bottom: 0;
                        color: white;
                        font-size: 28pt;
                        margin-top: 4vmin;
                    }

                    button{
                    width: 12vw;
                    height: 6vh;
                    border-radius: 5px;
                    background-color: white;
                    color: dimgray;
                    font-size: 14pt;
                    border-style: none;
                    margin-top: 9vmin;

                    &:hover{
                        background-color: dimgray;
                        color: white;
                    }

                    &:active{
                        background-color: white;
                        color: dimgray;
                    }
                    }
                }

            }



            .listArea{
                width: 70vw;
                margin: auto;
                padding: 4vmin;
                border: 1px solid black;

                ul{
                    color: lightgray;
                    li{
                        display: flex;
    
                        .itemArea{
                            //display: flex;
                            justify-content: space-around;
                            //padding: 2vmin;
                            width: 50vmin;
                            height: 18vmin;
                            border-radius: 10px;
                            border: 2px solid lightgray;

                            p{
                                font-size: 14pt;
                                color: black;
                            }
                        }

                        .listBtn{

                            button{
                            width: 8vw;
                            height: 4vh;
                            border-radius: 5px;
                            background-color: lightgrey;
                            color: white;
                            font-size: 14pt;
                            border-style: none;
                            margin-left: 16vmin;

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
                }
            }
        }
</style>