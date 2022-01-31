<template>
  <div class="administrator">
    <h1 class="heading-title">Адміністратори системи</h1>
    <div class="header">
      <h3 class="heading">Список адміністраторів</h3>
      <Button text="+ Додати адміністратора"/>
    </div>
    <AdministrtatorsTable />
    <div class="pages-footer">
      <PaginationClients/>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import AdministrtatorsTable from "../components/AdministrtatorsTable";
import PaginationClients from "../components/PaginationClients";
export default {
  name: "Administrators",
  components: {AdministrtatorsTable, Button, PaginationClients}
}
</script>

<style scoped>
.administrator{
  margin: 42px 36px 0 36px;
}
.heading-title{
  font-weight: 600;
  font-size: 20px;
  font-family: Raleway;
  margin-bottom: 32px;
}
.header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.heading{
  font-weight: 600;
  font-size: 16px;
  font-family: Raleway;
}
.pages-footer{
  display: flex;
}
</style>
