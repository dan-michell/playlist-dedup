// import { defineStore } from 'pinia'
// import { ref } from 'vue'
// import { HttpStatusCode } from 'axios'

// const clientId = import.meta.env.VITE_CLIENT_ID
// const redirectUri = import.meta.env.VITE_REDIRECT_URI
// const homeUri = import.meta.env.VITE_HOME_URI

// export const useSpotifyAuthStore = defineStore('spotifyAuth', () => {
//     const token = ref('')
//     const refreshToken = ref('')
//     const expiresAt = ref('')

//     function tokenSet(): boolean {
//         if (tokenExpired() || !token.value) {
//             return false
//         }

//         return true
//     }

//     function tokenExpired(): boolean {
//         const currentTime = Date.now()
//         const expires = Number(expiresAt.value)

//         if (expires) {
//             return currentTime > expires
//         }

//         return false
//     }

//     async function setToken(): Promise<HttpStatusCode> {
//         if (!tokenSet()) {
//             const tokenUrl = new URL('https://accounts.spotify.com/api/token')
//             const codeVerifier = window.localStorage.getItem('code_verifier')
//             const code = new URLSearchParams(window.location.search).get('code')

//             // If user cancels Spotify auth, a code will not be provided
//             if (!code) {
//                 window.location.href = homeUri
//             }

//             const payload = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 body: new URLSearchParams({
//                     client_id: clientId,
//                     grant_type: 'authorization_code',
//                     code,
//                     redirect_uri: redirectUri,
//                     code_verifier: codeVerifier,
//                 }),
//             }

//             const body = await fetch(tokenUrl, payload)
//             const response = await body.json()

//             if (body.ok) {
//                 const t = new Date()
//                 const expiration = t.setSeconds(t.getSeconds() + response.expires_in).toString()

//                 token.value = response.access_token
//                 refreshToken.value = response.refresh_token
//                 expiresAt.value = expiration

//                 return HttpStatusCode.Ok
//             } else {
//                 return HttpStatusCode.Unauthorized
//             }
//         }

//         return HttpStatusCode.Ok
//     }
//     return {
//         token,
//         refreshToken,
//         expiresAt,
//         setToken,
//         tokenSet,
//     }
// })
