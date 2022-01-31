<template>
  <el-row>
    <el-button type="success" class="btn-success">{{text}}</el-button>
  </el-row>
</template>

<script>
export default {
  name: "Button",
  props:{
    text: String
  }
}
</script>

<style scoped>
.btn-success{
  font-weight: 600;
  font-size: 14px;
  font-family: Raleway;
  height: 10px;
  color: #fff;
}
</style>
