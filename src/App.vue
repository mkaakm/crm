<template>
<div class="online-products">
  <Sidebar/>
  <router-view></router-view>
<!--  <OnlineProducts/>-->
<!--  <Administrators />-->
<!--  <Clients />-->
<!--  <Documents />-->
<!--  <Payments />-->
<!--  <EditOnlineProduct1 />-->
</div>
</template>
<script>
import Sidebar from "./components/Sidebar";
// import EditOnlineProduct1 from "./views/EditOnlineProduct1";
// import OnlineProducts from "./views/OnlineProducts";
// import Administrators from "./views/Administrators";
// import Clients from "./views/Clients";
// import Documents from "./views/Documents";
// import Payments from "./views/Payments";
export default {
  components: {
    // EditOnlineProduct1,
    // Payments,
    // Documents,
    // Clients,
    // Administrators,
    Sidebar,
    // OnlineProducts
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import "reset.css";
body{
  font-family: 'Raleway', sans-serif;
}
.online-products{
  display: grid;
  grid-template-columns: 18% 82%;
  margin: 0 auto;
  flex-wrap: wrap;
  height: 100vh;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #509F00 !important;
}
</style>
