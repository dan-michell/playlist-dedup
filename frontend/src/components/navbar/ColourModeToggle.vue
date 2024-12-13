<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({ disableTransition: false })
</script>

<template>
  <button
    @click="mode = mode === 'light' ? 'dark' : 'light'"
    variant="ghost"
    class="flex items-center justify-center rounded-xl transition-all hover:scale-110"
  >
    <Icon
      icon="radix-icons:moon"
      class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      width="25"
    />
    <Icon
      icon="radix-icons:sun"
      class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      width="25"
    />
    <span class="sr-only">Toggle theme</span>
  </button>
</template>
