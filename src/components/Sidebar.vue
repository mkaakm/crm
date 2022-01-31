<template>
<div class="sideBar">
  <div class="logo">
    <img src='../assets/img/logo.png' alt="Logo">
  </div>
  <div class="menu">
    <ul class="side-bar">
      <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          class="link"
          :to="link.url"
          :exact="link.exact"
          :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
          v-slot="{ isActive, isExactActive}"
      >
        <span class="text">{{link.title}}</span>
      </router-link>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Sidebar",
  components:{

  },
  data: ()=> ({
    links:[
      {title:'Online-продукти', url:'/', exact: true,},
      {title:'Статичні віджети', url:'/StaticWidgets',},
      {title:'Адміністратори', url:'/administrators'},
      {title:'Клієнти', url:'/clients'},
      {title:'Договори клієнтів', url:'/documents'},
      {title:'Замовлення клієнтів', url:'/orders'},
      {title:'Платежі клієнтів', url:'/payments'},
      {title:'Налаштування', url:'/settings',}
    ]
  })
}
</script>

<style scoped>
.sideBar{
  background-color: #373F4F;
}

.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 49px;
}
.side-bar{
  display: flex;
  flex-flow: column;
  margin-top: 114px;
  align-items: flex-start;
  padding-left: 60px;
  background-color: #373F4F;
}
.link{
  margin-bottom: 36px;
  text-decoration: none;
  color: #A5A8B0;
  font-size: 14px;
  font-weight: 600;
  font-family: Raleway;
}
.text {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.router-link-active{
  color: white;
  position: relative;
}
.router-link-exact-active::after{
  content: '';
  position: absolute;
  left: -60px;
  border-left: 20px solid #509F00;
  height: 60px;
  transform: translateY(-58%);
}
</style>
