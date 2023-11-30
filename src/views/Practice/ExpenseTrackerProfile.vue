<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
export default{
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(12)
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
                <p id="balanceNum">$520</p>
            </div>
        </div>
        <div class="recordArea">
            <div class="incomeAndExpense">
                <div class="income">
                    <p>INCOME</p>
                    <p>$520</p>
                </div>
                <div class="expense">
                    <p>EXPENSE</p>
                    <P>$-520</P>
                </div>
            </div>
            <div class="buttonArea">
                <button type="button">Add transaction</button>
            </div>
            <div class="listArea">
                <ul>
                    <li>
                        <div class="itemArea">
                            <p>發票中獎</p>
                            <p>$500</p>
                        </div>
                        <button type="button">Delete</button>
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

            .listArea{
                width: 70vw;
                margin: auto;
                padding: 4vmin;
                border: 1px solid black;

                ul{
                    color: lightgray;
                    li{
                        width: 50vmin;
                        height: 18vmin;
                        border-radius: 10px;
                        border: 2px solid lightgray;
                        
                        .itemArea{
                            display: flex;
                            justify-content: space-around;
                            padding: 2vmin;
                            p{
                                font-size: 14pt;
                                color: black;
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