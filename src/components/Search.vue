<template>
    <div class="topbar" :class="{hidden: hidden}">
        <div class="input-container">
            <div class="input-wrapper">
                <font-awesome-icon icon="fa-solid fa-search" />
                <input id="searchInput" class="input-field" type="text" placeholder="Masukkan bidang praktek atau nama pengacara">
            </div>
            <div class="input-wrapper lokasi">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                <input id="searchInput" class="input-field" type="text" placeholder="Lokasi">
            </div>
            <button class="cari" @click="cari">Cari</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lastScrollY: 0,
            hidden: false
        };
    },
    methods: {
        handleScroll() {
            if (window.scrollY > this.lastScrollY) {
                this.hidden = true;
            } else {
                this.hidden = false;
            }
            this.lastScrollY = window.scrollY;
        },
        cari() {
            console.log('fungsi cari')
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
.topbar {
    z-index: 1;
    margin-top:74px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--quaternary);
    transition: top 0.3s;
}

.topbar.hidden {
    top: -74px; /* Adjust according to the height of the topbar */
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
    width: 200px;
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
}

input::placeholder {
    color: #aaa;
}
</style>
