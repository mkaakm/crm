<template>
<div>
  <el-radio v-model="radio1" label="1">Калькулятор</el-radio>
  <el-radio v-model="radio1" label="2">Продаж коробкового продукту</el-radio>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "RadioBtn",
  setup() {
    return {
      radio1: ref('1'),
    }
  },
}
</script>

<style scoped>

</style>
