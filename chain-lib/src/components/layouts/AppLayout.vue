<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>
<template>
  <Header />
  <main>
    <slot name="main" />
  </main>
  <Footer />
</template>
