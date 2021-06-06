
<template>
  <div class="">
    <nav class="bg-primary py-4 w-auto">
      <ul class="flex justify-center">
        <li>
          <router-link to="/"
            v-if='apistat != 429'><h3 class="text-white border border-white p-1 rounded-md hover:bg-gray-50 hover:text-primary">Calculator</h3></router-link
          >
        </li>
        <li>
          <router-link to="/customdata"
            ><h3 class="text-white ml-4 border border-white p-1 rounded-md hover:bg-gray-50 hover:text-primary">Custom Data</h3></router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {

  props: {
    apiStatus:{
      type:Number,
    }
  },
  data() {
    return {
      apistat:this.apiStatus,
    }
  },
};
</script>