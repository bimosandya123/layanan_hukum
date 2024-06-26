<template>
  <div class="backdrop" @click="closeDropDown">
    <div class="container">
      <h1>Pilih bidang hukum yang berkaitan dengan masalah Anda:</h1>
      <div class="bidang">
        <div class="content">
          <router-link :to="{ name: 'SearchBidang' }" v-for="bidang in bidang" :key="bidang.bidang">
            <p>{{ bidang.bidang }}</p>
          </router-link>
        </div>
        <div class="content">
          <router-link :to="{ name: 'SearchBidang' }" v-for="bidang in bidang" :key="bidang.bidang">
            <p>{{ bidang.bidang }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      bidang: [
        { bidang: 'kebangkrutan' },
        { bidang: 'utang piutang' },
      ]
    }
  },methods: {
    closeDropDown(){
      this.$emit('close')
    }
  },
}
</script>
<style scoped>
.backdrop{
  position: fixed;
  height: 100%;
  width: 100%;
  /* margin-top: 74px; */
  /* top: 0; */
  z-index: 100;
}
.container {
  padding: 50px 0px;
  padding-bottom: 20px;
  background-color: var(--secondary);
  border-top: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
  height: fit-content;
  width: 100%;
  margin-top: 74px;
  position: fixed;
  z-index: 100;
}

h1 {
  margin: 0px 200px;
  font-weight: bold;
  font-size: medium;
}

.bidang {
  display: flex;
  flex-wrap: wrap;
  column-gap: 100px;
  margin: 50px 200px;
}

p {
  color: var(--active);
}

a.router-link-active.router-link-exact-active {
  text-decoration: none;
  color: black;
}
</style>