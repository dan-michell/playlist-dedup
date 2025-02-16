<script setup lang="ts">
import { ref, type Ref, onMounted, onBeforeMount } from 'vue'
import { useSpotifyUserStore } from '@/stores/spotifyUserStore'
import { setToken, tokenSet } from '@/utils/functions/spotifyAuth'
import { storeToRefs } from 'pinia'
import { HttpStatusCode } from 'axios'
import { Icon } from '@iconify/vue'
import AccordionItem from '@/components/ui/AccordionItem.vue'

// TODO: Need to get tracks before passing to accordion as we need to calculate number of duplicates

const spotifyUserStore = useSpotifyUserStore()
const { userId, userPlaylists } = storeToRefs(spotifyUserStore)

const loading: Ref<boolean> = ref(true)

onBeforeMount(async () => {
    const status = await setToken()

    if (status !== HttpStatusCode.Ok || !tokenSet()) {
        window.location.href = '/'
    }

    userId.value = await spotifyUserStore.getUserId()
    userPlaylists.value = await spotifyUserStore.getUserPlaylistsMetadata()

    loading.value = false
})
</script>

<template>
    <div v-if="!loading" class="w-full flex flex-col items-center">
        <div
            v-for="playlistMetadata in userPlaylists"
            :key="playlistMetadata.id"
            class="w-full flex flex-col items-center"
        >
            <AccordionItem v-bind="playlistMetadata" />
        </div>
    </div>
    <div v-else class="w-full flex justify-center items-center">
        <Icon icon="eos-icons:bubble-loading" width="80" />
    </div>
</template>
