<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { SubHeading } from '@/components/typography'
import AlertCountItem from '@/components/ui/AlertCountItem.vue'

interface Props {
    imageHref: string
    playlistName: string
}

const props = defineProps<Props>()

const showPanel = ref(false)
</script>

<template>
    <div class="w-full p-3 flex justify-between rounded-lg bg-card my-5 shadow-md relative">
        <alert-count-item :count="8" />
        <div class="flex items-center gap-5">
            <img
                :src="props.imageHref"
                alt="playlist image"
                class="max-w-[15%] object-cover rounded-lg"
            />
            <sub-heading>{{ props.playlistName }}</sub-heading>
        </div>
        <button
            @click="showPanel = !showPanel"
            variant="ghost"
            class="transition-all hover:scale-110"
        >
            <Icon
                icon="proicons:chevron-down"
                width="36"
                class="transition-transform"
                :class="{ 'transform rotate-180': showPanel }"
            />
            <span class="sr-only">Toggle accordion</span>
        </button>
    </div>
</template>
