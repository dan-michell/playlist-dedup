import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'
import { type User } from '@/types/spotify'

interface PlaylistItems {
    id: string
    name: string
    href: string
}

const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const useSpotifyUserStore = defineStore('spotifyUser', () => {
    const userId = ref('')
    const userPlaylists: Ref<PlaylistItems[]> = ref([])

    async function getUser(): Promise<AxiosResponse<User>> {
        try {
            return await spotify.get('/me', {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
                },
            })
        } catch (e) {
            const error_message = `Error occurred when fetching Spotify User: ${e}`
            console.error(error_message)
            throw error_message
        }
    }

    async function getUserPlaylistMetadata(): Promise<AxiosResponse> {
        console.log('Fetching user playlists...')

        const playlistMetadata = []

        try {
            let res = await spotify.get(`/users/${userId.value}/playlists`, {
                headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` },
            })
        } catch (e) {}

        playlistMetadata.push(...res.data.items)

        // TODO: Test!
        while (res.data.next) {
            res = await axios.get(res.data.next)

            playlistMetadata.push(...res.data.items)
        }

        userPlaylists.value = playlistMetadata.map((playlist) => {
            return { id: playlist.id, name: playlist.name, href: playlist.images[0].url }
        })
    }

    return {
        userId,
        getUser,
        userPlaylists,
        getUserPlaylistMetadata,
    }
})
