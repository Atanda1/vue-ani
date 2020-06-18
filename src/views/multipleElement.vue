<template>
  <div>
   <div class="container">
    <button @click="display = !display">Switch</button>
    <transition name="block" mode="out-in">
      <div class="item" key="1" v-if="display">1</div>
      <div class="item" key="2" v-if="!display">2</div>
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
        Opacity: 0;
}
.block-enter-active {
        transition : opacity 1s;
}
.block-leave {
}
.block-leave-active {
        transition: opacity 1s;
        Opacity: 0;
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