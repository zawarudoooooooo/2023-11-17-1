<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
export default{
  data(){
    return{
    }
  },
  methods:{
    goEntry(){
      this.$router.push('/')
    }
  },
  components:{
    Header
  }
}

</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="fixedIcon">
    <i class="fa-solid fa-wand-magic-sparkles" @click="goEntry()"></i>
  </div>
    <RouterView />
</template>

<style lang="scss" scoped>
    .fixedIcon{
      font-size: 36pt;
      position: relative;
      
      i{
        color: lightsteelblue;
        position: fixed;
        right: 3%;
        bottom: 8%;
      }
    }
</style>
