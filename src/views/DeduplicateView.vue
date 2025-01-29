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

    let userUrl = window.localStorage.getItem('user_url')

    if (!userUrl) {
        // What if I log out and log back in as different user? Maybe have button click to fetch user url and populate playlists etc?
        console.log('Ran')
        const token = window.localStorage.getItem('access_token')

        if (token) {
            userUrl = await getUserUrl(token)

            window.localStorage.setItem('user_url', userUrl)
        }
    }
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
