<template>
  <div class="order">
    <h1>Isi Bio Data</h1>
    <div class="content">
      <div class="input">
        <div class="nama displayInput">
          <label for="nama">Nama Panjang</label><br />
          <input id="nama" name="nama" placeholder="Nama Panjang" />
        </div>
        <div class="provinsi displayInput">
          <label for="provinsi">provinsi</label><br />
          <input id="provinsi" name="provinsi" placeholder="provinsi" />
        </div>
        <div class="alamat displayInput">
          <label for="alamat">Alamat</label><br />
          <input id="alamat" name="alamat" placeholder="Alamat" />
        </div>
        <div class="kode_pos displayInput">
          <label for="kode_pos">Kode Pos</label><br />
          <input id="kode_pos" name="kode_pos" placeholder="kode pos" />
        </div>
        <div class="tanggalLahir displayInput">
          <label for="tanggalLahir">Tanggal Lahir</label><br />
          <input
            id="tanggalLahir"
            type="date"
            name="tanggalLahir"
            placeholder=""
          />
        </div>
        <div class="kota displayInput">
          <label for="kota">Kota / Kabupaten</label><br />
          <input id="kota" name="kota" placeholder="Kota" />
        </div>
      </div>
      <div class="jenisLayanan">
        <h3>Pilih Jenis Layanan</h3>
        <label for="Bidang">Bidang Praktek</label><br />
        <select name="Bidang" class="displayInput" id="Bidang">
          <option value="volvo">Pilih Bidang</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <label for="Layanan">Bidang Praktek</label><br />
        <select name="Layanan" class="displayInput" id="Layanan">
          <option value="volvo">Pilih Layanan</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div class="selanjutnya">
          <div class="button-19">SELANJUTNYA</div>
        </div>
      </div>
    </div>
    <div class="pesan">
      <h3>Tuliskan Pesan kepada Pengacara</h3>
      <textarea name="pesan" id="pesan" cols="100" rows="10"></textarea>
    </div>
  </div>
  <Futer />
</template>

<script>
import Search from "../components/Search.vue";
import Futer from "../components/Futer.vue";
import foto1 from '@/assets/images/foto1.jpg';
import foto2 from '@/assets/images/foto2.jpg';
import foto3 from '@/assets/images/foto3.jpg';
import foto4 from '@/assets/images/foto4.jpg';

export default {
  props: ["id"],
  components: { Futer, Search },
  data() {
        return {
            PropsId: this.$route.params.id,
            pengacara: [
                { id: 1, nama: 'Stephanie William', tingkat: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], universitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], tahun: ['2018', '2020', '2021'], tarif: 275000, number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.5, review: 231, lokasi: 'Surabaya', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto1 },
                { id: 2, nama: 'Robert Pattinson', tingkat: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], universitas: ['Universitas Brawijaya', 'Universitas Veteran', 'ITS'], tahun: ['2018', '2020', '2021'], tarif: 275000, number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.0, review: 12, lokasi: 'Jakarta', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto2 },
                { id: 3, nama: 'Angela Jolie', tingkat: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], universitas: ['Universitas Ciputra', 'Universitas Jember', 'Universitas 17 Agustus 1945'], tahun: ['2018', '2020', '2021'], tarif: 275000, number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.6, review: 31, lokasi: 'Surakarta', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto3 },
                { id: 4, nama: 'Mark Ruffalo', tingkat: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], universitas: ['Universitas Surabaya', 'Universitas indonesia', 'Universitas Banyuwangi'], tahun: ['2018', '2020', '2021'], tarif: 275000, number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 3.7, review: 45, lokasi: 'Jogja', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto4 }
            ],
            Review: [
                { id: 1, nama: 'adesanya', rating: 4.5, foto: foto1, coment: "porro ullam vitae. Voluptatem laudantium suscipit, facilis ipsa aperiam dolorum delectus est iste" },
                { id: 2, nama: 'khabib nurmagomedov', rating: 4.0, foto: foto2, coment: "porro ullam vitae. Voluptatem laudantium suscipit, facilis ipsa aperiam dolorum delectus est iste" },
                { id: 3, nama: 'alex pereira', rating: 4.6, foto: foto3, coment: "porro ullam vitae. Voluptatem laudantium suscipit, facilis ipsa aperiam dolorum delectus est iste" },
                { id: 4, nama: 'khamzat', rating: 3.7, foto: foto4, coment: "porro ullam vitae. Voluptatem laudantium suscipit, facilis ipsa aperiam dolorum delectus est iste" }
            ],
        }
    },
  computed: {
    PropsId() {
      return this.$route.params.id || this.id;
    },
  },
};
</script>

<style scoped>
.order {
  height: fit-content;
  padding: 120px 100px;
}
.order .content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input {
  width: 60%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  column-gap: 40px;
  row-gap: 30px;
}
.displayInput {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.nama {
  grid-area: 1 / 1 / 1 / 1;
}
.provinsi {
  grid-area: 2 / 1 / 2 / 1;
}
.alamat {
  grid-area: 3 / 1 / 3 / 1;
}
.kode_pos {
  grid-area: 4 / 1 / 4 / 1;
}
.tanggalLahir {
  grid-area: 1 / 2 / 1 / 2;
}
.kota {
  grid-area: 2 / 2 / 2 / 2;
}
input {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid #1312129b;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 15px;
}

.jenisLayanan {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--secondary);
  height: fit-content;
  padding: 20px;
  width: 25%;
  border-radius: 20px;
  box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.5);
}
.jenisLayanan select {
  height: 25px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid #1312129b;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 15px;
}
.selanjutnya {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
textarea{
  width: 70%;
}

</style>