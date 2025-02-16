import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { getUser, getUserPlaylists, getPlaylistTracks } from '@/utils/functions/spotifyUser'
import { type PlaylistMetadata } from '@/types/spotify'

export const useSpotifyUserStore = defineStore('spotifyUser', () => {
    const userId: Ref<string> = ref('')
    const userPlaylists: Ref<Array<PlaylistMetadata>> = ref([])

    const getUserId = async () => {
        const user = await getUser()

        return user.data.id
    }

    const getUserPlaylistsMetadata = async (): Promise<Array<PlaylistMetadata>> => {
        const userPlaylists = await getUserPlaylists(userId.value)

        const playlistMetadataPromises = userPlaylists.map(async (playlist) => {
            return {
                id: playlist.id,
                name: playlist.name,
                href: playlist.images[0].url,
                tracks: await getPlaylistTracks(playlist.id),
            }
        })

        return await Promise.all(playlistMetadataPromises)
    }

    // const getUserPlaylistsTracks = async () => {
    //     console.log(userPlaylists.value.length)
    //     if (userPlaylists.value.length !== 0) {
    //         const playlistTracks = {}

    //         const playlistTrackPromises = userPlaylists.value.map(async (playlist) => {
    //             const tracks = await getPlaylistTracks(playlist.id)
    //             return { id: playlist.id, tracks }
    //         })

    //         // for (const playlist of userPlaylists.value) {
    //         //     playlistTracks[playlist.id] = await getPlaylistTracks(playlist.id)
    //         // }
    //         const resolvedPlaylistTracks = await Promise.all(playlistTrackPromises)

    //         resolvedPlaylistTracks.forEach((playlist) => {
    //             playlistTracks[playlist.id] = playlist.tracks
    //         })

    //         return playlistTracks
    //     }
    // }

    return {
        userId,
        getUserId,
        userPlaylists,
        getUserPlaylistsMetadata,
    }
})
