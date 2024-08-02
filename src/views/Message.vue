<template>
    <Search />
    <div class="Message">
        <div class="contact">
            <h1>Message</h1>
            <div class="scroll">
                <div class="card" v-for="pengacara in pengacara" :key="pengacara.id" v-on:click="select($event)">
                    <div class="img" :style="{ backgroundImage: `url(${pengacara.foto})` }"></div>
                    <div class="text">
                        <p>{{ pengacara.nama }}</p>
                        <p class="opacity">Lorem ipsum dolor sit amet, </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat" >
            <!-- <p>{{ selectedPengacara.id }}</p> -->
            <div class="popup"></div>
            <div class="img"></div>
        </div>
        <!-- <div class="chat" v-else>
            <div class="popup"> <strong>Mulai Lah Berbincang Dengan Pengacara Anda!</strong></div>
        </div> -->
    </div>
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
    }, methods: {
        select: function (event) {
            targetId = event.pengacara.id;
            console.log(targetId);
        }
    }, computed: {
        selectedPengacara() {
            return this.pengacara.find(pengacara => pengacara.id === parseInt(this.PropsId));
        }, PropsId() {
            return this.$route.params.id || this.id;
        },
    }
}
</script>

<style scoped>
.Message {
    height: 400px;
    margin-top: 0px;
    padding: 174px 40px 0px 40px;
    column-gap: 30px;
    display: flex;
    flex-direction: row;
}

.contact {
    height: 400px;
    width: 40%;
    margin: 0px;
}

.scroll {
    width: 100%;
    height: 318px;
    overflow: scroll;
    scrollbar-width: none;
}

.card {
    margin: 5px 0px;
    padding: 10px;
    display: flex;
    column-gap: 20px;
    align-items: center;
    background-color: var(--tertiary);
    border-radius: 16px;
    height: fit-content;
    width: 95%;
}

.img {
    height: 70px;
    width: 70px;
    border-radius: 100px;
    background-size: cover;
    background-position: center;
}

.chat {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: var(--secondary);
    width: 60%;
    height: 400px;
    margin: 0px;
}

.popup {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: fit-content;
}
</style>
