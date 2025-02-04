import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import axios from 'axios'

const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const useSpotifyUserStore = defineStore('spotifyUser', () => {
    const userId = ref('')
    const userPlaylists = ref([])

    async function getUserId(): Promise<void> {
        if (!userId.value) {
            const res = await spotify.get('/me', {
                headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` },
            })

            userId.value = await res.data.id
        }
    }

    async function getUserPlaylists(): Promise<void> {
        const res = await spotify.get(`/users/${userId.value}/playlists`, {
            headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` },
        })
        console.log(res.data.items)
        userPlaylists.value = await res.data.items
    }

    return {
        userId,
        getUserId,
        userPlaylists,
        getUserPlaylists,
    }
})
