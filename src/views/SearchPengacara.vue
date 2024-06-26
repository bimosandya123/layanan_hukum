<template>
    <Search />
    <div class="searchPengacara">
        <div class="section1">
            <h1>SURABAYA, PENGACARA DI BIDANG KEBANGKRUTAN</h1>
            <p>544 pengacara yang berspesialisasi dalam Kebangkrutan tersedia di wilayah Beverly Hills, CA.
                Bandingkan pengacara Kebangkrutan terbaik di dekat Anda dan buat keputusan berdasarkan 1479+ ulasan dan
                profil pengacara terperinci.</p>
        </div>
        <div class="section2">
            <div v-for="Pengacara in Pengacara" :key="Pengacara.id">
                <router-link class="card" :to="{ name: 'ProfilePengacara', params: { id: Pengacara.id } }">
                    <div class="foto" :style="{ backgroundImage: `url(${Pengacara.foto})` }"></div>
                    <div class="profile">
                        <h3>{{ Pengacara.nama }}</h3>
                        <p>pengacara di {{ Pengacara.firma }}</p>
                        <p class="opacity">{{ Pengacara.alamat }} {{ Pengacara.lokasi }}</p>
                        <div class="review">
                            <div class="stars">
                                <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                                <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                                <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                                <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                                <font-awesome-icon icon="fa-solid fa-star" style="color: #FF7A00;" />
                                <p class="opacity">({{ Pengacara.review }} Reviews)</p>
                            </div>
                            Rating
                            <strong> {{ Pengacara.rating }} </strong>
                        </div>
                        <p>Bidang Praktik</p>
                        <p class="bidang opacity">{{ Pengacara.bidangPraktik.join(', ') }}</p>
                    </div>
                    <div class="lisensi">
                        <p>Lisensi</p>
                        <p class="opacity">Alumni {{ Pengacara.pendidikan[0] }} {{ Pengacara.univesitas[0] }}</p>
                        <p>Cost</p>
                        <p class="opacity">Free Konsultasi <strong> 30 Menit</strong></p>
                        <div class="button">
                            <a :href="'https://wa.me/' + Pengacara.number" target="_blank">
                                <div class="link">
                                    <font-awesome-icon icon="phone-volume"
                                        style="--fa-primary-opacity: 0.4; --fa-secondary-opacity: 1;" />
                                    <strong class="active">{{ Pengacara.number }}</strong>
                                </div>
                            </a>
                            <a>
                                <div class="link">
                                    <font-awesome-icon icon="envelope"
                                        style="--fa-primary-color: #213454; --fa-secondary-color: #213454;" />
                                    <strong class="active"> Message</strong>
                                </div>
                            </a>
                            <a :href="Pengacara.link" target="_blank">
                                <div class="link">
                                    <font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />
                                    <strong class="active"> Link</strong>
                                </div>
                            </a>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <router-view />
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
    components: { Futer, Search },
    data() {
        return {
            Pengacara: [
                { id: 1, nama: 'Stephanie William', tarif: 275, pendidikan: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], univesitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.5, review: 231, lokasi: 'Surabaya', alamat: 'Jl. Hartono Block A-3', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto1 },
                { id: 2, nama: 'Robert Pattinson', tarif: 275, pendidikan: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], univesitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.0, review: 12, lokasi: 'Jakarta', alamat: 'Jl. Mastrip Block A-3', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto2 },
                { id: 3, nama: 'Angela Jolie', tarif: 275, pendidikan: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], univesitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 4.6, review: 31, lokasi: 'Surakarta', alamat: 'Jl. Kamboja Block A-3', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto3 },
                { id: 4, nama: 'Mark Ruffalo', tarif: 275, pendidikan: ['S1 Hukum', 'S2 Hukum', 'S3 Hukum'], univesitas: ['Universitas Ciputra', 'Universitas indonesia', 'ITB'], number: '12345678', firma: 'Alexandria', link: 'https://www.youtube.com/watch?v=tgTUtfb0Ok8', rating: 3.7, review: 45, lokasi: 'Jogja', alamat: 'Jl. Pattimura Block A-3', bidangPraktik: ["bisnis", "pembela kriminal", "Kebangkrutan"], foto: foto4 }
            ]
        }
    },
    methods: {
        cari() {
            console.log("mencari")
        }
    },
    bidangPraktikText() {
        return Pengacara.bidangPraktik.join(', ');

    },
}
</script>

<style scoped>
.searchPengacara {
    position: relative;
    margin: 0px;
    padding: 80px;
}

.section1 {
    margin: 100px 0px;
    margin-bottom: 50px;
    width: 100%;
}

.section2 {
    width: 100%;
}

.section2 .card {
    margin: 20px 0px;
    padding: 20px;
    background-color: white;
    display: flex;
    column-gap: 50px;
    border-radius: 20px;
    align-items: center;

}

.section2 .card .foto {
    height: 200px;
    width: 150px;
    background-size: cover;
    background-position: center;
}


.section2 .card .profile .bidang {
    font-size: 16px;
}

.section2 .card .profile .review {
    display: flex;
    padding: 0px;
    margin: 0px;
    align-items: baseline;
}

.section2 .card .profile .review .stars {
    display: flex;
    align-items: baseline;
    margin-right: 50px;
}

.section2 .card .profile .review p {
    margin-left: 10px;
    font-size: 12px;
}

.section2 .card .profile h1~p {
    padding: 0px;
    margin: 0px;
    /* background-color: red; */
}

.section2 .card .lisensi .button {
    display: flex;
    column-gap: 40px;
}
</style>