import axios, { type AxiosResponse } from 'axios'
import { type User, type Playlist } from '@/types/spotify'

const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
    },
})

export async function getUser(): Promise<AxiosResponse<User>> {
    try {
        return await spotify.get('/me', {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
            },
        })
    } catch (e) {
        // TODO: Implement error handler
        const error_message = `Error occurred when fetching Spotify User: ${e}`
        console.error(error_message)
        throw error_message
    }
}

export async function getUserPlaylists(): Promise<Array<Playlist>> {
    try {
        const playlistMetadata = []

        let res = await spotify.get(`/me/playlists`, {
            headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` },
        })

        playlistMetadata.push(...res.data.items)

        // TODO: Test!
        while (res.data.next) {
            res = await axios.get(res.data.next)

            playlistMetadata.push(...res.data.items)
        }

        return playlistMetadata
    } catch (e) {
        const error_message = `Error occurred when fetching Spotify User: ${e}`
        console.error(error_message)
        throw error_message
    }
}
