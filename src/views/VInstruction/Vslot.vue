<script>
import { mapState, mapActions } from 'pinia'
import counter from "../../stores/counter"
import VslotButton from '../../components/Vslot/VslotButton.vue';
import VslotNamed from '../../components/Vslot/VslotNamed.vue';
import ScopedSlot from '../../components/Vslot/ScopedSlot.vue';
import VslotModal from '../../components/Vslot/VslotModal.vue';
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
            ],
            model:false
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        openModel(){
            this.model = !this.model
        },
    },
    mounted(){
        this.setLocation(6)
    },
    components:{
        VslotButton,
        VslotNamed,
        ScopedSlot,
        VslotModal,
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
                <h1>V slot Name : Header</h1>
            </template>
            <template #footer>
                <h1>V slot Name : Footer</h1>
            </template>
            <h2>V slot Name : No name</h2>
        </VslotNamed>
        <VslotNamed v-for="item in arr">
            <template v-slot:[item.type]>
                <h1 class="nameDynamic">{{ item.name }}</h1>
            </template>
        </VslotNamed>
        <ScopedSlot v-slot="slotProps">
            <h1>v-slot="slotProps"</h1>
            <h3>{{ slotProps.text }}&{{ slotProps.count }}</h3>
        </ScopedSlot>
        <ScopedSlot v-slot="{text,count}">
            <h1>v-slot="{text,count}"</h1>
            <h3>{{ text }} And {{ count }}</h3>
        </ScopedSlot>
        <button type="buttotn" @click="openModel">Open Model</button>
        <VslotModal v-show="model" @alertMessage="openModel">

        </VslotModal>
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
    h3{
        color: lightslategray;
        margin-bottom: 3vmin;
    }
    .nameDynamic{
        color: lightslategray;
    }
    button{
        background: linear-gradient(315deg,rgb(226, 179, 187) 25%,skyblue 25%,rgb(235, 235, 174));
        border: none;
        border-radius: 8px;
        cursor: pointer;
        width: 20vmin;
        height: 5vmin;
        color: white;
    }
</style>