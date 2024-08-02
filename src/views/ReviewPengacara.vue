<template>
    <Search />
    <div class="ReviewPengacara" v-if="selectedPengacara">
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
                    <p class="opacity">Rating</p>
                    <strong> {{ selectedPengacara.rating }} </strong>
                </div>

            </div>
            <div class="bidang">
                <p>BIDANG PRAKTIK</p>
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
        <section class="section2">
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
        <section class="section3">
            <p class="header">BERIKAN REVIEW UNTUK PENGACARA</p>
            <p>Pilih Rating Pengacara Anda</p>
            <div class="stars">
                <font-awesome-icon @click="upHere1 = false" v-if="upHere1 || upHere2 || upHere3 || upHere4 || upHere5"
                    icon="fa-solid fa-star" style="color: #FF7A00;" />
                <font-awesome-icon @click="upHere1 = true" v-else icon="fa-regular fa-star" />
                <font-awesome-icon @click="upHere2" v-if="upHere2 || upHere3 || upHere4 || upHere5"
                    icon="fa-solid fa-star" style="color: #FF7A00;" />
                <font-awesome-icon @click="upHere2 = true" v-else icon="fa-regular fa-star" />
                <font-awesome-icon @click="upHere3" v-if="upHere3 || upHere4 || upHere5" icon="fa-solid fa-star"
                    style="color: #FF7A00;" />
                <font-awesome-icon @click="upHere3 = true" v-else icon="fa-regular fa-star" />
                <font-awesome-icon @click="upHere4" v-if="upHere4 || upHere5" icon="fa-solid fa-star"
                    style="color: #FF7A00;" />
                <font-awesome-icon @click="upHere4 = true" v-else icon="fa-regular fa-star" />
                <font-awesome-icon @click="upHere5" v-if="upHere5" icon="fa-solid fa-star" style="color: #FF7A00;" />
                <font-awesome-icon @click="upHere5 = true" v-else icon="fa-regular fa-star" />
            </div>
            <p>Tuliskan Judul</p>
            <input class="subject" v-model="subject" placeholder="..." />
            <p>Tuliskan Review anda</p>
            <textarea class="message" v-model="message" placeholder="masukkan review anda" />
            <button class="button-19" role="button">Submit</button>
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
            upHere1: false,
            upHere2: false,
            upHere3: false,
            upHere4: false,
            upHere5: false,
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
.ReviewPengacara {
    margin: 0px;
    padding-top: 10px;
}

.section1 {
    margin: 130px 0px 0px 0px;
    padding: 20px;
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-template-rows: 80px 80px;
    column-gap: 30px;
    row-gap: 15px;
    background-color: var(--tertiary);
    height: fit-content;
}

.img {
    margin: 0px 40px;
    grid-area: 1 / 1 / 3 / 3;
    background-size: cover;
    background-position: center;
}


.button {
    grid-area: 2 / 6 / 3 / 6;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-size: 20px;
}

.profile {
    display: flex;
    grid-area: 1 / 3 / 3 / 6;
    flex-direction: column;
    justify-content: space-around;
}

.bidang {
    font-size: 16px;
    grid-area: 1 / 6 / 2 / 6;
}

.button .link {
    background-color: var(--secondary);
    width: 150px;
    display: flex;
    justify-content: center;
    margin: 0px 20px;
    padding: 10px;
    border-radius: 13px;
    border-style: solid;
}

.button .link strong {
    margin-left: 5px;
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
    margin-right: 0px;
}

.profile .review p {
    margin: 0px 10px;
    font-size: 12px;
}

.profile h1~p {
    padding: 0px;
    margin: 0px;
    /* background-color: red; */
}

/*================ SECTION 2 ==================*/
.section2 {
    margin: 0px;
    padding: 100px;
}

.section2 .komentar {
    padding: 50px;
    display: grid;
    grid-template-columns: 100px 100% auto;
    grid-template-rows: 10px 10px 20px auto;
    column-gap: 30px;
    row-gap: 10px;
}

.section2 .view {
    color: var(--active);
    text-align: center;
}

.section2 .komentar .foto {
    column-gap: 10px;
    grid-area: 1 / 1 / 1 / 1;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
}

.section2 .komentar .nama {
    grid-area: 1 / 2 / 1 / 2;
    /* background-color: red; */

}

.section2 .komentar .stars {
    /* background-color: red; */
    grid-area: 2 / 2 / 2 / 3;
    display: flex;
    align-items: baseline;
}

.section2 .komentar .tahun {
    grid-area: 3 / 2 / 3 / 2;
}

.section2 .komentar .isi {
    grid-area: 4 / 2 / 4 / 2;
}
/*================ SECTION 3 ==================*/
.section3{
    margin: 0px;
    padding: 50px 300px;
    background-color: var(--tertiary);

}
textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
  }
</style>