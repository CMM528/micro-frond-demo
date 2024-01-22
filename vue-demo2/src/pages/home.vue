<template>
  <div>当前的Count是多少呢???</div>
  <button @click="handleClick">点击</button>
</template>
<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
export default {
  setup() {
    const route = useRouter()
    let count = ref(0)
    function handleClick() {
      route.push("/about")
    }
    return {
      count,
      handleClick,
    }
  },
}
</script>
<!-- 样式 -->
<style lang="scss" scoped></style>
