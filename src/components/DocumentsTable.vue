<template>
  <el-table
      :data="tableData"
      :default-sort="{ prop: 'code', order: 'email' }"
      border style="width: 100%; font-family: 'Open Sans', sans-serif;"
  >
    <el-table-column prop="number" label="Номер" sortable/>
    <el-table-column prop="data" label="Дата" sortable/>
    <el-table-column prop="name" label="ПІБ" sortable/>
    <el-table-column prop="email" label="E-mail" sortable/>
    <el-table-column prop="tel" label="Телефон" />
    <el-table-column prop="sum" label="Сума" />
    <el-table-column prop="balls" label="Бали Fishka" />
    <el-table-column prop="url" label="Url" sortable/>
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
          number: '16330B',
          data: '01-01-2020',
          name: 'Клиент Иван Иванович',
          email:'client@gmail.com',
          tel:'+38 (050) 111-22-33',
          sum:400,
          balls:'www',
          url:'url.adress.com',
          products:'8220',
          status:'Неперевірений',
          delivery:'Самовивіз',
          action:'',
        },
        {
          number: '16330B',
          data: '01-01-2020',
          name: 'Клиент Иван Иванович',
          email:'client@gmail.com',
          tel:'+38 (050) 111-22-33',
          sum:400,
          balls:'www',
          url:'url.adress.com',
          products:'8220',
          status:'Неперевірений',
          delivery:'Самовивіз',
          action:'',
        },
        {
          number: '16330B',
          data: '01-01-2020',
          name: 'Клиент Иван Иванович',
          email:'client@gmail.com',
          tel:'+38 (050) 111-22-33',
          sum:400,
          balls:'www',
          url:'url.adress.com',
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
