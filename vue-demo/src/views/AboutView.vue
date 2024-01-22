<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>下面的是 React 的子应用</div>
    <button @click="handleGo">跳转</button>
    <!-- <micro-app
      name="app-vue2-demo"
      url="http://localhost:8080/"
      baseroute="/app-vue2-demo"
    ></micro-app> -->
  </div>
</template>
<script>
/* eslint-disable */
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    function handleGo() {
      router.replace("/vue-demo")
    }
    return {
      handleGo,
    }
  },
}
</script>
