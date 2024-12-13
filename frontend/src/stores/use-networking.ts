import { defineStore } from 'pinia'
import { computed } from 'vue'
import Networking from '@/networking'

const networking = new Networking()

export const useNetworkingStore = defineStore('networking', () => {
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
