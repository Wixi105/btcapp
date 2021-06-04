<template>
  <div id="root">
    <div class="flex justify-center">
      <main
        id="app-body"
        class="font-body p-6 text-center border border-primary m-2 md:m-6 md:w-2/3 rounded-md"
      >
        <section id="header">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=010"
            alt="bitcoin logo"
            class="w-16 mx-auto mb-2"
          />
          <h2 class="text-3xl">Bitcoin Calculator</h2>
          <p class="pb-12 pt-2 uppercase text-primary">
            'If I had bought Bitcoin...'
          </p>

          <form action="">
            <div class="flex flex-col mb-4">
              <label
                for=""
                class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                >Investment Amount:</label
              >
              <input
                class="border py-2 px-3 w-72 mx-auto"
                type="text"
                placeholder="200"
                v-model.number="amount"
                @input.once="apiCall"
                number
              />
            </div>

            <div class="flex flex-col mb-4">
              <label
                for=""
                class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                >Date:</label
              >
              <input
                class="border py-2 px-3 w-72 mx-auto"
                type="date"
                v-model="date"
                @input="apiCall"
                min="2011-09-01"
                :max="date_current"
              />
            </div>
          </form>
  
        </section>

        <section id="data-view" v-if="coindata">
          <p class="py-4">
            The price of bitcoin, on
            <span class="text-primary font-bold">{{ date }}</span>
            {{ date == date_current ? "is" : "was" }} (USD) :
            {{ coindata[0].price_close }}
          </p>
          <p class="py-4">
            On this day, Bitcoin opened at
            <span class="text-primary font-bold"
              >{{ coindata[0].price_open }} USD</span
            >, reached a high of
            <span class="text-primary font-bold"
              >{{ coindata[0].price_high }} USD</span
            >
            and closed at
            <span class="text-primary font-bold"
              >{{ coindata[0].price_close }} USD</span
            >
          </p>
          <p class="py-4" v-if="amount">
            If you had bought
            <span class="text-primary font-bold">{{ amount }} USD</span> worth
            of Bitcoin at this time, you would have had
            <span class="text-primary font-bold">
              {{
                (
                  ((((coindata[coindata.length - 1].price_close -
                    coindata[0].price_close) /
                    coindata[0].price_close) *
                    100) /
                    100) *
                  amount
                ).toFixed(4)
              }}
              USD
            </span>
            in profit today.
          </p>
          <p class="py-4">
            The current price of Bitcoin is
            <span class="text-primary font-bold"
              >{{ coindata[coindata.length - 1].price_close }} USD
            </span>
          </p>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
// const apiKey = "65A1C09F-1EE2-4DA0-AA42-80BF4138FDDD";
const apiKey2 = "C0B497A4-55D8-43A5-BA2E-BB06747C35E0";
export default {
  data() {
    return {
      apiKey: apiKey2,
      apiLimit: 100,
      amount: "",
      coindata: {},
      date: "2016-06-02",
      date_current: new Date().toISOString().substr(0, 10),
      truth:true,
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
          this.coindata = res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    // this.apiCall();
  },
};
</script>
  