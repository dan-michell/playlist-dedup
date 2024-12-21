<script setup lang="ts">
import MainHeading from '@/components/typography/MainHeading.vue'
import MutedHeading from '@/components/typography/MutedHeading.vue'
import SpotifyConnectItem from '@/components/SpotifyConnectItem.vue'
import { Icon } from '@iconify/vue'
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
            <!-- TODO: Conditionally render spotify connect or continue to deduplicate based on if the access token is set -->
            <SpotifyConnectItem />
        </div>
    </div>
</template>
