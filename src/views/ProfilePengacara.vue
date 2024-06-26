<template>
    <Search />
    <div class="ProfilePengacara" v-if="selectedPengacara">
        <section class="section1">
            <div class="img" :style="{ backgroundImage: `url(${selectedPengacara.foto})` }">
            </div>
            <div class="profile">
                <h1>{{ selectedPengacara.nama }}</h1>
                <p>pengacara di {{ selectedPengacara.firma }}, {{ selectedPengacara.lokasi }}</p>
                <div class="review">
                    <div class="stars">
                        <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                        <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                        <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                        <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                        <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                        <p class="opacity">({{ selectedPengacara.review }} Reviews)</p>
                    </div>
                    Rating
                    <p class="opacity"> {{ selectedPengacara.rating }} </p>
                </div>
                <p>Bidang Praktik</p>
                <p class="bidang opacity">{{ bidangPraktikText }}</p>
            </div>
            <div class="button">
                <a :href="'https://wa.me/' + selectedPengacara.number" target="_blank">
                    <div class="link">
                        <font-awesome-icon icon="phone-volume"
                            style="--fa-primary-opacity: 0.4; --fa-secondary-opacity: 1;" />
                        <strong class="active">{{ selectedPengacara.number }}</strong>
                    </div>
                </a>
                <router-link>
                    <div class="link">
                        <font-awesome-icon icon="envelope"
                            style="--fa-primary-color: #213454; --fa-secondary-color: #213454;" />
                        <strong class="active"> Message</strong>
                    </div>
                </router-link>
                <a :href="selectedPengacara.link" target="_blank">
                    <div class="link">
                        <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
                        <strong class="active"> Link</strong>
                    </div>
                </a>
            </div>
        </section>
        <section class="order">
            <div class="container">
                <h4> Berlisensi Selama 15 Tahun</h4>
                <div class="line"></div>
                <div class="content">
                    <div class="lokasi"><font-awesome-icon icon="fa-solid fa-location-dot" /> Lokasi</div>
                    <div class="case"><font-awesome-icon icon="briefcase" /> Diperoleh</div>
                    <p class="Surabaya">Surabaya</p>
                    <p class="tahun">2009</p>
                </div>

                <button class="button-19" role="button">order sekarang</button>
            </div>
        </section>
        <section class="section2">
            <div class="tentangSaya">
                <h1>tentangSaya</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique eveniet minus. Aperiam
                    aliquam dolorum aliquid vero sapiente nemo recusandae quia corrupti tempore ducimus! Quis rerum quae
                    error earum expedita!</p>
            </div>
            <div class="pembayaran">
                <h1>pembayaran</h1>
                <p class="tarif">tarif</p>
                <p class="tarifPerJam opacity">tarif Per Jam</p>
                <p class="harga opacity"> Rp. {{ selectedPengacara.tarif }} </p>
                <p class="metode">Metode Pembayaran</p>
                <p class="payment opacity">Cash, Check, Credit Card</p>
            </div>
            <div class="pengalaman">
                <div class="pengalamanKerja">
                    <h1>Pengalaman Kerja</h1>
                    <div class="content">
                        Pengacara Hukum
                        <p class="opacity">William Wood Law, LLC</p>
                        <p class="opacity">2019 - present</p>
                    </div>
                </div>
                <div class="pendidikan">
                    <h1>Pendidikan</h1>
                    <div class="content" v-for="(n, index) in selectedPengacara.universitas.length" :key="index">
                        {{ selectedPengacara.universitas[index] }}
                        <p class="opacity">{{ selectedPengacara.tingkat[index] }}</p>
                        <p class="opacity">{{ selectedPengacara.tahun[index] }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section3">
            <h1>Review</h1>
            <div class="komentar" v-for="Review in Review" :key="Review.id">
                <div class="foto" :style="{ backgroundImage: `url(${Review.foto})` }"></div>
                <strong class="nama">{{ Review.nama }}</strong>
                <div class="stars">
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                    Rating
                    <p class="opacity"> {{ Review.rating }} </p>
                </div>
                <p class="opacity tahun">1 year Ago</p>
                <p class="isi">{{ Review.coment }}</p>
            </div>
            <router-link>
                <p class="view" href="#">view all reviews ></p>
            </router-link>
        </section>
    </div>
    <div v-else>
        <p>Pengacara tidak ditemukan</p>

    </div>
    <Futer />
</template>

<script>
import Search from '../components/Search.vue';
import Futer from '../components/Futer.vue';
import foto1 from '@/assets/images/foto1.jpg';
import foto2 from '@/assets/images/foto2.jpg';
import foto3 from '@/assets/images/foto3.jpg';
import foto4 from '@/assets/images/foto4.jpg';
export default {
    props: ['id'],
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
        selectedPengacara() {
            return this.pengacara.find(pengacara => pengacara.id === parseInt(this.PropsId));
        },
        bidangPraktikText() {
            if (this.selectedPengacara) {
                return this.selectedPengacara.bidangPraktik.join(', ');
            }
            return '';
        },
    }
}
</script>

