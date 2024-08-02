<template>
  <div class="Notif">
    <div class="container">
      <div class="topbar">
        <p class="header">Notifications</p>
        <div class="search">
          <input type="text" name="Search" placeholder="search" />
          <font-awesome-icon icon="fa-solid fa-search" size="2xl" />
        </div>
      </div>
      <div class="pemberitahuan">

      </div>
    </div>
  </div>
  <Futer />
</template>

<script>
import Search from "../components/Search.vue";
import Futer from "../components/Futer.vue";
import foto1 from "@/assets/images/foto1.jpg";
import foto2 from "@/assets/images/foto2.jpg";
import foto3 from "@/assets/images/foto3.jpg";
import foto4 from "@/assets/images/foto4.jpg";
export default {
  components: { Futer, Search },
};
</script>

<style scoped>
.Notif {
  padding: 100px;
}
.container {
  background-color: rgba(255, 255, 255, 0.792);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border-style: solid;
  border-color: var(--active);
  height: 500px;
  margin: 50px 0px;
}
.topbar {
  background-color: rgba(255, 255, 255);
  /* width: 100px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: -7px -2px 0px -2px;
  padding: 10px 40px;
  border-radius: 20px;
  border-color: var(--active);
  border-style: solid;
}
.topbar .search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 230px;
}
input{
    height: 30px;
    width: 150px;
    border-radius: 12px;
}
</style>