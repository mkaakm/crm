<template>
<div class="edit">
  <h1 class="heading-title">Редагування конфігурації online-продукту</h1>
  <h3 class="heading"></h3>
  <div class="sample">
   <div class="input">
     <span class="text">Код віджету</span>
     <Input />
   </div>
    <div class="input">
      <span class="text">Назва</span>
      <Input />
    </div>
    <div class="input">
      <span class="text">Ресурс</span>
      <Input />
    </div>
    <div class="radio-btn">
      <span class="text">Тип віджету</span>
        <RadioBtn />
    </div>
    <div class="select">
      <span class="text">Віджет</span>
      <Select />
    </div>
    <div class="select">
      <span class="text">Онлайн-продукт</span>
      <Select />
    </div>
    <div class="identify">
      <span class="text">Ідентифікатор 1</span>
      <Input />
      <span class="text">Ідентифікатор 2</span>
      <Input />
    </div>
    <div class="checkbox">
      <span class="text">Пролонгація</span>
      <CheckBox />
    </div>
    <div class="radio-btn-group">
      <span class="text">Комісія</span>
    <RadioBtnGroup />
    </div>
    <div class="banner">
      <span class="text">Зображення банера</span>
      <span class="text-banner">jpg/png файли розміром не більше 5mb</span>
    </div>
    <div class="btn-section">
    <Button text="Підтвердити" />
    <ButtonDefault />
    </div>
  </div>
</div>
</template>

<script>

import Input from "../components/Input";
import Select from "../components/Select";
import RadioBtn from "../components/RadioBtn";
import RadioBtnGroup from "../components/RadioBtnGroup";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import ButtonDefault from "../components/ButtonDefault";
export default {
  name: "EditOnlineProduct1",
  components: {
    ButtonDefault,
    Button,
    CheckBox,
    RadioBtn,
    Input,
    Select,
    RadioBtnGroup
  },
}
</script>

<style scoped>

</style>
