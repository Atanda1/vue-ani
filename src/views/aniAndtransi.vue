
<template>
  <div>
    <div class="container">
    <button @click="display = !display">Switch</button>
    <transition name="block">
      <div class="item" v-if="display">1</div>
    </transition>
  </div>
  </div>
</template>


<style scoped>
  body {
    align-content: center;
  }
    .container {
        display: grid;
        grid-gap: 20px;
        width: 500px;
        margin: 0 auto;
      }
    .item {
      background-color: blue;
      height: 100px;
      margin-bottom: 10px;
    }
    .block-enter {
      opacity: 0;
    }
    .block-enter-active {
      animation : slide-in 1s ease-out forwards;
      transition : opacity 1s;
    }
    .block-leave {
        opacity: 1;
    }
    .block-leave-active {
       animation : slide-out 1s ease-out forwards;
       transition : opacity 1s;
       opacity: 0;
    }
    @keyframes slide-in {
      from {
         transform: translateY(20px);
      }
      to {
         transform: translateY(0);
      }
    }
    @keyframes slide-out {
      from {
        transform: translateY(0);
      }
      to {
         transform: translateY(-20px);
      }
    }
</style>
<script>
export default {
  data () {
    return {
      display : false
    }
  }
}
</script>