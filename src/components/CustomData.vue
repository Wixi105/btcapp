<template>
  <div id="root">
    <div class="flex justify-center">
      <main
        id="app-body"
        class="font-body p-6 text-center border border-primary m-2 md:m-6 md:w-2/3 rounded-md"
      >
        <p class="text-gray-400 text-sm mb-2">
          This version does not have access to data so you would have to input
          the values yourself. Sorry for the inconvenience I have reached the
          request limit on the API that gives me data. You can try again in 24
          hours and you might get access to the version with live data
        </p>
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
                number
              />
            </div>

            <div class="flex flex-col mb-4">
              <label
                for=""
                class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                >Price when you wanted to buy:</label
              >
              <input
                class="border py-2 px-3 w-72 mx-auto"
                type="text"
                v-model.number="old_price"
                placeholder="30000"
                number
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                for=""
                class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                >Current Price:</label
              >
              <input
                class="border py-2 px-3 w-72 mx-auto"
                type="text"
                v-model.number="current_price"
                placeholder="30000"
                number
              />
            </div>
            <button
              @click.prevent="calculate"
              class="bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
            >
              Calculate
            </button>
          </form>
        </section>

        <section id="data-view" v-show="bool">
          <p class="py-4" v-if="amount">
            If you had bought
            <span class="text-primary font-bold">{{ amount }} USD</span> worth
            of Bitcoin at
            <span class="text-primary font-bold">{{ old_price }} USD</span> ,
            you would have {{result>0?'had':'lost'}}
            <span class="text-primary font-bold">
              {{ result }}
              USD
            </span>
             {{result>0?'in profit today.':''}} 
          </p>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
// import Calculator from './components/Calculator'
export default {
  data() {
    return {
      amount: "",
      old_price: "",
      current_price: "",
      result: "",
      bool: false,
    };
  },
  computed: {},
  methods: {
    calculate() {
      let result =
        ((((this.current_price - this.old_price) / this.old_price) * 100) /
          100) *
        this.amount;
      this.result = result.toFixed(4);
      this.bool = true;
    },
  },
  components: {},
};
</script>
  