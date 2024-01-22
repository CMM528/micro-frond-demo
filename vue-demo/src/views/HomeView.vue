<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <micro-app
      name="vue-demo"
      url="http://localhost:8080/"
      baseroute="/vue-demo"
    ></micro-app>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
}
</script>
