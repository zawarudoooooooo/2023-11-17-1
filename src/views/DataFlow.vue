<script>
import { mapState, mapActions } from 'pinia'
import counter from "../stores/counter"
import FlowChildOne from '../components/FlowChildOne.vue';
import FlowChildTwo from '../components/FlowChildTwo.vue';
    export default{
        data(){
            return{
                obj:{},
                page:false,

            }
        },
        methods:{
            ...mapActions(counter,["setLocation"]),
            getInfo(info){
                this.obj=info
            },
            pageChange(){
                this.page = !this.page
            }
        },
        mounted(){
            this.setLocation(10)
        },
        components:{
            FlowChildOne,
            FlowChildTwo
        }
    }
</script>

<template>
    <div class="content">
        <span>DataFlow</span>
        <div class="childArea">
            <div class="childOne" v-show="this.page==false">
                <FlowChildOne @get="getInfo" />
            </div>
            <div class="childTwo">
                <FlowChildTwo :name="this.obj.name" :number="this.obj.number" :gender="this.obj.gender" :address="this.obj.address" :age="this.obj.age" :pagechange="pageChange" />

                <!-- <FlowChildTwo v-bind="this.obj" :pagechange="pageChange" /> -->
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .content{
        text-align: center;

        span{
            font-size: 36pt;
            color: lightslategray;
        }

        p{
            font-size: 20pt;
            color: darkgray;
            
        }

        .childArea{
            display: flex;
        }

}
</style>