<script setup lang="ts">
import { onMounted, onBeforeMount } from 'vue'
import Spotify from '@/api/spotify'

const spotify = new Spotify()

// onMounted(() => {
//     if (!spotify.access_token_set) {
//         window.location.href = '/'
//     }
// })

onBeforeMount(async () => {
    await spotify.setToken()
    // TODO: Pull users Spotify overview data.
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
