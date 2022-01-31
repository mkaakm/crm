<template>
  <el-radio-group v-model="radio">
    <el-radio :label="3">Глобальне налаштування сис-ми</el-radio>
    <el-radio :label="6">Інше</el-radio>
    <el-radio :label="9">Ні</el-radio>
  </el-radio-group>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "RadioBtnGroup",
  setup() {
    return {
      radio: ref(3),
    }
  },
}
</script>

<style scoped>

</style>
