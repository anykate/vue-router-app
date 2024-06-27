<script setup>
import carsData from '@/assets/data.json'
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const car = ref(null)
const route = useRoute()
const router = useRouter()
const { id } = route.params

onBeforeMount(() => {
    car.value = carsData.find((c) => c.id === parseInt(id))
})
</script>

<template>
    <div
        v-if="car"
        class="container"
    >
        <h1>Car View</h1>
        <p>Make: {{ car.make }}</p>
        <p>Body: {{ car.body }}</p>
        <p>Price: {{ car.price }}</p>
        <p>Year: {{ car.year }}</p>

        <button @click="router.push({ name: 'Home' })">Back to Home</button>

        <div class="links">
            <RouterLink
                :to="{ name: 'Manufacturer' }"
                active-class="active"
                >Manufacturer
            </RouterLink>
            <RouterLink
                :to="{ name: 'Dealer' }"
                active-class="active"
                >Dealer
            </RouterLink>
        </div>

        <RouterView />
    </div>

    <div v-else>
        {{ router.push({ name: 'NotFound' }) }}
    </div>
</template>

<style scoped>
button {
    margin: 1rem 0;
}
.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.active {
    color: green;
}
</style>
