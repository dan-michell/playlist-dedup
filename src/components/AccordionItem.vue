<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
    imageHref: string
    playlistName: string
}

// const props = defineProps<Props>()

const showPanel = ref(false)

const togglePanel = () => {
    console.log(showPanel.value)
    showPanel.value = !showPanel.value
}
</script>

<template>
    <div class="border-2 border-white p-0 flex">
        <button @click="togglePanel" variant="ghost" class="transition-all hover:scale-110">
            <Icon v-if="showPanel" icon="proicons:chevron-up" width="30" class="transition-all" />
            <Icon v-else icon="proicons:chevron-down" width="30" class="transition-all" />
            <span class="sr-only">Toggle accordion</span>
        </button>
    </div>
</template>
