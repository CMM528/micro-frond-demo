<template>
  <div class="container">{{ count }}</div>
  <button type="button" @click="handleAdd">+</button>
</template>
<script>
import { ref } from "vue"
export default {
  setup() {
    let count = ref(0)
    function handleAdd() {
      count.value++
    }
    return {
      count,
      handleAdd,
    }
  },
}
</script>
<!-- 样式 -->
<style scoped>
.container {
  color: red;
}
</style>
