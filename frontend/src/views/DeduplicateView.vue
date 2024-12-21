<script setup lang="ts">
import { onMounted } from 'vue'
import Spotify from '@/api/spotify'

const spotify = new Spotify()

onMounted(() => {
    spotify.setToken()
    // TODO: Pull users Spotify overview data.
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
