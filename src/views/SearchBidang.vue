<template>
    <Search />
    <div class="SearchSection">
        <div class="section1">
            <h1>CARI PENGACARA DI BIDANG KEBANGKRUTAN</h1>
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
        <div class="section2">
            <h3>Bidang hukum yang terkait:</h3>
            <ul class="bidang">
                <li class="items">kebangkrutan</li>
                <li class="items">utang piutang</li>
                <li class="items">penagihan hutang</li>
                <li class="items">Lapangan kerja dan tenaga kerja</li>
                <li class="items">hukum penatua</li>
                <li class="items">Bisnis</li>
            </ul>
        </div>
        <div class="section3">
            <div class="item">
                <h3>Apa yang bisa dilakukan pengacara Kebangkrutan untuk Anda</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi iusto veritatis asperiores odit
                    mollitia, aspernatur eum consequuntur possimus neque ab animi dolorem aliquid, facilis doloremque
                    dignissimos. A perspiciatis voluptas sequi?</p>
            </div>
            <div class="item">
                <h3>Mengapa menyewa pengacara Kebangkrutan dan utang</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi iusto veritatis asperiores odit
                    mollitia, aspernatur eum consequuntur possimus neque ab animi dolorem aliquid, facilis doloremque
                    dignissimos. A perspiciatis voluptas sequi?</p>
            </div>
        </div>
        <Futer />
    </div>

</template>

<script>
import Search from '../components/Search.vue';
import Futer from '../components/Futer.vue';
export default {
    components: { Futer, Search },
    methods: {
        cari() {
            console.log("mencari")
        }
    },
}
</script>
<style scoped>
.SearchSection {
    margin: 0px;
    padding: 0px;
}

.section1 {
    height: 300px;
    /* padding-top: 750px; */
    padding: 175px 100px 100px 100px;
}

h1 {
    width: 700px;
}

.input-container {
    background-color: #aaa;
    width: fit-content;
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
    background-color: var(--secondary);
    padding: 100px 100px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-bottom: 200px;
}

.section2 .bidang {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}

.section2 .bidang .items {
    padding: 5px;
    min-width: 250px;
    color: var(--active);
    margin: 10px 10px;
}

/* ========================== SECTION 2 ========================== */
.section3 {
    background-color: var(--secondary);
    padding: 0px 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
}

.section3 .item {
    margin-top: 100px;
    max-width: 1000px;
}
</style>