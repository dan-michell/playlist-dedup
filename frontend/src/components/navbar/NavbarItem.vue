<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ColourModeToggle from './ColourModeToggle.vue'
import { Icon } from '@iconify/vue'
RouterLink
</script>

<template>
  <div class="h-[10vh] flex items-center">
    <RouterLink to="/">
      <Icon icon="proicons:arrow-minimize" width="25" class="hover:scale-110 transition-all" />
    </RouterLink>
    <div class="inline-block ml-auto"><ColourModeToggle /></div>
  </div>
</template>
