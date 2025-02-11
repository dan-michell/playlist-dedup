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
        <Icon v-if="mode == 'light'" icon="radix-icons:moon" class="transition-all" width="25" />
        <Icon v-else icon="radix-icons:sun" class="transition-all" width="25" />
        <span class="sr-only">Toggle theme</span>
    </button>
</template>
