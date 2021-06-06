
<template>
  <div class="">
    <nav class="bg-primary py-4 w-auto">
      <ul class="flex justify-center">
        <li>
          <h3
            class="text-white border border-white p-1 rounded-md hover:bg-gray-50 hover:text-primary" @click="navigateToHome"
          >
            Calculator
          </h3>
        </li>
        <li>
          <h3
            class="text-white ml-4 border border-white p-1 rounded-md hover:bg-gray-50 hover:text-primary"
            @click="navigateToCustomData"
          >
            Custom Data
          </h3>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  props: ["apikey", "apiLimit", "amount", "date", "date_current","coindata"],
  data() {
    return {};
  },
  methods: {
    navigateToCustomData() {
      this.$router.push({ name: "customData" });
    },
    navigateToHome() {
      this.$router.push({
        name: "home",
        params: {
          coindata:this.props.coindata,
          apiKey: this.props.apikey,
          apiLimit: this.props.apiLimit,
          amount: this.props.amount,
          date: this.props.date,
          date_current: this.props.date_current,
        },
      });
    },
  },
};
</script>