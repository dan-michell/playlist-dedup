<script setup lang="ts">
import { onMounted } from 'vue'
import { SpotifyLoginController } from '@/api/spotify'
import { SpotifyAuthStatus } from '@/enums'

const spotifyLoginController = new SpotifyLoginController()

onMounted(async () => {
    const status: SpotifyAuthStatus = await spotifyLoginController.setToken()

    if (status === SpotifyAuthStatus.AccessDeniedCode) {
        window.location.href = '/'
    }

    // TODO: Pull users Spotify overview data.
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
