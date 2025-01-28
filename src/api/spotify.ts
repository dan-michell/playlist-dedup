import axios from 'axios'

const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        'Content-Type': 'application/json',
    },
})

export async function getUserUrl(token: string): Promise<string> {
    const res = await spotify.get('/me', {
        headers: { Authorization: `Bearer ${token}` },
    })

    return await res.data.href
}
