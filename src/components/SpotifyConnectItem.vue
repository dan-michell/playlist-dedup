<script setup lang="ts">
import { SpotifyLoginController } from '@/api/spotify'
import { Icon } from '@iconify/vue'
import { SubHeading } from '@/components/typography/'

const spotifyLoginController = new SpotifyLoginController()

const authFlow = () => {
    return spotifyLoginController.access_token_set
        ? null
        : spotifyLoginController.spotifyAuthRedirect()
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
