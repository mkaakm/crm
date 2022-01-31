<template>
  <div class="orders">
    <h1 class="heading-title">Замовлення клієнтів системи</h1>
    <div class="header-search">
      <h3 class="heading">Список замовлень</h3>
      <MixedInput />
    </div>
    <div class="clear-section">
      <ButtonClear text="Очистити &quot;Дата&quot;"/>
      <ButtonClear text="Очистити &quot;Статус&quot;"/>
      <ButtonClear text="Очистити &quot;Спосіб доставки&quot;"/>
      <div class="clear-filters">Х Очистити всі фільтри</div>
    </div>
    <OrdersTable />
    <div class="pages-footer">
      <PaginationClients/>
      <ExportButton text="Експортувати у XLS"/>
    </div>
  </div>
</template>

<script>
import ButtonClear from "../components/ButtonClear";
import ExportButton from "../components/ExportButton";
import OrdersTable from "../components/DocumentsTable";
import MixedInput from '../components/MixedInput'
import PaginationClients from "../components/PaginationClients";
export default {
  name: "Documents",
  components:{
    ExportButton,
    PaginationClients,
    ButtonClear,
    OrdersTable,
    MixedInput
  }
}
</script>
<style scoped>
.orders{
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
