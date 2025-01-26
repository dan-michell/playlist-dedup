import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { SpotifyAuthStatus } from '@/enums'

const clientId = import.meta.env.VITE_CLIENT_ID
const redirectUri = import.meta.env.VITE_REDIRECT_URI
const homeUri = import.meta.env.VITE_HOME_URI

export const useSpotifyAuthStore = defineStore('spotifyAuth', () => {
    const accessTokenSet = ref(false)

    const checkTokenSet = computed((): boolean => {
        console.log('checkTokenSet')
        if (tokenExpired() || !window.localStorage.getItem('access_token')) {
            accessTokenSet.value = false
        } else {
            accessTokenSet.value = true
        }

        return accessTokenSet.value
    })

    const tokenExpired = (): boolean => {
        const currentTime = Date.now()
        const expiresAt = Number(window.localStorage.getItem('expires_at'))

        if (expiresAt) {
            return currentTime > expiresAt
        }

        return false
    }

    const removeToken = (): void => {
        window.localStorage.removeItem('access_token')

        accessTokenSet.value = false
    }

    const spotifyAuthRedirect = async (): Promise<void> => {
        function generateRandomString(length: number): string {
            let text = ''
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

            for (let i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length))
            }

            return text
        }

        async function generateCodeChallenge(codeVerifier: string): Promise<string> {
            const digest = await crypto.subtle.digest(
                'SHA-256',
                new TextEncoder().encode(codeVerifier),
            )

            return btoa(String.fromCharCode(...new Uint8Array(digest)))
                .replace(/=/g, '')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
        }

        const codeVerifier = generateRandomString(64)
        const codeChallenge = await generateCodeChallenge(codeVerifier)

        const scope = 'user-read-private user-read-email'
        const authUrl = new URL('https://accounts.spotify.com/authorize')

        window.localStorage.setItem('code_verifier', codeVerifier)

        const params = {
            response_type: 'code',
            client_id: clientId,
            scope,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: redirectUri,
        }
        authUrl.search = new URLSearchParams(params).toString()

        window.location.href = authUrl.toString()
    }

    const setToken = async (): Promise<SpotifyAuthStatus> => {
        if (!checkTokenSet.value) {
            const tokenUrl = new URL('https://accounts.spotify.com/api/token')
            const codeVerifier = window.localStorage.getItem('code_verifier')
            const code = new URLSearchParams(window.location.search).get('code')

            // If user cancels Spotify auth, a code will not be provided
            if (!code) {
                window.location.href = homeUri

                return SpotifyAuthStatus.AccessDenied
            }

            const payload = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    client_id: clientId,
                    grant_type: 'authorization_code',
                    code,
                    redirect_uri: redirectUri,
                    code_verifier: codeVerifier,
                }),
            }

            const body = await fetch(tokenUrl, payload)
            const response = await body.json()

            if (body.ok) {
                const t = new Date()
                const expiresAt = t.setSeconds(t.getSeconds() + response.expires_in).toString()

                window.localStorage.setItem('access_token', response.access_token)
                window.localStorage.setItem('refresh_token', response.refresh_token)
                window.localStorage.setItem('expires_at', expiresAt)

                accessTokenSet.value = true
            } else {
                accessTokenSet.value = false

                return SpotifyAuthStatus.AccessDenied
            }
        }

        return SpotifyAuthStatus.Success
    }

    // async useRefreshToken() {
    //     // refresh token that has been previously stored
    //     const refreshToken = window.localStorage.getItem('refresh_token')
    //     const url = 'https://accounts.spotify.com/api/token'
    //     console.log(refreshToken)
    //     const payload = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: new URLSearchParams({
    //             grant_type: 'refresh_token',
    //             refresh_token: refreshToken,
    //             client_id: this.clientId,
    //         }),
    //     }

    //     const body = await fetch(url, payload)
    //     const response = await body.json()

    //     localStorage.setItem('access_token', response.accessToken)

    //     if (response.refreshToken) {
    //         localStorage.setItem('refresh_token', response.refreshToken)
    //     }
    // }

    return {
        accessTokenSet,
        checkTokenSet,
        removeToken,
        spotifyAuthRedirect,
        setToken,
    }
})
