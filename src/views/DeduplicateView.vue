<script setup lang="ts">
import { onMounted } from 'vue'
import { SpotifyAuthStatus } from '@/enums'
import { useSpotifyAuthStore } from '@/stores/spotifyAuthStore'

const spotifyAuthStore = useSpotifyAuthStore()

onMounted(async () => {
    const status: SpotifyAuthStatus = await spotifyAuthStore.setToken()

    if (status === SpotifyAuthStatus.AccessDenied) {
        window.location.href = '/'
    }

    // TODO: Pull users Spotify overview data.
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
