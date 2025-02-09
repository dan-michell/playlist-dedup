<script setup lang="ts">
import MutedParagraph from './typography/MutedParagraph.vue'

interface Props {
    imageHref: string
    playlistName: string
}

const props = defineProps<Props>()
</script>

<template>
    <div class="w-36 aspect-square flex flex-col">
        <img :src="props.imageHref" alt="playlist image" class="w-full object-cover rounded-lg" />
        <b
            ><MutedParagraph class="text-center text-sm mt-2">{{
                props.playlistName
            }}</MutedParagraph></b
        >
    </div>
</template>
