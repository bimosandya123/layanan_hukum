<template>
  <div class="artikle">
    <section class="section1">
      <div class="background"></div>
      <div class="text">
        <div
          class="img"
          :style="{ backgroundImage: `url(${author[1].foto})` }"
        ></div>
        <div class="profile">
          <p class="header">Bimo Sandya Prima Sakti</p>
          <p>mahasiswa</p>
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-5 section2 h-screen px-64 mt-10">
      <div class="flex flex-row align-center w-128 gap-20 ">
						<div class="w-10">
							<label class="dashboardLabel" for="title">Kategori</label>
						</div>
						<div class="w-full">
              <select name="kategori" placeholder="Tentukan judul di sini" class="displayInput" id="kategori">
                <option value="volvo">Pilih Layanan</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
						</div>
			</div>
      <div class="flex flex-row align-center w-128 gap-20 ">
						<div class="w-10">
							<label class="dashboardLabel" for="title">Judul</label>
						</div>
						<div class="w-full">
							<input type="text" placeholder="Tentukan judul di sini" class="w-full dashboardInput" maxlength="150" name="title" id="title" value="" onpaste="return false;">
						</div>
			</div>
      <!-- ======= RICH EDITOR ======== -->
      
      <!-- ======= TEASER / TAG ======== -->
      <div class="flex flex-row align-center w-128 gap-20 ">
						<div class="w-10">
							<label class="dashboardLabel" for="title">Teaser</label>
						</div>
						<div class="w-full">
							<input type="text" v-model="text" :id="id" :name="id" placeholder="Tuliskan Teaser Untuk Menarik Pembaca" class="w-full dashboardInput" maxlength="150" value="">
              <p class="text-xs float-right">{{charactersRemaining}}</p>
						</div>
			</div>
      <div class="flex flex-row align-center w-128 gap-20 ">
						<div class="w-10">
							<label class="Tags" for="title">Tags</label>
						</div>
						<TagsInput />
			</div>
      <router-link>
        <button class="border-slate-400 bg-white-300 shadow-md active:shadow-none active:translate-y-px border-2 w-fit px-5 rounded-lg mt-20">Tambah ke Draft</button>
      </router-link>
    </section>
    <!-- <RichEditor/> -->
  </div>
  <Futer />
</template>

<script>
import Futer from "../../components/Futer.vue";
import TagsInput from "../../components/TagsInput.vue";
import foto1 from "@/assets/images/foto1.jpg";
import foto2 from "@/assets/images/foto2.jpg";
import foto3 from "@/assets/images/foto3.jpg";
import foto4 from "@/assets/images/foto4.jpg";

export default {
  components: { Futer, TagsInput },
  props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    },
  data() {
    return {
      author: [
        {
          id: 1,
          nama: "Stephanie William",
          tingkat: ["S1 Hukum", "S2 Hukum", "S3 Hukum"],
          universitas: ["Universitas Ciputra", "Universitas indonesia", "ITB"],
          tahun: ["2018", "2020", "2021"],
          tarif: 275000,
          number: "12345678",
          firma: "Alexandria",
          link: "https://www.youtube.com/watch?v=tgTUtfb0Ok8",
          rating: 4.5,
          review: 231,
          lokasi: "Surabaya",
          bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"],
          foto: foto1,
        },
        {
          id: 2,
          nama: "Robert Pattinson",
          tingkat: ["S1 Hukum", "S2 Hukum", "S3 Hukum"],
          universitas: ["Universitas Brawijaya", "Universitas Veteran", "ITS"],
          tahun: ["2018", "2020", "2021"],
          tarif: 275000,
          number: "12345678",
          firma: "Alexandria",
          link: "https://www.youtube.com/watch?v=tgTUtfb0Ok8",
          rating: 4.0,
          review: 12,
          lokasi: "Jakarta",
          bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"],
          foto: foto2,
        },
        {
          id: 3,
          nama: "Angela Jolie",
          tingkat: ["S1 Hukum", "S2 Hukum", "S3 Hukum"],
          universitas: [
            "Universitas Ciputra",
            "Universitas Jember",
            "Universitas 17 Agustus 1945",
          ],
          tahun: ["2018", "2020", "2021"],
          tarif: 275000,
          number: "12345678",
          firma: "Alexandria",
          link: "https://www.youtube.com/watch?v=tgTUtfb0Ok8",
          rating: 4.6,
          review: 31,
          lokasi: "Surakarta",
          bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"],
          foto: foto3,
        },
        {
          id: 4,
          nama: "Mark Ruffalo",
          tingkat: ["S1 Hukum", "S2 Hukum", "S3 Hukum"],
          universitas: [
            "Universitas Surabaya",
            "Universitas indonesia",
            "Universitas Banyuwangi",
          ],
          tahun: ["2018", "2020", "2021"],
          tarif: 275000,
          number: "12345678",
          firma: "Alexandria",
          link: "https://www.youtube.com/watch?v=tgTUtfb0Ok8",
          rating: 3.7,
          review: 45,
          lokasi: "Jogja",
          bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"],
          foto: foto4,
        },
      ],text: '',
      maxCharacters: 150,
    };
  },computed: {
      charactersRemaining: function () {
        return this.maxCharacters - this.text.length;
      }
    }
};
</script>

<style scoped>
p {
  margin: 0;
}
.artikle {
  padding: 70px 0px;
}
.section1 {
  /* padding: 100px 0px; */
  height: 200px;
  /* margin: 100px 0px; */
  position: relative;
}
.background {
  /* padding: 100px 0px; */
  height: 100%;
  width: 100%;
  background-image: url("../../assets/images/lake.jpg");
  background-size: cover;
  filter: blur(2px);
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px -10px 40px 20px rgb(56, 56, 56) inset;
}
.img {
  height: 120px;
  width: 120px;
  /* margin-top: 0px; */
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}
.text {
  width: 60%;
  display: flex;
  align-items: center;
  column-gap: 100px;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: aliceblue;
}
</style>