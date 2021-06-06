<template>
  <div id="app">
      <Navbar v-on:apiStatus='updateAPIStatus($event)'/>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
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
  }
}
</script>

