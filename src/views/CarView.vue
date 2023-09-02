<script setup>
import carsData from '@/assets/data.json'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

const car = ref(null)
const route = useRoute()
const { id } = route.params
onBeforeMount(() => {
    car.value = carsData.find((c) => c.id === parseInt(id))
})
</script>

<template>
    <div class="container">
        <h1>Car View</h1>
        <p>Make: {{ car.make }}</p>
        <p>Body: {{ car.body }}</p>
        <p>Price: {{ car.price }}</p>
        <p>Year: {{ car.year }}</p>
    </div>
</template>
