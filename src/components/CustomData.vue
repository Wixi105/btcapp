<template>
  <div id="root">
      <div class="top">
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
                >Price (of BTC) when you wanted to buy:</label
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
             {{result>0?'in profit today.':''}} at the price of <span class="text-primary font-bold">{{current_price}} USD</span>
          </p>
        </section>
      </main>
    </div>
      <footer class="flex justify-center">
      <p class="mr-2">Find me on:</p>
      <a href="https://twitter.com/semi_colon4" class="mr-2" target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
          />
        </svg>
      </a>

      <a href="https://github.com/wixi105" target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          /></svg
      ></a>
    </footer>
    <section class="flex justify-center mt-5">
        <p>Data is being fetched from <span class="text-primary font-semibold"><a href="https://www.coinapi.io/">CoinAPI</a></span></p>
      </section>
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
  