<script setup lang="ts">
import MainHeading from '@/components/typography/MainHeading.vue'
import MutedHeading from '@/components/typography/MutedHeading.vue'
import SubHeading from '@/components/typography/SubHeading.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex flex-col items-center mt-[10vh] gap-3 sm:max-w-[90%]">
    <div class="flex flex-col items-center gap-3">
      <Icon icon="proicons:arrow-minimize" width="65" />
      <MainHeading>spotify-deduplicator </MainHeading>
    </div>
    <MutedHeading
      >Spotify handles duplicate song removal badly. Continue below to cleanse your playlists and
      your mind.</MutedHeading
    >
    <button
      class="flex flex-col items-center gap-1 mt-[10vh] transition-all duration-300 hover:scale-110"
    >
      <Icon icon="logos:spotify-icon" width="45" />
      <SubHeading>Connect Spotify</SubHeading>
    </button>
  </div>
</template>
