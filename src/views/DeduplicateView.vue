<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpotifyUserStore } from '@/stores/spotifyUserStore'
import { setToken, tokenSet } from '@/utils/functions/spotifyAuth'
import PlaylistCardItem from '@/components/PlaylistCardItem.vue'
import { storeToRefs } from 'pinia'
import { HttpStatusCode } from 'axios'

const spotifyUserStore = useSpotifyUserStore()
const { getUser, getUserPlaylistMetadata } = spotifyUserStore
const { userId, userPlaylists } = storeToRefs(spotifyUserStore)

onMounted(async () => {
    const status = await setToken()

    if (status !== HttpStatusCode.Ok || !tokenSet()) {
        window.location.href = '/'
    }

    try {
        const user = await getUser()
        userId.value = user.id
    } catch (e) {
        // Handle error
    }

    await getUserPlaylistMetadata()
})
</script>

<template>
    <div class="w-full">
        <div v-for="playlistMetadata in userPlaylists" :key="playlistMetadata.id">
            <playlist-card-item
                :imageHref="playlistMetadata.href"
                :playlistName="playlistMetadata.name"
            />
        </div>
    </div>
</template>
