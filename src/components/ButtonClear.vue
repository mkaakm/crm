<template>
  <el-row>
    <el-button class="clear">{{text}}</el-button>
    </el-row>
</template>

<script>
export default {
  name: "ButtonClear",
  props:{
    text: String,
  }
}
</script>

<style scoped>
.clear{
  font-weight: 600;
  font-size: 12px;
  font-family: Raleway;
  margin-right: 10px;
}
</style>
