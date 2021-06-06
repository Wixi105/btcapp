<template>
  <div id="app">
    <Navbar
      :apiKey="apiKey"
      :apiLimit="apiLimit"
      :amount="amount"
      :date="date"
      :date_current="date_current"
      :coindata="coindata"
    />
    <router-view></router-view>
    <Spinner />
    <Footer />
  </div>
</template>

<script>
/****** API KEYS ******/
const apiKey = "65A1C09F-1EE2-4DA0-AA42-80BF4138FDDD";
// const apiKey2 = "C0B497A4-55D8-43A5-BA2E-BB06747C35E0";
/************************** */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "@/components/Spinner";

export default {
  data() {
    return {
      coindata: {},
      apiKey: apiKey,
      apiLimit: 100,
      amount: "",
      date: "2016-06-02",
      date_current: new Date().toISOString().substr(0, 10),
    };
  },
  computed: {},
  methods: {
    async apiCall() {
      await this.$http
        .get(
          "https://rest.coinapi.io/v1/ohlcv/BTC/USD/history?apikey=" +
            this.apiKey +
            "&period_id=1MTH&time_start=" +
            this.date +
            "T00:00:00" +
            "&time_end=" +
            this.date_current +
            "T00:00:00&limit=" +
            this.apiLimit +
            "&include_empty_items=false"
        )
        .then((res) => {
          console.log(res);
          this.coindata = res.body;
        })
        .catch((err) => {
          if (err.status === 429) {
            this.$emit("apiStatus", err.status);
            this.$router.push({ name: "customData" });
          }
        });
    },
  },
  created() {
    // this.apiCall();
  },
  components: {
    Navbar,
    Footer,
    Spinner,
  },
};
</script>

