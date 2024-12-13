<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SubHeading from '@/components/typography/SubHeading.vue'
</script>

<template>
  <button
    class="flex flex-col items-center gap-1 mt-[10vh] transition-all duration-300 hover:scale-110"
  >
    <Icon icon="logos:spotify-icon" width="45" />
    <SubHeading>Connect Spotify</SubHeading>
  </button>
</template>
