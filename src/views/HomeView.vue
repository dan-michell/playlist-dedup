<script setup lang="ts">
import MainHeading from '@/components/typography/MainHeading.vue'
import MutedHeading from '@/components/typography/MutedHeading.vue'
import SpotifyConnectItem from '@/components/ui/SpotifyConnectItem.vue'
import { tokenSet } from '@/utils/functions/spotifyAuth'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex items-center h-full">
        <div class="flex flex-col items-center gap-3">
            <div class="flex flex-col items-center gap-3">
                <Icon icon="proicons:arrow-minimize" width="65" />
                <MainHeading>spotify-deduplicator</MainHeading>
            </div>
            <MutedHeading
                >Spotify resolves duplicate song removal badly. Continue below to cleanse your
                playlists and your mind.</MutedHeading
            >
            <div class="mt-10">
                <RouterLink v-if="tokenSet()" to="/deduplicate">
                    <SpotifyConnectItem>Continue</SpotifyConnectItem>
                </RouterLink>
                <SpotifyConnectItem v-else>Connect Spotify</SpotifyConnectItem>
            </div>
        </div>
    </div>
</template>
