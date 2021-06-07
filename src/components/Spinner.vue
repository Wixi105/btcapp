<template>
  <div>
    <div class="spin">
      <div class="coin">
        <div class="lds-heart"><div></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.spin {
    z-index:10;
    width:100%;
    height:100%;
    position: fixed;
    background-color:rgba(66, 184, 131, 0.1)

}
.coin{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    margin: 0 auto;

}
.lds-heart {
   bottom: 50%;
    right: 50%;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: rgb(66, 184, 131);
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: rgb(66, 184, 131);
}
.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>