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
  name: "OrdersTable",
  data() {
    return {
      tableData: [
        {
          number: '000111222',
          data: '01-01-2020',
          name: 'Клиент Иван Иванович',
          email:'client@gmail.com',
          tel:'+38 (050) 111-22-33',
          sum:20,
          balls:200,
          url:'url.adress.com',
          products:'2211',
          status:'Неперевірений',
          delivery:'Самовивіз',
          action:'',
        },
        {
          number: '000111223',
          data: '04-04-2020',
          name: 'Клиент Сергій Иванович',
          email:'client@gmail.com',
          tel:'+38 (050) 331-22-44',
          sum:15,
          balls:100,
          url:'url.adress.com',
          products:'3344',
          status:'Неперевірений',
          delivery:'Самовивіз',
          action:'',
        },
        {
          number: '000111224',
          data: '05-05-2020',
          name: 'Клиент Антон Иванович',
          email:'client@gmail.com',
          tel:'+38 (060) 166-26-34',
          sum:40,
          balls:300,
          url:'url.adress.com',
          products:'1120',
          status:'Неперевірений',
          delivery:'Самовивіз',
          action:'',
        },
      ],
    }
  },
}
</script>
