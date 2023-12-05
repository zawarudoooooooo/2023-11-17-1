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
            addArr:JSON.parse(localStorage.getItem("this.addArr")) || [],
            item:"",
            money:"",
            key:"",
            deleIndex:null,
        }
    },
    //抓取localStorage的值
    created(){
        const savedtransactions = JSON.parse(localStorage.getItem("addArr"));
        if(savedtransactions){
            this.addArr = savedtransactions;
        }
        this.updateMoney()
    },
    mounted(){
        this.setLocation(13)
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        showAddDialog(){
            this.addDialog=true
        },
        closeAddDialog(){
            this.addDialog=false
        },
        showDeleteDialog(index){
            this.deleteDialog=true
            this.deleIndex=index
        },
        closeDeleteDialog(){
            this.deleteDialog=false
        },
        updateMoney(){
            this.addArr.forEach(item =>{
                if(item.amount>0){
                    item.amount=Number(item.amount)
                    this.positiveNum+=item.amount
                }else{
                    this.negativeNum-=item.amount
                }
            })
            this.positiveNum = Math.abs(this.positiveNum)
            this.balanceNum=this.positiveNum-this.negativeNum
        },
        addItem() {
            const item = document.getElementById("addItem").value;
            const money = document.getElementById("addMoney").value;

            if (item != "" && money != "") {
                if(money>0){
                    this.positiveNum=this.positiveNum+this.money
                }else{
                    this.negativeNum=this.negativeNum-this.money
                }
                    alert("新增成功")
                    this.negativeNum = Math.abs(this.negativeNum)
                    this.balanceNum = this.positiveNum-this.negativeNum;
                    this.item = "";
                    this.money = "";

                    let itemObj = {
                        text: item,
                        amount: money,
                    }

                    this.addArr.push(itemObj)
                    localStorage.setItem("addArr", JSON.stringify((this.addArr)));
                }
            else {
                alert("欄位不能為空白，請再次檢查")
            }

            this.closeAddDialog()
        },

        deleteTransaction(index){
            this.addArr.splice(index,1)
            localStorage.setItem("addArr",JSON.stringify(this.addArr))
        },
        confirmDeleteTransaction(){
            if(this.deleIndex!==null){
                this.deleteTransaction(this.deleIndex)
                this.deleIndex=null
            }
            this.closeDeleteDialog()
            this.updateMoney()
        },
        goLogin(){
            this.$router.push('ExpenseTrackerLogin')
        }
    },
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
                <p id="balanceNum" :class="{'postive':balanceNum>0,'negative':balanceNum<0}">${{ this.balanceNum }}</p>
            </div>
            <div class="otherArea">
                <button type="button" @click="goLogin()">Log Out</button>
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
                    <P id="negativeNum">$-{{ this.negativeNum }}</P>
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
                    <button type="button" @click="confirmDeleteTransaction()" :key="index">Delete</button>
                </div>
            </div>
            <div class="listArea">
                <ul>
                    <li>
                        <div class="itemArea" v-for="(item,index) in addArr" :key="index">
                            <div class="textArea">
                                <p>{{ item.text }}</p>
                                <p>${{ item.amount }}</p>
                            </div>
                            <button type="button" @click="showDeleteDialog()">Delete</button>
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
        position: relative;

        .positive{
            color: darkcyan;
        }

        .negative{
            color: darkred;
        }

        .profileArea{
            width: 25vw;
            height: 100vh;
            background-color: darkgray;
            opacity: 0.6;
            text-align: center;
            color: white;

            .title{
                margin-top: 20vmin;
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

            .otherArea{

                button{
                    width: 8vw;
                    height: 5vh;
                    border-radius: 5px;
                    background-color: lightgrey;
                    color: white;
                    font-size: 16pt;
                    border-style: none;
                    margin-top: 6vmin;

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

        .recordArea{
            .incomeAndExpense{
                width: 75vw;
                height: 20vh;
                display: flex;
                justify-content: space-around;
                text-align: center;
                margin-top: 5vmin;

                p{
                    font-size: 26pt;
                    margin-bottom: 1vmin;
                }

                .income{
                    color: darkcyan;
                }

                .expense{
                    color: darkred;
                }
            }

            .buttonArea{
                height: 8vh;
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
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(0,0,0,0.7);
                z-index: 999;

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
                        right: 36%;
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
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(0,0,0,0.7);
                z-index: 999;

                .deleteShow{
                    width: 30vw;
                    height: 35vh;
                    border-radius: 10px;
                    background-color: lightgray;
                    text-align: center;
                    padding-top: 2vmin;
                    margin: auto;

                        i{
                            position: absolute;
                            right: 36%;
                            color: white;
                            top: 34%;
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
        }

            .listArea{
                width: 70vw;
                height: 60vh;
                margin: auto;
                overflow-x: auto;
                //border: 1px solid black;

                ul{
                    color: lightgray;
                    margin-left: 10vmin;
                    margin-top: 5vmin;
                    

                    li{
                        display: flex;
                        flex-wrap: wrap;
                        gap: 2vmin;
                        

                        .itemArea{
                            width: 40vmin;
                            height: 18vmin;
                            border-radius: 10px;
                            border: 2px solid lightgray;
                            text-align: center;

                            .textArea{
                                width: 35vmin;
                                display: flex;
                                justify-content: space-around;

                                p{
                                    font-size: 14pt;
                                    color: black;
                                    margin-top: 2vmin;
                                }
                            }

                            button{
                            width: 8vw;
                            height: 4vh;
                            border-radius: 5px;
                            background-color: lightgrey;
                            color: white;
                            font-size: 14pt;
                            border-style: none;
                            margin-top: 2.5vmin;

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