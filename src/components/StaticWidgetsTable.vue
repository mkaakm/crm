<template>
  <el-table class="table-style" :data="tableData" border style="width: 100%;font-family: 'Open Sans', sans-serif;">
    <el-table-column prop="name" label="Назва" />
    <el-table-column prop="resource" label="Ресурс" />
    <el-table-column prop="activity" label="Активність"
                     :filters="[
        { text: 'Активний', value: 'Активний' },
        { text: 'Неактивний', value: 'Неактивний' },
      ]"
                     :filter-method="filterHandler" >
      <el-tag type="success">Активний</el-tag>
    </el-table-column>
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
          name: 'Оплата',
          resource:'Ресурс, де розміщено',
          activity:'Неактивний',
          comment:'Коментар',
          actions:'',
        },
        {
          name: 'Перевірка статусу',
          resource:'Ресурс, де розміщено',
          activity:'Неактивний',
          comment:'Коментар',
          actions:'',
        },
        {
          name: 'Персональний кабінет',
          resource:'Ресурс, де розміщено',
          activity:'Неактивний',
          comment:'Коментар',
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
