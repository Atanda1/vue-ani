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
    }

    .block-enter {
    }

    .block-enter-active {
      animation : fade-in 1s 
    }

    .block-leave {

    }

    .block-leave-active {
       animation : fade-out 1s 
    }

    @keyframes fade-in {
      from {
        opacity : 0
      }
      to {
        opacity : 1;
      }
    }

    @keyframes fade-out {
      from {
        opacity : 1;
      }
      to {
        opacity : 0;
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