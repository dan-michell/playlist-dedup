<script setup lang="ts">
import { onMounted } from 'vue'
import Spotify from '@/api/spotify'
import { SpotifyAuthStatus } from '@/enums'

const spotify = new Spotify()

onMounted(async () => {
    const status: SpotifyAuthStatus = await spotify.setToken()

    if (status === SpotifyAuthStatus.AccessDeniedCode) {
        window.location.href = '/'
    }

    // TODO: Pull users Spotify overview data.
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
