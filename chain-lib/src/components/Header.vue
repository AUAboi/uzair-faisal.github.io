<script setup>
defineProps({
    user:{
        required: true,
        type: String
    }
})
</script>

<template>
    <header>
        <nav>
            <h1>{{ user }}</h1>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
h1 {
    color: red;
}
</style>