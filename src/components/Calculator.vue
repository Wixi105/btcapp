<template>
  <div id="root">

    <div class="flex justify-center">
      <main
        id="app-body"
        class="font-body p-6 text-center border border-primary m-2 md:m-6 md:w-2/3 rounded-md"
      >
        <section id="form">
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
                v-model.number="internalAmount"
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
                v-model="internalDate"
                @input="apiCall"
                min="2011-09-01"
                :max="internalDateCurrent"
              />
            </div>
          </form>
        </section>

        <section id="data-view" v-if="internalCoinData">
          <p class="py-4">
            The price of bitcoin, on
            <span class="text-primary font-bold">{{ internalDate }}</span>
            {{ internalDate == internalDateCurrent ? "is" : "was" }} (USD) :
            {{ internalCoinData[0].price_close }}
          </p>
          <p class="py-4">
            On this day, Bitcoin opened at
            <span class="text-primary font-bold"
              >{{ internalCoinData[0].price_open }} USD</span
            >, reached a high of
            <span class="text-primary font-bold"
              >{{ internalCoinData[0].price_high }} USD</span
            >
            and closed at
            <span class="text-primary font-bold"
              >{{ internalCoinData[0].price_close }} USD</span
            >
          </p>
          <p class="py-4" v-if="internalAmount">
            If you had bought
            <span class="text-primary font-bold">{{ internalAmount }} USD</span> worth
            of Bitcoin at this time, you would have had
            <span class="text-primary font-bold">
              {{
                (
                  ((((internalCoinData[internalCoinData.length - 1].price_close -
                    internalCoinData[0].price_close) /
                    internalCoinData[0].price_close) *
                    100) /
                    100) *
                  internalAmount
                ).toFixed(4)
              }}
              USD
            </span>
            in profit today.
          </p>
          <p class="py-4">
            The current price of Bitcoin is
            <span class="text-primary font-bold"
              >{{ internalCoinData[internalCoinData.length - 1].price_close }} USD
            </span>
          </p>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      internalCoinData: this.coindata,
      internalAPIKey : this.apiKey,
      internalAmount: this.amount,
      internalDate: this.date,
      internalDateCurrent: this.date_current,
      internalAPILimit:this.apiLimit,
    }
  },
  methods: {
    apiCall(){
      this.$parent.apiCall();
    }
  },
  props: {
    coindata:{},
    apiKey: String,
    amount:String,
    date:String,
    date_current:String,
    apiLimit:String,
  },

};
</script>
  