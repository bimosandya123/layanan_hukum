<template>
  <div class="home">
    <div class="section1">
      <div class="content">
        <h1>PENGACARA BERPENGALAMAN SIAP MEMBANTU.</h1>
        <div class="input-container">
          <div class="input-wrapper">
            <font-awesome-icon icon="fa-solid fa-search" />
            <input id="searchInput" class="input-field" type="text"
              placeholder="Masukkan bidang praktek atau nama pengacara">
          </div>
          <div class="input-wrapper lokasi">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <input id="searchInput" class="input-field" type="text" placeholder="Lokasi">
          </div>
          <button class="cari" @click="cari">Cari</button>
        </div>
      </div>
    </div>
    <div class="section2">

      <h1>PENGACARA TERATAS</h1>
      <div class="container">
        <div class="content2" v-for="pengacara in pengacara" :key="pengacara.id">
          <div class="strong">
            <strong>{{ pengacara.bidangPraktik[0] }}</strong>
          </div>
          <router-link :to="{ name: 'ProfilePengacara', params: { id: pengacara.id } }">
            <div class="pengacara">
              <div class="profile">
                <div class="img" :style="{ backgroundImage: `url(${pengacara.foto})` }"></div>
                <!-- <img :src="pengacara.foto" :alt="pengacara.nama" height="200px" width="160px"/> -->
                <div class="detailsProfile">
                  <p>{{ pengacara.nama }}</p>
                  <div class="review">
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <p>({{ pengacara.review }} Reviews)</p>
                  </div>
                  <div class="rating">
                    <p>Rating </p>
                    <strong> {{ pengacara.rating }}</strong>
                  </div>
                  <p>Lokasi</p>
                  <font-awesome-icon icon="fa-solid fa-location-dot" /> Surabaya
                </div>
              </div>
              <strong>Bidang praktik</strong> <br>
              <div class="praktik">
                <p v-for="(bidang, index) in pengacara.bidangPraktik" :key="index">
                  {{ bidang }}
                  <span v-if="index < pengacara.bidangPraktik.length - 1">, </span>
                </p>
              </div>
              <div class="reviews">
                <p>REVIEW</p>
                <div class="review">
                  <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                  <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                  <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                  <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                  <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                  <p>By Robert Pattinson, 24 mei 2024</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio minus alias! Impedit
                  fugit
                  obcaecati est nobis libero placeat nulla et qui ipsum consequatur a praesentium accusamus, recusandae
                  reiciendis? Neque?</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <Futer />
    <router-view />
  </div>

</template>

<script>
import Futer from '../components/Futer.vue';
import foto1 from '@/assets/images/foto1.jpg';
import foto2 from '@/assets/images/foto2.jpg';
import foto3 from '@/assets/images/foto3.jpg';
import foto4 from '@/assets/images/foto4.jpg';
// const url = 'http://localhost:3000/pengacara';  //API
export default {
  components: { Futer },
  data() {
    return {
      pengacara: [
        { id: 1, nama: 'Stephanie William', tarif: 275, pendidikan: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], univesitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.5, review: 231, lokasi: 'Surabaya', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto1 },
        { id: 2, nama: 'Robert Pattinson', tarif: 275, pendidikan: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], univesitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.0, review: 12, lokasi: 'Jakarta', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto2 },
        { id: 3, nama: 'Angela Jolie', tarif: 275, pendidikan: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], univesitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.6, review: 31, lokasi: 'Surakarta', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto3 },
        { id: 4, nama: 'Mark Ruffalo', tarif: 275, pendidikan: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], univesitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 3.7, review: 45, lokasi: 'Jogja', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto4 }
      ]
    }
  },
  methods: {
    cari() {
      console.log("mencari")
    }
  },
  // API
  // mounted() {
  //   fetch(url)
  //     .then(res=> res.json())
  //     .then(data=>this.pengacara = data)
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },
}
</script>
<style scoped>
.home {
  margin: 0px;
  padding: 0px;
}

.section1 {
  height: 300px;
  padding: 200px 100px 100px 100px;
}

h1 {
  width: 700px;
}

.input-container {
  background-color: #aaa;
  width: fit-content;
  margin-top: 20px;
  display: flex;
}

.input-wrapper {
  width: 350px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}

.lokasi {
  width: 200px
}

.input-field {
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
}

.cari {
  width: 100px;
  background-color: var(--tertiary);
  border-color: #aaa;
  font-size: 20px;
  /* outline: none; */
}

input::placeholder {
  color: #aaa;
}

/* ========================== SECTION 2 ========================== */
.section2 {
  background-color: var(--tertiary);
  height: fit-content;
  padding: 50px 50px;
  margin: 0px;
}


.section2 .content .bidang div strong {
  text-transform: uppercase;
  font-size: larger;
}

.section2 .container {
  display: flex;
  align-items: center;
  scrollbar-width: none;
  scroll-behavior: smooth;
  overflow: scroll;
}

.content2 {
  row-gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 10px 20px;
}

.content2 .strong {
  font-size: larger;
  text-transform: uppercase;
}

.praktik {
  margin: 0px;
  padding: 0px;
  display: flex;
  /* background-color: red; */
  font-size: smaller;
}

.pengacara {
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  width: 350px;
  height: fit-content;
}

.pengacara .profile {
  column-gap: 20px;
  display: flex;
}

.pengacara .profile .img {
  height: 200px;
  width: 150px;
  background-size: cover;
  background-position: center;
  margin: 0 auto 10px auto;
}

.pengacara .profile .detailsProfile {
  font-size: 17px;
}

.review {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: baseline;
}

.review p {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.659);
}

.pengacara .profile .detailsProfile .rating {
  margin-top: -10px;
  margin-bottom: -20px;
  display: flex;
  flex-direction: row;
  column-gap: 4px;
  align-items: center;
  font-size: 12px;
  width: fit-content;
}

.pengacara .profile .detailsProfile .rating p {
  color: rgba(0, 0, 0, 0.659);
}
</style>
