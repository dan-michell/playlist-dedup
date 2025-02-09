import { defineStore } from 'pinia'
import { ref, type Ref, computed } from 'vue'
import { getUserPlaylists } from '@/utils/functions/spotifyUser'

interface FilteredPlaylistItems {
    id: string
    name: string
    href: string
}

export const useSpotifyUserStore = defineStore('spotifyUser', () => {
    const userPlaylists: Ref<Array<FilteredPlaylistItems>> = ref([])

    const getFilteredUserPlaylistItems = async () => {
        const userPlaylistMetadata = await getUserPlaylists()

        return userPlaylistMetadata.map((playlistItem) => {
            return {
                id: playlistItem.id,
                name: playlistItem.name,
                href: playlistItem.images[0].url,
            }
        })
    }

    return {
        userPlaylists,
        getFilteredUserPlaylistItems,
    }
})
