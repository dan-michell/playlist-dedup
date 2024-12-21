<script setup lang="ts">
import Spotify from '@/api/spotify'
import { Icon } from '@iconify/vue'
import SubHeading from '@/components/typography/SubHeading.vue'

const spotify = new Spotify()
</script>

<template>
    <button
        @click="spotify.spotifyAuthRedirect"
        class="flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110"
    >
        <Icon icon="logos:spotify-icon" width="45" />
        <SubHeading>Connect Spotify</SubHeading>
    </button>
</template>
