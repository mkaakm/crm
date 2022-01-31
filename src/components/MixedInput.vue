<template>
<div class="select-input">
<el-input
    v-model="input3"
    placeholder="Пошук в таблиці"
    class="input-with-select"
>
  <template #prepend>
    <el-select v-model="select" placeholder="Онлайн продукт" class="select">
      <el-option label="Restaurant" value="1"></el-option>
      <el-option label="Order No." value="2"></el-option>
      <el-option label="Tel" value="3"></el-option>
    </el-select>
  </template>
  <template #append>
    <el-button :icon="Search" class="search-icon"></el-button>
  </template>
</el-input>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons'
const input3 = ref('')
const select = ref('')
</script>

<style>
.input-with-select {
  background-color: #fff;
}
.select-input{
  margin-top: 15px;
  margin-right: 20px;
  width: 540px;
}
.select{
  width: 160px;
  font-size: 14px;
}
</style>