<style scoped>
.ProfilePengacara {
    position: relative;
    margin: 0px;
    padding: 80px;
}

.section1 {
    margin: 150px 0px;
    padding: 20px;
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-template-rows: 80px 80px;
    column-gap: 30px;
    row-gap: 15px;
    background-color: white;
    border-radius: 20px;
    width: 100%;
    height: 400px;
}

.img {
    grid-area: 1 / 1 / 4 / 3;
    background-size: cover;
    background-position: center;
}


.button {
    grid-area: 4 / 1 / 4 / 6;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-size: 20px;
}

.button .link {
    margin: 0px 20px;
    padding: 10px;
    border-radius: 13px;
    border-style: solid;
}

.button .link strong {
    margin-left: 5px;
}

.profile {
    grid-area: 1 / 3 / 3 / 6;
    flex-direction: column;
    justify-content: unsafe;
}

.profile .bidang {
    font-size: 16px;
}

.profile .review {
    display: flex;
    padding: 0px;
    margin: 0px;
    align-items: baseline;
}

.profile .review .stars {
    display: flex;
    align-items: baseline;
    margin-right: 50px;
}

.profile .review p {
    margin-left: 10px;
    font-size: 12px;
}

.profile h1~p {
    padding: 0px;
    margin: 0px;
    /* background-color: red; */
}

/* ========================== order ========================== */
.order {
    /* background-color: red; */
    padding-top: 120px;
    /* padding-bottom: -100px; */
    /* margin-bottom: 200px; */
    top: 0;
    position: sticky;
    z-index: 0;
    float: right;
}

.order .container {
    background-color: white;
    box-shadow: 5px 10px 15px rgba(52, 52, 52, 0.651);
    /* height: 100px; */
    justify-content: center;
    align-items: center;
    width: 300px;
    border-radius: 20px;
    border-style: solid;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    padding-bottom: 20px;

}

.order .container .content {
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    display: grid;
    column-gap: 20px;
}

.order .container .content .lokasi {
    grid-area: 1 / 1 / 1 / 1;
    /* background-color: red; */
    align-self: center;
}

.order .container .content .case {
    grid-area: 2 / 1 / 2 / 1;
    /* background-color: red; */
    align-self: center;
}

.order .container .content .tahun {
    grid-area: 2 / 2 / 2 / 2;
    /* background-color: red; */
}

.order .container .line {
    border-style: solid;
    border-width: 1px;
    width: 100%;
    border-color: rgba(0, 0, 0, 0.263);
}


/* ========================== SECTION 2 ========================== */
.section2 {
    margin: 150px 0px;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    width: 100%;
    height: fit-content;
}

.section2 div {
    width: 60%;
}

.section2 .pembayaran {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    column-gap: 10px;
    row-gap: 0px;
}

.section2 .pembayaran .tarif {

    grid-area: 2 / 1 / 2 / 1;
}

.section2 .pembayaran .tarifPerJam {
    grid-area: 3 / 1 / 3 / 1;
}

.section2 .pembayaran .harga {
    grid-area: 3 / 2 / 3 / 2;
}

.section2 .pembayaran .metode {
    grid-area: 2 / 3 / 2 / 3;
}

.section2 .pembayaran .payment {
    grid-area: 3 / 3 / 3 / 3;
}

.section2 .pengalaman {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}

.section2 .pengalaman .pendidikan {
    min-width: max-content;
    max-width: 250px;
    margin-right: 0px;
}

.section2 .pengalaman .pendidikan .content {
    width: 100%;
}

.section3 {
    margin: 150px 0px;
    margin-bottom: 50px;
    padding: 20px;
    width: 100%;
}

.section3 .komentar {
    padding: 50px;
    display: grid;
    grid-template-columns: 100px 50% auto;
    grid-template-rows: 10px 10px 20px auto;
    column-gap: 30px;
    row-gap: 10px;
}

.section3 .view {
    color: var(--active);
    text-align: center;
}

.section3 .komentar .foto {
    column-gap: 10px;
    grid-area: 1 / 1 / 1 / 1;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
}

.section3 .komentar .nama {
    grid-area: 1 / 2 / 1 / 2;
    /* background-color: red; */

}

.section3 .komentar .stars {
    /* background-color: red; */
    grid-area: 2 / 2 / 2 / 3;
    display: flex;
    align-items: baseline;
}

.section3 .komentar .tahun {
    grid-area: 3 / 2 / 3 / 2;
}

.section3 .komentar .isi {
    grid-area: 4 / 2 / 4 / 2;
}
</style>