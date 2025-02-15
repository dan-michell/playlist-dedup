import { defineStore } from 'pinia'
import { ref, type Ref, computed } from 'vue'
import { getUser, getUserPlaylists } from '@/utils/functions/spotifyUser'

export interface FilteredPlaylistMetadata {
    id: string
    name: string
    href: string
}

export const useSpotifyUserStore = defineStore('spotifyUser', () => {
    const userId: Ref<string> = ref('')
    const userPlaylists: Ref<Array<FilteredPlaylistMetadata>> = ref([])

    const getUserId = async () => {
        const user = await getUser()

        return user.data.id
    }

    const getFilteredUserPlaylists = async () => {
        const userPlaylists = await getUserPlaylists(userId.value)

        return userPlaylists.map((playlist) => {
            return {
                id: playlist.id,
                name: playlist.name,
                href: playlist.images[0].url,
            }
        })
    }

    const getCount = computed(() => {
        return userPlaylists.value.length
    })

    return {
        userId,
        getUserId,
        userPlaylists,
        getFilteredUserPlaylists,
        getCount,
    }
})
