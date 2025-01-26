<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { SubHeading } from '@/components/typography/'
import { useSpotifyAuthStore } from '@/stores/spotifyAuthStore'
import { storeToRefs } from 'pinia'

const spotifyAuthStore = useSpotifyAuthStore()

const { checkTokenSet } = storeToRefs(spotifyAuthStore)

const authFlow = async () => {
    return checkTokenSet.value ? null : await spotifyAuthStore.spotifyAuthRedirect()
}
</script>

<template>
    <button
        @click="authFlow"
        class="flex flex-col items-center gap-1 transition-all hover:scale-110"
    >
        <Icon icon="logos:spotify-icon" width="45" />
        <SubHeading><slot /></SubHeading>
    </button>
</template>
