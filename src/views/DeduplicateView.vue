<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpotifyUserStore } from '@/stores/spotifyUserStore'
import { setToken, tokenSet } from '@/utils/functions/spotifyAuth'
import PlaylistCardItem from '@/components/PlaylistCardItem.vue'
import { storeToRefs } from 'pinia'
import { HttpStatusCode } from 'axios'
import SubHeading from '@/components/typography/SubHeading.vue'

const spotifyUserStore = useSpotifyUserStore()
const { userPlaylists } = storeToRefs(spotifyUserStore)

onMounted(async () => {
    const status = await setToken()

    if (status !== HttpStatusCode.Ok || !tokenSet()) {
        window.location.href = '/'
    }

    userPlaylists.value = await spotifyUserStore.getFilteredUserPlaylistItems()
})
</script>

<template>
    <div class="w-full flex flex-col items-center gap-10">
        <SubHeading> Duplicates </SubHeading>
        <div class="w-full flex flex-wrap justify-center gap-10">
            <div v-for="playlistMetadata in userPlaylists" :key="playlistMetadata.id">
                <playlist-card-item
                    :imageHref="playlistMetadata.href"
                    :playlistName="playlistMetadata.name"
                />
            </div>
        </div>
    </div>
</template>
