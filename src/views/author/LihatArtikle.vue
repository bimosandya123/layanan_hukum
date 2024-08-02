<template>
  <div class="LihatArtikle">
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
    <section class="mt-20 px-48 flex gap-4 flex-col">
        <h1 class="text-4xl font-serif uppercase font-medium">{{selectedArtikle.judul}}</h1>
        <div class="flex flex-wrap gap-2">
              <span
                v-for="(tag, index) in selectedArtikle.tag"
                :key="index"
                class="bg-blue-100 px-2 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>
        <div class="mt-6">
            <p class="font-serif text-justify leading-6">{{ selectedArtikle.content }}</p>
        </div>
    </section>
  </div>
</template>

<script>
import Futer from "../../components/Futer.vue";
import foto1 from "@/assets/images/foto1.jpg";
import foto2 from "@/assets/images/foto2.jpg";
import foto3 from "@/assets/images/foto3.jpg";
import foto4 from "@/assets/images/foto4.jpg";

export default {
  components: { Futer },
  props: ['id'],
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
      ],
      artikle: [
        {
          id: 1,
          nama: "Bimo Sandya Prima Sakti",
          judul: "budidaya ikan",
          kategori: "KKN",
          status: "launched",
          teaser:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum mauris, varius pharetra lectus ac, aliquam rutrum eros. Pellentesque malesuada, ligula porta laoreet sagittis, nisi lacus varius ipsum, eu semper mauris dolor eget eros. Suspendisse iaculis imperdiet tincidunt. Donec ultricies tincidunt dolor ut mattis. Quisque ut enim ex. Cras consectetur velit non augue semper porttitor. Nam consectetur iaculis interdum. Phasellus augue eros, molestie quis laoreet sed, sodales ac mi.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum mauris, varius pharetra lectus ac, aliquam rutrum eros. Pellentesque malesuada, ligula porta laoreet sagittis, nisi lacus varius ipsum, eu semper mauris dolor eget eros. Suspendisse iaculis imperdiet tincidunt. Donec ultricies tincidunt dolor ut mattis. Quisque ut enim ex. Cras consectetur velit non augue semper porttitor. Nam consectetur iaculis interdum. Phasellus augue eros, molestie quis laoreet sed, sodales ac mi. Nunc in pulvinar lectus. Aenean quis nibh ornare, consequat nibh sit amet, finibus diam. Maecenas rhoncus accumsan odio. Donec massa tortor, condimentum vitae est nec, facilisis luctus leo. Ut tincidunt, nunc at laoreet porttitor, erat dolor ultrices purus, at pellentesque ligula libero non leo. Donec id vulputate purus. Nam accumsan pellentesque pharetra. Aliquam erat volutpat. Nunc feugiat mauris risus, eget aliquet ex hendrerit vel. Aenean lacinia purus et nunc fringilla porta. Donec a nisi tellus. Duis at ipsum erat. Donec ornare eleifend iaculis. Curabitur sollicitudin erat vel enim iaculis fermentum. Nulla lacinia nisi non risus pretium, eu malesuada tortor venenatis. Duis aliquet sem justo, vitae laoreet dolor rhoncus quis. Aenean et enim tempor, condimentum mi in, consectetur nisl. Cras et urna sed nunc convallis pulvinar. Cras dapibus convallis tellus quis euismod. Nam lacinia mollis arcu, et pretium mi dapibus non. Duis malesuada sed felis ut tempus. Mauris in tempor odio, ac gravida ligula. Nam aliquam, nisi nec pharetra pharetra, dui odio vulputate felis, vitae interdum mauris dui id nisl. Nulla sed nisi suscipit, consequat tortor sed, elementum risus. Donec venenatis, lacus a tempus ullamcorper, purus mi euismod libero, nec tempus tortor metus at orci. Mauris ac tellus interdum, ultrices leo in, ullamcorper libero. In magna purus, aliquam at ante aliquam, ultricies posuere mi. Sed molestie cursus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ut eros felis. In orci elit, efficitur quis tincidunt non, commodo eu enim. Phasellus efficitur vitae nisi eget congue. Mauris porta eu velit et sagittis. Phasellus in felis mattis augue pretium suscipit ac sed urna. Donec euismod faucibus mauris, eget vestibulum odio aliquam non. Phasellus sollicitudin massa in vulputate fringilla. Cras sed justo molestie, aliquet enim sed, luctus elit. Sed lacus odio, tempor a tempus vitae, aliquet ac ligula. Ut pellentesque et justo sit amet viverra. Quisque efficitur venenatis sapien efficitur tristique. Quisque ut leo auctor, venenatis ligula vel, luctus tellus. Aliquam erat volutpat. Integer dignissim gravida tellus, sit amet dapibus orci placerat quis. Etiam sit amet dictum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus faucibus massa nec augue hendrerit aliquet. Maecenas eget sapien mauris. Nunc mattis faucibus consectetur. Fusce blandit turpis id sem facilisis, id suscipit sapien faucibus. Suspendisse at nisl id sapien tincidunt tempor luctus sed ante. Aliquam sed arcu ac ex lobortis venenatis vitae id justo.",
          tag: ["jajan", "coding", "programer"],
          date: "02/02/2024",
        },
        {
          id: 2,
          nama: "Bimo Sandya Prima Sakti",
          judul: "Drone untuk pemadam kebakaran",
          kategori: "Tech",
          status: "draft",
          teaser:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum mauris, varius pharetra lectus ac, aliquam rutrum eros. Pellentesque malesuada, ligula porta laoreet sagittis, nisi lacus varius ipsum, eu semper mauris dolor eget eros. Suspendisse iaculis imperdiet tincidunt. Donec ultricies tincidunt dolor ut mattis. Quisque ut enim ex. Cras consectetur velit non augue semper porttitor. Nam consectetur iaculis interdum. Phasellus augue eros, molestie quis laoreet sed, sodales ac mi.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum mauris, varius pharetra lectus ac, aliquam rutrum eros. Pellentesque malesuada, ligula porta laoreet sagittis, nisi lacus varius ipsum, eu semper mauris dolor eget eros. Suspendisse iaculis imperdiet tincidunt. Donec ultricies tincidunt dolor ut mattis. Quisque ut enim ex. Cras consectetur velit non augue semper porttitor. Nam consectetur iaculis interdum. Phasellus augue eros, molestie quis laoreet sed, sodales ac mi. Nunc in pulvinar lectus. Aenean quis nibh ornare, consequat nibh sit amet, finibus diam. Maecenas rhoncus accumsan odio. Donec massa tortor, condimentum vitae est nec, facilisis luctus leo. Ut tincidunt, nunc at laoreet porttitor, erat dolor ultrices purus, at pellentesque ligula libero non leo. Donec id vulputate purus. Nam accumsan pellentesque pharetra. Aliquam erat volutpat. Nunc feugiat mauris risus, eget aliquet ex hendrerit vel. Aenean lacinia purus et nunc fringilla porta. Donec a nisi tellus. Duis at ipsum erat. Donec ornare eleifend iaculis. Curabitur sollicitudin erat vel enim iaculis fermentum. Nulla lacinia nisi non risus pretium, eu malesuada tortor venenatis. Duis aliquet sem justo, vitae laoreet dolor rhoncus quis. Aenean et enim tempor, condimentum mi in, consectetur nisl. Cras et urna sed nunc convallis pulvinar. Cras dapibus convallis tellus quis euismod. Nam lacinia mollis arcu, et pretium mi dapibus non. Duis malesuada sed felis ut tempus. Mauris in tempor odio, ac gravida ligula. Nam aliquam, nisi nec pharetra pharetra, dui odio vulputate felis, vitae interdum mauris dui id nisl. Nulla sed nisi suscipit, consequat tortor sed, elementum risus. Donec venenatis, lacus a tempus ullamcorper, purus mi euismod libero, nec tempus tortor metus at orci. Mauris ac tellus interdum, ultrices leo in, ullamcorper libero. In magna purus, aliquam at ante aliquam, ultricies posuere mi. Sed molestie cursus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ut eros felis. In orci elit, efficitur quis tincidunt non, commodo eu enim. Phasellus efficitur vitae nisi eget congue. Mauris porta eu velit et sagittis. Phasellus in felis mattis augue pretium suscipit ac sed urna. Donec euismod faucibus mauris, eget vestibulum odio aliquam non. Phasellus sollicitudin massa in vulputate fringilla. Cras sed justo molestie, aliquet enim sed, luctus elit. Sed lacus odio, tempor a tempus vitae, aliquet ac ligula. Ut pellentesque et justo sit amet viverra. Quisque efficitur venenatis sapien efficitur tristique. Quisque ut leo auctor, venenatis ligula vel, luctus tellus. Aliquam erat volutpat. Integer dignissim gravida tellus, sit amet dapibus orci placerat quis. Etiam sit amet dictum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus faucibus massa nec augue hendrerit aliquet. Maecenas eget sapien mauris. Nunc mattis faucibus consectetur. Fusce blandit turpis id sem facilisis, id suscipit sapien faucibus. Suspendisse at nisl id sapien tincidunt tempor luctus sed ante. Aliquam sed arcu ac ex lobortis venenatis vitae id justo.",
          tag: ["jajan", "coding", "programer"],
          date: "02/02/2024",
        },
        {
          id: 3,
          nama: "Bimo Sandya Prima Sakti",
          judul: "Deteksi masker menggunakan alghoritma KNN",
          kategori: "Tech",
          status: "checking",
          teaser:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum mauris, varius pharetra lectus ac, aliquam rutrum eros. Pellentesque malesuada, ligula porta laoreet sagittis, nisi lacus varius ipsum, eu semper mauris dolor eget eros. Suspendisse iaculis imperdiet tincidunt. Donec ultricies tincidunt dolor ut mattis. Quisque ut enim ex. Cras consectetur velit non augue semper porttitor. Nam consectetur iaculis interdum. Phasellus augue eros, molestie quis laoreet sed, sodales ac mi.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum mauris, varius pharetra lectus ac, aliquam rutrum eros. Pellentesque malesuada, ligula porta laoreet sagittis, nisi lacus varius ipsum, eu semper mauris dolor eget eros. Suspendisse iaculis imperdiet tincidunt. Donec ultricies tincidunt dolor ut mattis. Quisque ut enim ex. Cras consectetur velit non augue semper porttitor. Nam consectetur iaculis interdum. Phasellus augue eros, molestie quis laoreet sed, sodales ac mi. Nunc in pulvinar lectus. Aenean quis nibh ornare, consequat nibh sit amet, finibus diam. Maecenas rhoncus accumsan odio. Donec massa tortor, condimentum vitae est nec, facilisis luctus leo. Ut tincidunt, nunc at laoreet porttitor, erat dolor ultrices purus, at pellentesque ligula libero non leo. Donec id vulputate purus. Nam accumsan pellentesque pharetra. Aliquam erat volutpat. Nunc feugiat mauris risus, eget aliquet ex hendrerit vel. Aenean lacinia purus et nunc fringilla porta. Donec a nisi tellus. Duis at ipsum erat. Donec ornare eleifend iaculis. Curabitur sollicitudin erat vel enim iaculis fermentum. Nulla lacinia nisi non risus pretium, eu malesuada tortor venenatis. Duis aliquet sem justo, vitae laoreet dolor rhoncus quis. Aenean et enim tempor, condimentum mi in, consectetur nisl. Cras et urna sed nunc convallis pulvinar. Cras dapibus convallis tellus quis euismod. Nam lacinia mollis arcu, et pretium mi dapibus non. Duis malesuada sed felis ut tempus. Mauris in tempor odio, ac gravida ligula. Nam aliquam, nisi nec pharetra pharetra, dui odio vulputate felis, vitae interdum mauris dui id nisl. Nulla sed nisi suscipit, consequat tortor sed, elementum risus. Donec venenatis, lacus a tempus ullamcorper, purus mi euismod libero, nec tempus tortor metus at orci. Mauris ac tellus interdum, ultrices leo in, ullamcorper libero. In magna purus, aliquam at ante aliquam, ultricies posuere mi. Sed molestie cursus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ut eros felis. In orci elit, efficitur quis tincidunt non, commodo eu enim. Phasellus efficitur vitae nisi eget congue. Mauris porta eu velit et sagittis. Phasellus in felis mattis augue pretium suscipit ac sed urna. Donec euismod faucibus mauris, eget vestibulum odio aliquam non. Phasellus sollicitudin massa in vulputate fringilla. Cras sed justo molestie, aliquet enim sed, luctus elit. Sed lacus odio, tempor a tempus vitae, aliquet ac ligula. Ut pellentesque et justo sit amet viverra. Quisque efficitur venenatis sapien efficitur tristique. Quisque ut leo auctor, venenatis ligula vel, luctus tellus. Aliquam erat volutpat. Integer dignissim gravida tellus, sit amet dapibus orci placerat quis. Etiam sit amet dictum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus faucibus massa nec augue hendrerit aliquet. Maecenas eget sapien mauris. Nunc mattis faucibus consectetur. Fusce blandit turpis id sem facilisis, id suscipit sapien faucibus. Suspendisse at nisl id sapien tincidunt tempor luctus sed ante. Aliquam sed arcu ac ex lobortis venenatis vitae id justo.",
          tag: ["jajan", "coding", "programer"],
          date: "02/02/2024",
        },
      ],
    };
  },
  computed: {
        PropsId() {
            return this.$route.params.id || this.id;
        },
        selectedArtikle() {
            return this.artikle.find(artikle => artikle.id === parseInt(this.PropsId));
        },
        tags(id) {
        return this.artikle[id].tag.join(", ");
        },
  },
  methods: {
    statusClass(status) {
      if (status === "launched") {
        return "bg-green-300";
      } else if (status === "checking") {
        return "bg-yellow-300";
      } else {
        return "bg-red-300";
      }
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.LihatArtikle {
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