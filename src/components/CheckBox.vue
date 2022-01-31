<template>
  <div>
    <el-checkbox v-model="checked1" label="Застосовується"></el-checkbox>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "CheckBox",
  setup() {
    const checked1 = ref(true)
    return {
      checked1,
    }
  },
}
</script>

<style scoped>

</style>
