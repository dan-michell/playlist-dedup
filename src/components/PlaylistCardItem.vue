<script setup lang="ts">
interface Props {
    imageHref: string
    playlistName: string
}

const props = defineProps<Props>()
</script>

<template>
    <div class="w-52">
        <img
            :src="props.imageHref"
            alt="playlist image"
            class="w-full h-52 object-cover rounded-lg"
        />
        <p class="text-center text-sm mt-2">{{ props.playlistName }}</p>
    </div>
</template>
