<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
import VslotButton from '../../components/Vslot/VslotButton.vue';
import VslotNamed from '../../components/Vslot/VslotNamed.vue';
export default{
    data(){
        return{
            arr:[
                {
                    type:"header",
                    name:"蛋捲冰淇淋加薯條"
                },
                {
                    type:"footer",
                    name:"玉米濃湯加薯條"
                }   
            ]
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(6)
    },
    components:{
        VslotButton,
        VslotNamed
    }
}
</script>

<template>
    <div class="content">
        <VslotButton>
            <span>Click</span>
            <i class="fa-solid fa-cable-car"></i>
        </VslotButton>
        <VslotNamed>
            <template v-slot:header>
                <h1>VslotName : Header</h1>
            </template>
            <template v-slot:footer>
                <h1>VslotName : Footer</h1>
            </template>
            <h2>No name</h2>
        </VslotNamed>
        <VslotNamed v-for="item in arr">
            <template v-slot:[item.type]>
                <h1 class="nameDynamic">{{ item.name }}</h1>
            </template>
        </VslotNamed>
    </div>
</template>


<style lang="scss" scoped>
    .content{
        text-align: center;
        margin-top: 5vmin;
    }
    h1{
        color: dimgray;
        margin-bottom: 3vmin;
    }
    .nameDynamic{
        color: lightslategray;
    }
</style>