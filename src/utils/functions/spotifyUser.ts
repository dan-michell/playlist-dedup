import axios, { type AxiosResponse } from 'axios'
import { type User, type Playlist, type PlaylistedTrack } from '@/types/spotify'

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

function filterPlaylistsByUser(playlistMetadata: Array<Playlist>, userId: string): Array<Playlist> {
    return playlistMetadata.filter((playlist) => playlist.owner.id === userId)
}

export async function getUserPlaylists(userId: string): Promise<Array<Playlist>> {
    try {
        const playlistMetadata = []

        let res = await spotify.get(`/me/playlists`, {
            headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` },
        })

        playlistMetadata.push(...filterPlaylistsByUser(res.data.items, userId))

        // TODO: Test!
        while (res.data.next) {
            res = await axios.get(res.data.next)

            playlistMetadata.push(...filterPlaylistsByUser(res.data.items, userId))
        }

        return playlistMetadata
    } catch (e) {
        const error_message = `Error occurred when fetching Spotify User: ${e}`
        console.error(error_message)
        throw error_message
    }
}

export async function getPlaylistTracks(playlistId: string): Promise<Array<PlaylistedTrack>> {
    try {
        const tracks = []

        const res = await spotify.get(`/playlists/${playlistId}/tracks`, {
            headers: { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` },
        })

        tracks.push(...res.data.items)

        // while (res.data.next) {
        //     res = await axios.get(res.data.next)

        //     tracks.push(...res.data.items)
        // }

        return tracks
    } catch (e) {
        const error_message = `Error occurred when fetching Playlist Tracks: ${e}`
        console.error(error_message)
        throw error_message
    }
}
