<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpotifyUserStore } from '@/stores/spotifyUserStore'
import { setToken, tokenSet } from '@/utils/functions/spotifyAuth'
import { storeToRefs } from 'pinia'
import { HttpStatusCode } from 'axios'
import AccordionItem from '@/components/ui/AccordionItem.vue'

// TODO: Need to get tracks before passing to accordion as we need to calculate number of duplicates

const spotifyUserStore = useSpotifyUserStore()
const { userId, userPlaylists } = storeToRefs(spotifyUserStore)

onMounted(async () => {
    const status = await setToken()

    if (status !== HttpStatusCode.Ok || !tokenSet()) {
        window.location.href = '/'
    }

    userId.value = await spotifyUserStore.getUserId()
    userPlaylists.value = await spotifyUserStore.getFilteredUserPlaylists()
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
                :playlistName="playlistMetadata.name"
                :playlistId="playlistMetadata.id"
                :playlistImageHref="playlistMetadata.href"
            />
        </div>
    </div>
</template>
