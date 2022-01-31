<template>
  <el-table
      :data="tableData"
      :default-sort="{ prop: 'code', order: 'email' }"
      border style="width: 100%; font-family: 'Open Sans', sans-serif;"
  >
    <el-table-column prop="code" label="Код" sortable/>
    <el-table-column prop="data" label="Дата" sortable/>
    <el-table-column prop="name" label="ПІБ" sortable/>
    <el-table-column prop="email" label="E-mail" sortable/>
    <el-table-column prop="tel" label="Телефон" />
    <el-table-column prop="lang" label="Мова"
        :filters="[
        { text: 'ru', value: 'ru' },
        { text: 'eng', value: 'eng' },
        { text: 'ukr', value: 'ukr' },
      ]"/>
    <el-table-column prop="url" label="Url" sortable/>
    <el-table-column prop="products" label="Продукти" sortable/>
    <el-table-column prop="status" label="Статус"
        :filters="[
        { text: 'Перевірений', value: 'Перевірений' },
        { text: 'Неперевірений', value: 'Неперевірений' },
      ]">
      <el-tag type="success">Перевірений</el-tag>
    </el-table-column>
    <el-table-column prop="actions" label="Активність"
        :filters="[
        { text: 'Активний', value: 'Активний' },
        { text: 'Неактивний', value: 'Неактивний' },
      ]">
      <el-tag type="success">Активний</el-tag>
    </el-table-column>
    <el-table-column prop="fishka" label="Fishka"
        :filters="[
        { text: 'Наявна', value: 'Наявна' },
        { text: 'Відсутня', value: 'Відсутня' },
      ]">
      <el-tag type="success">Наявна</el-tag>
    </el-table-column>
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
  name: "OnlineProductsTable",
  data() {
    return {
      tableData: [
        {
          code: '16330B',
          data: '01-01-2020',
          name: 'Клиент Иван Иванович',
          email:'client@gmail.com',
          tel:'+38 (050) 111-22-33',
          lang:'ru',
          url:'url.adress.com',
          products:'8220',
          status:'Неперевірений',
          actions:'Активний',
          fishka:'Наявна',
          action:'',
        },
        {
          code: '16330B',
          data: '01-01-2020',
          name: 'Клиент Иван Иванович',
          email:'client@gmail.com',
          tel:'+38 (050) 111-22-33',
          lang:'ru',
          url:'url.adress.com',
          products:'8220',
          status:'Неперевірений',
          actions:'Активний',
          fishka:'Наявна',
          action:'',
        },
        {
          code: '16330B',
          data: '01-01-2020',
          name: 'Клиент Иван Иванович',
          email:'client@gmail.com',
          tel:'+38 (050) 111-22-33',
          lang:'ru',
          url:'url.adress.com',
          products:'8220',
          status:'Неперевірений',
          actions:'Активний',
          fishka:'Наявна',
          action:'',
        },
      ],
    }
  },
}
</script>
