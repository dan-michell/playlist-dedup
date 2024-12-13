import { defineStore } from 'pinia'
import { computed } from 'vue'
import Spotify from '@/api/spotify'

const spotify = new Spotify()

export const useSpotifyStore = defineStore('spotify', () => {
  // Define computed variable that stores result of api fetch
  const res = computed(() => {
    return
    // return networking.fetchMethod()
  })

  return { res }
})

// In components
// import { computed } from 'vue'
// import { storeToRefs } from 'pinia'
// import { useNetworkingStore } from '@/stores/use-networking'

// const networkingStore = useNetworkingStore()
// const { res } = storeToRefs(networkingStore)

// <template>
//     <button @click="res">Login</button>
// </template>
