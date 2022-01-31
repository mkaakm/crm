<template>
<div class="products">
  <h1 class="heading-title">Конфігурація online-продуктів</h1>
  <div class="header-search">
  <h3 class="heading">Список online-продуктів</h3>
    <div class="head">
      <MixedInput />
      <Button text="+ Додати продукт"/>
    </div>

  </div>
  <div class="clear-section">
    <ButtonClear text="Очистити &quot;Назва&quot;"/>
    <ButtonClear text="Очистити &quot;Тип&quot;"/>
    <ButtonClear text="Очистити &quot;Онлайн-продукт&quot;"/>
    <ButtonClear text="Очистити &quot;Ресурс&quot;"/>
    <div class="clear-filters">Х Очистити всі фільтри</div>
  </div>
  <OnlineProductsTable />
  <div class="pages-footer">
  <Pagination/>
  </div>
</div>
</template>

<script>
import Button from "../components/Button";
import ButtonClear from "../components/ButtonClear";
import OnlineProductsTable from "../components/OnlineProductsTable";
import MixedInput from '../components/MixedInput'
import Pagination from "../components/Pagination";
export default {
  name: "Online-products",
  components:{
    Pagination,
    Button,
    ButtonClear,
    OnlineProductsTable,
    MixedInput
  }
}
</script>
<style scoped>
.products{
  margin: 42px 36px 0 36px;
}
.heading-title{
  font-weight: 600;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 32px;
}
.head{
  display: flex;
  align-items: baseline;
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
  font-family: 'Raleway', sans-serif;
}
.clear-section{
  display: flex;
  margin-top: 16px;
  align-items: center;
  margin-bottom: 34px;
}
</style>
