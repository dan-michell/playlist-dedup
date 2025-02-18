<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { Icon } from '@iconify/vue'
import { SubHeading } from '@/components/typography'
import AlertCountItem from '@/components/ui/AlertCountItem.vue'
import { type PlaylistMetadata } from '@/types/spotify'

const props = defineProps<PlaylistMetadata>()
const { name, href, tracks } = toRefs(props)

const showPanel = ref(false)

const togglePanel = async () => {
    showPanel.value = !showPanel.value
}

// TODO: List duplicates in dropdown. Each duplicate track has a checkbox to select for removal with select all button
// For each duplicate show both tracks and a select to choose which track to remove, or a button saying, I don't care, just remove all duplicates.
</script>

<template>
    <div class="w-full flex flex-col rounded-lg bg-card my-5 p-3 gap-5 shadow-md relative">
        <div class="w-full flex justify-between">
            <AlertCountItem :count="tracks.length" />
            <div class="flex items-center gap-5">
                <img
                    :src="href"
                    alt="playlist image"
                    class="w-[15%] object-cover rounded-lg aspect-square"
                />
                <sub-heading>{{ name }}</sub-heading>
            </div>
            <button @click="togglePanel" variant="ghost" class="transition-all hover:scale-110">
                <Icon
                    icon="proicons:chevron-down"
                    width="36"
                    class="transition-transform"
                    :class="{ 'transform rotate-180': showPanel }"
                />
                <span class="sr-only">Toggle accordion</span>
            </button>
        </div>
        <div v-if="showPanel" class="overflow-scroll">
            <li v-for="trackMetadata in tracks" :key="trackMetadata.track.id" class="list-none">
                <ul>
                    {{
                        trackMetadata.track.name
                    }}
                </ul>
            </li>
        </div>
    </div>
</template>
