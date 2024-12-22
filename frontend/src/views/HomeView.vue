<script setup lang="ts">
import MainHeading from '@/components/typography/MainHeading.vue'
import MutedHeading from '@/components/typography/MutedHeading.vue'
import SpotifyConnectItem from '@/components/SpotifyConnectItem.vue'
import Spotify from '@/api/spotify'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

const spotify = new Spotify()
</script>

<template>
    <div class="flex flex-col items-center mt-[20vh] gap-3 sm:max-w-[90%]">
        <div class="flex flex-col items-center gap-3">
            <Icon icon="proicons:arrow-minimize" width="65" />
            <MainHeading>spotify-deduplicator </MainHeading>
        </div>
        <MutedHeading
            >Spotify resolves duplicate song removal badly. Continue below to cleanse your playlists
            and your mind.</MutedHeading
        >
        <div class="mt-10">
            <RouterLink v-if="spotify.access_token_set" to="/deduplicate">
                <SpotifyConnectItem>Continue</SpotifyConnectItem>
            </RouterLink>
            <SpotifyConnectItem v-else>Connect Spotify</SpotifyConnectItem>
        </div>
    </div>
</template>
