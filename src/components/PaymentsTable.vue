<template>
  <el-table
      :data="tableData"
      :default-sort="{ prop: 'code', order: 'email' }"
      border style="width: 100%; font-family: 'Open Sans', sans-serif;"
  >
    <el-table-column prop="products" label="Продукти" sortable/>
    <el-table-column prop="status" label="Статус"
                     :filters="[
        { text: 'Перевірений', value: 'Перевірений' },
        { text: 'Неперевірений', value: 'Неперевірений' },
      ]">
      <el-tag type="success">Перевірений</el-tag>
    </el-table-column>
    <el-table-column prop="delivery" label="Спосіб доставки"
                     :filters="[
        { text: 'Курєр', value: 'Курєр' },
        { text: 'Самовивіз', value: 'Самовивіз' },
      ]"/>
    <el-table-column prop="action" label="Дії" >
      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
      >Edit</el-button
      >
      <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
      >Delete</el-button
      >
    </el-table-column>>
  </el-table>
</template>

<script>
export default {
  name: "DocumentsTable",
  data() {
    return {
      tableData: [
        {
          products:'8220',
          status:'Неперевірений',
          delivery:'Самовивіз',
          action:'',
        },
        {
          products:'8220',
          status:'Неперевірений',
          delivery:'Самовивіз',
          action:'',
        },
        {
          products:'8220',
          status:'Неперевірений',
          delivery:'Самовивіз',
          action:'',
        },
      ],
    }
  },
}
</script>
