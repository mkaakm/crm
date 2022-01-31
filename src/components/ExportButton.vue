<template>
  <el-row class="btn">
    <el-button class="export">{{text}}</el-button>
  </el-row>
</template>

<script>
export default {
  name: "ExportButton",
  props:{
    text: String,
  }
}
</script>

<style scoped>
.btn{
  margin: 25px 0 0 150px;
}
.export{
  font-weight: 600;
  font-size: 14px;
  font-family: Raleway;
  color: #509F00;
  border-color: #509F00;
  height: 25px;
}
</style>
