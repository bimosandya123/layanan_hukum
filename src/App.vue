<template>
  <nav v-cloak>
    <h1><router-link :to="{ name: 'Home' }">HUKUMID</router-link></h1>
    <div class="dropDown" :class="{ 'active': showDropDown }" @click="tooglePengacara" >
      <button>Cari Pengacara</button>
      <img v-if="showDropDown" src=".\assets\Iconly\Arrow-active.png" class="icon">
      <img v-else src=".\assets\Iconly\Arrow-inactive.png" class="icon">
    </div>
    <div class="users">
      <router-link :to="{ name: '' }" class="message profile">
        <img src=".\assets\Iconly\Notification.svg" alt="">
        message</router-link>
      <router-link :to="{ name: 'Message' }" class="message profile">
        <img src=".\assets\Iconly\Message.svg" alt="">
        message</router-link>
      <router-link :to="{ name: '' }" class="signin profile">
        <img src=".\assets\Iconly\Profile.svg" alt="">
        {{ user }}</router-link>
    </div>
  </nav>
  <div class="dropdown" v-if="showDropDown">
    <DropDownPengacara @close="tooglePengacara"/>
  </div>
  <div class="footer"></div>
  <router-view />
</template>
<script>
import DropDownPengacara from './components/DropDownPengacara.vue';

export default {
  name: 'App',
  components: { DropDownPengacara },
  data() {
    return {
      user: 'Bimo Sandya',
      showDropDown: false,
    }
  },
  methods: {
    tooglePengacara() {
      this.showDropDown = !this.showDropDown;
    }
  },
}
</script>