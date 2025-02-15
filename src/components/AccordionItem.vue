<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
    imageHref: string
    playlistName: string
}

// const props = defineProps<Props>()

const showPanel = ref(false)
</script>

<template>
    <div class="border-2 border-white p-0 flex">
        <button
            @click="showPanel = !showPanel"
            variant="ghost"
            class="transition-all hover:scale-110"
        >
            <Icon
                icon="proicons:chevron-down"
                width="30"
                class="transition-transform"
                :class="{ 'transform rotate-180': showPanel }"
            />
            <span class="sr-only">Toggle accordion</span>
        </button>
    </div>
</template>
