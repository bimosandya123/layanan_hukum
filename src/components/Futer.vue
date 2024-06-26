<template>
  <footer class="containerFuter">
    <div class="content">
      <div class="isi">
        <h1>BIDANG POPULER</h1>
        <ul>
          <li>Kebangkrutan</li>
          <li>Bisnis</li>
          <li>Warisan</li>
          <li>Kecelakaan</li>
          <li>Perceraian</li>
        </ul>
      </div>
      <div class="isi">
        <h1>ABOUT</h1>
        <ul>
          <li>Tentang Kami</li>
          <li>Careers</li>
          <li>Support</li>
        </ul>
      </div>
      <div class="isi">
        <h1>Contact</h1>
        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-phone" style="color: #FFF;" /> 1234567890
          </li>
          <li><font-awesome-icon icon="fa-solid fa-envelope" /> example@gmail.com
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-instagram" /> @layananHukumid
          </li>
        </ul>
      </div>
    </div>
    <p>Terms Of Use | Privacy Policy</p>
    <p>@HUKUMID All Rights Reserved 2024</p>
  </footer>
</template>

<script>

export default {
  data() {
    return {
    }
  },
}
</script>
<style scoped>
.containerFuter {
  background-color: var(--quaternary);
  /* margin-top: 0px; */
  padding: 100px;
  /* height: 400px;  */
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: start;
}
.content{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}
.isi {
  min-height: 100px;
  max-height: 200px;
}

ul {
  gap: 10px;
  list-style-type: none;
  padding: 0px;
  color: #ffffffaa;
}
p{
  color: #ffffffaa;
}
</style>