<script setup>
defineProps(["feature"])
</script>

<template>
    <div class="mid-everything" id="ic1">
        <div class="img-cont">
            <div class="icon-bg"></div>
            <div v-html="feature.svg"></div>
        </div>
        <h4>{{ feature.title }}</h4>
        <p>
            {{ feature.description }}
        </p>
    </div>
</template>