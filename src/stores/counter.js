import {defineStore} from "pinia";

export default defineStore("counter",{
    //data(){}
    state(){
        return{
            location:"",
        }

    },
    //computed(){}
    getters:{
        locationInfo(){
            return `現在位置:${this.location}`
        }
    },
    //methods
    actions:{
        getLocation(){
            console.log(this.location)
        },
        setLocation(num){
            this.location = num ;
        }
    }
})