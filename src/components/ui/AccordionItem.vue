<script setup lang="ts">
import { ref, type Ref, onMounted, toRef } from 'vue'
import { Icon } from '@iconify/vue'
import { SubHeading } from '@/components/typography'
import AlertCountItem from '@/components/ui/AlertCountItem.vue'
import { getPlaylistTracks } from '@/utils/functions/spotifyUser'
import { type PlaylistedTrack } from '@/types/spotify'

interface Props {
    playlistName: string
    playlistId: string
    playlistImageHref: string
}

const props = defineProps<Props>()
const showPanel = ref(false)
const tracks: Ref<Array<PlaylistedTrack>> = ref([])

const togglePanel = async () => {
    if (tracks.value.length === 0) {
        tracks.value = await getPlaylistTracks(props.playlistId)
    }

    showPanel.value = !showPanel.value
}
// onMounted(async () => {
//     tracks.value = await getPlaylistTracks(props.id)
// })
</script>

<template>
    <div class="w-full p-3 flex justify-between rounded-lg bg-card my-5 shadow-md relative">
        <alert-count-item :count="5" />
        <div class="flex items-center gap-5">
            <img
                :src="props.playlistImageHref"
                alt="playlist image"
                class="max-w-[15%] object-cover rounded-lg"
            />
            <sub-heading>{{ props.playlistName }}</sub-heading>
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
        <div v-if="showPanel">{{ tracks }}</div>
    </div>
</template>
