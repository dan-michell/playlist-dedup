<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpotifyUserStore } from '@/stores/spotifyuserStore'
import { setToken, tokenSet } from '@/utils/functions/spotifyAuth'
import { storeToRefs } from 'pinia'
import { HttpStatusCode } from 'axios'

const spotifyUserStore = useSpotifyUserStore()
const { getUserId, getUserPlaylists } = spotifyUserStore
const { userPlaylists } = storeToRefs(spotifyUserStore)

onMounted(async () => {
    const status = await setToken()

    if (status !== HttpStatusCode.Ok || !tokenSet()) {
        window.location.href = '/'
    }

    await getUserId()
    await getUserPlaylists()
})
</script>

<template>
    <div class="w-full">Deduplicate</div>
</template>
