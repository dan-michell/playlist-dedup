<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ColourModeToggle from './ColourModeToggle.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="w-full flex items-center justify-between">
        <RouterLink to="/">
            <Icon
                icon="proicons:arrow-minimize"
                width="25"
                class="hover:scale-110 transition-all"
            />
        </RouterLink>
        <ColourModeToggle />
    </div>
</template>
