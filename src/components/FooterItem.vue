<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div
        class="h-[4vh] w-[80%] sm:w-[60%] mt-auto pt-5 border-t-2 flex items-center justify-around text-sm text-muted-foreground"
    >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <a href="https://github.com/dan-michell/playlist-dedup" target="_blank">GitHub</a>
    </div>
</template>
