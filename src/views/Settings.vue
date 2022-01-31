<template>
<div class="settings">
  <h1 class="heading-title">Налаштування системи</h1>
  <div class="settings-box">
    <p class="text">Включення комісії платіжної системи “Платон” у суму оплати</p>
    <SelectSettings placeholder="Виберіть"/>
    </div>
    <div class="settings-box">
    <p class="text">Комісія платіжної системи %</p>
    <SelectSettings placeholder="Виберіть"/>
  </div>
  <div class="settings-btn">
    <ButtonClear text="Скасувати зміни"/>
    <Button text="Оновити"/>
  </div>
</div>
</template>

<script>
import Button from "../components/Button";
import ButtonClear from "../components/ButtonClear";
import SelectSettings from "../components/SelectSettings";
export default {
  name: "Settings",
  components:{
    Button,
    ButtonClear,
    SelectSettings
  }
}
</script>

<style scoped>
.settings{
  margin: 42px 36px 0 36px;
}
.settings-box{
  margin-left: 178px;
  margin-top: 35px;
}
.heading-title{
  font-weight: 600;
  font-size: 20px;
  font-family: Raleway;
  margin-bottom: 32px;
}
.text{
  font-family: Raleway;
  font-size: 14px;
  color:#373F4F;
  margin-bottom: 10px;
}
.settings-btn{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
