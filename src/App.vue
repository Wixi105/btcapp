<template>
  <div id="app">
      <Navbar v-on:apiStatus='updateAPIStatus($event)'/>
      <router-view></router-view>
      <!-- <Footer/> -->

  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
export default {
  data(){
    return{
      apiStatus: undefined,
    }
  },
  methods:{
    updateAPIStatus(status){
      this.apiStatus = status;
    },
  },
  components: {
    Navbar,
    // Footer,
  }
}
</script>

