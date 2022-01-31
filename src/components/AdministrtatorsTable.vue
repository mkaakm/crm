<template>
  <el-table
      :data="tableData"
      :default-sort="{ prop: 'name', order: 'email' }"
      border style="width: 100%; font-family: 'Open Sans', sans-serif;"
  >
    <el-table-column prop="name" label="ПІБ" sortable width="180" />
    <el-table-column prop="email" label="E-mail" sortable width="180" />
    <el-table-column prop="tel" label="Телефон" />
    <el-table-column prop="lang" label="Мова"
        :filters="[
        { text: 'ru', value: 'ru' },
        { text: 'eng', value: 'eng' },
        { text: 'ukr', value: 'ukr' },
      ]"
        :filter-method="filterHandler" />
    <el-table-column prop="status" label="Статус"
        :filters="[
        { text: 'Активний', value: 'Активний' },
        { text: 'Неактивний', value: 'Неактивний' },
      ]"
                     :filter-method="filterHandler" >
      <el-tag type="success">Активний</el-tag>
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
  name: "AdministratorsTable",
  data() {
    return {
      tableData: [
        {
          name: 'Админ Иван Иванович',
          email: 'Admin@gmail.com',
          tel: '+38 (050) 111 22 33',
          lang: 'ru',
          status: 'Неактивный',
          action: '',
        },
        {
          name: 'Админ Иван Иванович',
          email: 'Admin@gmail.com',
          tel: '+38 (050) 111 22 33',
          lang: 'ru',
          status: 'Неактивный',
          action: '',
        },
        {
          name: 'Админ Иван Иванович',
          email: 'Admin@gmail.com',
          tel: '+38 (050) 111 22 33',
          lang: 'ru',
          status: 'Неактивный',
          action: '',
        },
      ],
    }
  },
}
</script>
