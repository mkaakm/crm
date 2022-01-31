<template>
  <div class="clients">
    <h1 class="heading-title">Клієнти системи</h1>
    <div class="header-search">
      <h3 class="heading">Список клієнтів</h3>
      <MixedInput />
    </div>
    <div class="clear-section">
      <ButtonClear text="Очистити &quot;Дата&quot;"/>
      <ButtonClear text="Очистити &quot;Мова&quot;"/>
      <ButtonClear text="Очистити &quot;Статус&quot;"/>
      <ButtonClear text="Очистити &quot;Активність&quot;"/>
      <ButtonClear text="Очистити &quot;Fishka&quot;"/>
      <div class="clear-filters">Х Очистити всі фільтри</div>
    </div>
    <ClientsTable />
    <div class="pages-footer">
      <PaginationClients/>
      <ExportButton text="Експортувати у XLS"/>
    </div>
  </div>
</template>

<script>
import ButtonClear from "../components/ButtonClear";
import ExportButton from "../components/ExportButton";
import ClientsTable from "../components/ClientsTable";
import MixedInput from '../components/MixedInput'
import PaginationClients from "../components/PaginationClients";
export default {
  name: "Clients",
  components:{
    ExportButton,
    PaginationClients,
    ButtonClear,
    ClientsTable,
    MixedInput
  }
}
</script>
<style scoped>
.clients{
  margin: 42px 36px 0 36px;
}
.heading-title{
  font-weight: 600;
  font-size: 20px;
  font-family: Raleway;
  margin-bottom: 32px;
}
.header-search{
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}
.heading{
  font-weight: 600;
  font-size: 16px;
  font-family: Raleway;
  margin-right: 313px;
}
.clear-section{
  display: flex;
  margin-top: 16px;
  align-items: center;
  margin-bottom: 34px;
}
.pages-footer{
  display: flex;
}
</style>
