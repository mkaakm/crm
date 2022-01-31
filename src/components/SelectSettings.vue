<template>
  <el-select v-model="value" placeholder="">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
    >
    </el-option>
  </el-select>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "SelectSettings",
  setup() {
    return {
      options: ref([
        {
          value: 'Повне',
          label: 'Повне',
        },
        {
          value: 'Часткове',
          label: 'Часткове',
          disabled: true,
        },
      ]),
      value: ref(''),
    }
  },
}
</script>

<style scoped>
.el-select{
  width: 900px;
}
</style>
