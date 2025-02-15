<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpotifyUserStore } from '@/stores/spotifyUserStore'
import { setToken, tokenSet } from '@/utils/functions/spotifyAuth'
import PlaylistCardItem from '@/components/PlaylistCardItem.vue'
import { storeToRefs } from 'pinia'
import { HttpStatusCode } from 'axios'
import SubHeading from '@/components/typography/SubHeading.vue'
import AccordionItem from '@/components/ui/AccordionItem.vue'

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
    <div class="w-full flex flex-col items-center">
        <div
            v-for="playlistMetadata in userPlaylists"
            :key="playlistMetadata.id"
            class="w-full flex flex-col items-center"
        >
            <accordion-item
                :imageHref="playlistMetadata.href"
                :playlistName="playlistMetadata.name"
            />
        </div>
    </div>
</template>
