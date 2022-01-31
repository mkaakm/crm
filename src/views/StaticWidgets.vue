<template>
  <div class="widgets">
    <h1 class="heading-title">Статичні віджети</h1>
    <div class="header-search">
      <h3 class="heading">Список статичних віджетів</h3>
      <div class="head">
        <MixedInput />
        <Button text="+ Додати віджет"/>
      </div>
    </div>
    <div class="clear-section">
      <ButtonClear text="Очистити &quot;статус&quot;"/>
    </div>
    <StaticWidgetsTable />
    <div class="pages-footer">
      <Pagination/>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import ButtonClear from "../components/ButtonClear";
import StaticWidgetsTable from "../components/StaticWidgetsTable";
import MixedInput from '../components/MixedInput'
import Pagination from "../components/Pagination";
export default {
  name: "StaticWidgets",
  components:{
    Pagination,
    Button,
    ButtonClear,
    StaticWidgetsTable,
    MixedInput
  }
}
</script>
<style scoped>
.widgets{
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
.clear-filters{

}
</style>
