<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { SubHeading } from '@/components/typography/'
import { tokenSet, spotifyAuthRedirect } from '@/utils/functions/spotifyAuth'

const authFlow = async () => {
    return tokenSet() ? null : await spotifyAuthRedirect()
}
</script>

<template>
    <button
        @click="authFlow"
        class="flex flex-col items-center gap-1 transition-all hover:scale-110"
    >
        <Icon icon="logos:spotify-icon" width="45" />
        <SubHeading><slot /></SubHeading>
    </button>
</template>
