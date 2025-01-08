<script setup lang="ts">
import Spotify from '@/api/spotify'
import { Icon } from '@iconify/vue'
import { SubHeading } from '@/components/typography/'

const spotify = new Spotify()
const authFlow = () => {
    return spotify.access_token_set ? null : spotify.spotifyAuthRedirect()
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
