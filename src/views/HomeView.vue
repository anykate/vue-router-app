<script setup>
import carsData from '@/assets/data.json'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const cars = ref(carsData)
const router = useRouter()
</script>

<template>
    <main class="container">
        <h1>Our Cars</h1>
        <div class="cards">
            <div
                v-for="car in cars"
                :key="car.id"
                class="card"
                @click="router.push({ name: 'Car', params: { id: car.id } })"
            >
                <h2>{{ car.make }}</h2>
                <p>{{ car.price }}</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
.cards {
    display: flex;
    width: 1000px;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: center;
}

.card {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
    padding: 15px;
    width: 150px;
    margin-right: 15px;
    cursor: pointer;
    margin-bottom: 20px;
}

.links {
    padding: 20px;
}

.links a {
    margin: 0 5px;
}
</style>
