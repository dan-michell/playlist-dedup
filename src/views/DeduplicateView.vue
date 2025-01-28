<script setup lang="ts">
import { onMounted } from 'vue'
import { SpotifyAuthStatus } from '@/enums'
import { useSpotifyAuthStore } from '@/stores/spotifyAuthStore'
import { getUserUrl } from '@/api/spotify'

const spotifyAuthStore = useSpotifyAuthStore()

onMounted(async () => {
    const status: SpotifyAuthStatus = await spotifyAuthStore.setToken()

    if (status === SpotifyAuthStatus.AccessDenied) {
        window.location.href = '/'
    }

    const token = window.localStorage.getItem('access_token')

    if (token) {
        await getUserUrl(token)
    }
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
