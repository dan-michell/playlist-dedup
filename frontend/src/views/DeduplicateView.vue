<script setup lang="ts">
import { onMounted } from 'vue'
import Spotify from '@/api/spotify'

const spotify = new Spotify()

onMounted(async () => {
    await spotify.setToken()

    if (!spotify.access_token_set) {
        window.location.href = '/'
    }

    // TODO: Pull users Spotify overview data.
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
