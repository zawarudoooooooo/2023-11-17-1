<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            goVtextAndVmodel(){
                this.$router.push('/VtextAndVmodel')
            },
            goVfor(){
                this.$router.push('/Vfor')
            },
            goVon(){
                this.$router.push('/Von')
            },
            goVbind(){
                this.$router.push('/Vbind')
            },
            goVifAndVshow(){
                this.$router.push('/VifAndVshow')
            },
            goWatchAndComputed(){
                this.$router.push('/WatchAndComputed')
            },
            goProps(){
                this.$router.push('/Props')
            },
            goEmit(){
                this.$router.push('/Emit')
            },
            goProvideAndInject(){
                this.$router.push('/ProvideAndInject')
            },
            goDataFlow(){
                this.$router.push('DataFlow')
            },
            goRouteFam(){
                this.$router.push('/RouteFam')
            },
            goPracticeOne(){
                this.$router.push('/Three')
            },
            goPractiveTwo(){
                this.$router.push('/Nine')
            },
            goExpenseTracker(){
                this.$router.push('/ExpenseTrackerLogin')
            },
        }
    }
</script>

<template>
    <div class="container">
        <div class="itemOne">
            <p @click="goVtextAndVmodel()">V-text And V-model</p>
        </div>
        <div class="itemTwo">
            <p @click="goVfor()">V-for</p>
        </div>
        <div class="itemThree">
            <p @click="goVon()">V-on</p>
        </div>
        <div class="itemFour">
            <p @click="goVbind()">V-bind</p>
        </div>
        <div class="itemFive">
            <p @click="goVifAndVshow()">V-if And V-show</p>
        </div>
        <div class="itemSix">
            <p @click="goWatchAndComputed()">Watch And Computed</p>
        </div>
        <div class="itemSeven">
            <p @click="goProps()">Props</p>
        </div>
        <div class="itemEight">
            <p @click="goEmit()">Emit</p>
        </div>
        <div class="itemNine">
            <p @click="goProvideAndInject()">Provide And Inject</p>
        </div>
        <div class="itemTen">
            <p @click="goDataFlow()">Data Flow</p>
        </div>
        <div class="itemEleven">
            <p @click="goPracticeOne()">Practice One</p>
        </div>
        <div class="itemTwelve">
            <p @click="goPractiveTwo()">Practice Two</p>
        </div>
        <div class="itemThirteen">
            <p @click="goExpenseTracker()">Expense Tracker</p>
        </div>
        <div class="itemFourteen">
            <a href="https://monumental-crumble-977d07.netlify.app/"><p>Profile Website</p></a>
        </div>
        <div class="itemFifteen">
            <p @click="goRouteFam()">Route Fam</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        width: 80vw;
        display: flex;
        flex-wrap: wrap;
        gap: 1vmin;
        margin-top: 5vmin;

        p{
            font-size: 30pt;
            text-align: center;
        }
    }

    .itemOne{
        width: 25vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #D9D7F1;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemTwo{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #FFFDDE;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemThree{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #E7FBBE;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemFour{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #FFCBCB;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemFive{
        width: 21vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #FFFDDE;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemSix{
        width: 28vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #E7FBBE;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemSeven{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #FFCBCB;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemEight{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #D9D7F1;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    
    .itemNine{
        width: 25vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #E7FBBE;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    
    .itemTen{
        width: 15vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #FFCBCB;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemEleven{
        width: 16vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #D9D7F1;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemTwelve{
        width: 16vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #FFFDDE;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemThirteen{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #FFCBCB;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
    .itemFourteen{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #D9D7F1;

        a{
            text-decoration: none;
            color: black;
        }

        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }

    .itemFifteen{
        width: 15vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #FFFDDE;
        &:hover{
            opacity: 0.5;
            scale: 1.01;
        }

        &:active{
            opacity: 1;
            scale: 0.8;
        }
    }
</style>
