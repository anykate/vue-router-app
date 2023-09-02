<template>
    <div class="links">
        <RouterLink
            to="/"
            active-class="active"
            >Home</RouterLink
        >
        <RouterLink
            to="/about"
            active-class="active"
            >About</RouterLink
        >
    </div>
    <RouterView />
</template>

<style scoped>
.links {
    height: 56px;
    display: flex;
    margin: 10px;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}
.active {
    color: green;
}
</style>
