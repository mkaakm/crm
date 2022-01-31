<template>
  <el-table class="table-style" :data="tableData" border style="width: 100%;font-family: 'Open Sans', sans-serif;">
    <el-table-column prop="code" label="Код" />
    <el-table-column prop="name" label="Назва" />
    <el-table-column prop="type" label="Тип" />
    <el-table-column prop="product" label="Online-продукт" />
    <el-table-column prop="resource" label="Ресурс" />
    <el-table-column prop="banner" label="Банер" />
    <el-table-column prop="comment" label="Коментар" />
    <el-table-column prop="actions" label="Дії" >
      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
      >Edit</el-button
      >
      <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
      >Delete</el-button
      >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "OnlineProductsTable",
  data() {
    return {
      tableData: [
        {
          code: '2016-05-03',
          name: 'Tom',
          type: 'No. 189, Grove St, Los Angeles',
          product:'tel',
          resource:'eee',
          banner:'www',
          comment:'qqq',
          actions:'qwe',
        },
        {
          code: '2016-05-03',
          name: 'Tom',
          type: 'No. 189, Grove St, Los Angeles',
          product:'',
          resource:'',
          banner:'',
          comment:'',
          actions:'',
        },
      ],
    }
  },
}
</script>
<style scoped>
.table-style{
  font-family: Raleway,serif;
}
</style>
