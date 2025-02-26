import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import {
    getUser,
    getUserPlaylists,
    getPlaylistTracks,
    getDuplicateTracks,
} from '@/utils/functions/spotifyUser'
import { type PlaylistMetadata } from '@/types/spotify'

export const useSpotifyUserStore = defineStore('spotifyUser', () => {
    const userId: Ref<string> = ref('')
    const userPlaylists: Ref<Array<PlaylistMetadata>> = ref([])

    const getUserId = async () => {
        const user = await getUser()

        userId.value = user.data.id
    }

    const getUserPlaylistsMetadata = async () => {
        const userPlaylistsMetadata = await getUserPlaylists(userId.value)

        const playlistMetadataPromises = userPlaylistsMetadata.map(async (playlist) => {
            const tracks = await getPlaylistTracks(playlist.id)

            return {
                id: playlist.id,
                name: playlist.name,
                href: playlist.images[0].url,
                tracks: tracks,
                duplicates: getDuplicateTracks(tracks),
            }
        })

        userPlaylists.value = await Promise.all(playlistMetadataPromises)
    }

    return {
        userId,
        getUserId,
        userPlaylists,
        getUserPlaylistsMetadata,
    }
})
