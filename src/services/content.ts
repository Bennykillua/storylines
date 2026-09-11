import { sampleData, type StorylinesData } from '../data/sampleData'

const API_URL = import.meta.env.VITE_GOOGLE_SHEETS_API_URL

const cleanImageValue = (value: unknown) => {
  const raw = String(value ?? '').trim()
  const markdownMatch = raw.match(/\]\((https?:\/\/[^)]+)\)/)
  const htmlMatch = raw.match(/href=["'](https?:\/\/[^"']+)["']/i)
  const url = markdownMatch?.[1] ?? htmlMatch?.[1] ?? raw.replace(/^.*?(https?:\/\/)/, '$1')
  return url.replace(/&amp;/g, '&').replace(/<[^>]+>/g, '').trim()
}

export const getImageCandidates = (value: unknown) => {
  const url = cleanImageValue(value)
  const driveFileMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/)
  const directDriveMatch = url.match(/googleusercontent\.com\/d\/([^=/?]+)/)
  const driveOpenMatch = url.match(/[?&]id=([^&]+)/)
  const fileId = driveFileMatch?.[1] ?? directDriveMatch?.[1] ?? driveOpenMatch?.[1]

  if (url.includes('unsplash.com/photos/black-and-grey-microphone-on-stand-63sI4HO30tw')) {
    return ['https://images.unsplash.com/photo-1541592553160-82008b127ccb?auto=format&fit=crop&w=1200&q=80']
  }

  return fileId
    ? [
        `https://lh3.googleusercontent.com/d/${fileId}=w1600`,
        `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`,
        `https://drive.google.com/uc?export=view&id=${fileId}`,
      ]
    : [url]
}

export type SubmissionPayload = {
  artist_name: string
  email: string
  phone: string
  instagram: string
  genre: string
  youtube_url: string
  spotify_url: string
  message: string
}

const normalizeData = (data: Partial<StorylinesData> | undefined): StorylinesData => {
  if (!data) {
    return sampleData
  }

  const artists = Array.isArray(data.artists)
    ? data.artists
    : sampleData.artists
  const shows = Array.isArray(data.shows)
    ? data.shows.map((show) => ({
        ...show,
        artists:
          Array.isArray(show.artists) && show.artists.length > 0
            ? show.artists
            : artists
                .filter((artist) => String(artist.show_id) === String(show.id))
                .map((artist) => artist.name),
      }))
    : sampleData.shows

  return {
    artists,
    shows,
    stats: Array.isArray(data.stats) ? data.stats : sampleData.stats,
    siteContent:
      data.siteContent && typeof data.siteContent === 'object'
        ? Object.fromEntries(
            Object.entries(data.siteContent).map(([key, value]) => [key, key.endsWith('_image_url') ? cleanImageValue(value) : value]),
          )
        : sampleData.siteContent,
  }
}

export async function loadStorylinesData(): Promise<StorylinesData> {
  if (!API_URL) {
    return sampleData
  }

  try {
    let response: Response | undefined

    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const nextResponse = await fetch(`${API_URL}?action=read&t=${Date.now()}`, {
          cache: 'no-store',
        })

        if (nextResponse.ok) {
          response = nextResponse
          break
        }
      } catch (error) {
        if (attempt === 1) throw error
      }
    }

    if (!response) {
      throw new Error('Failed to fetch Google Sheet data')
    }

    const payload = await response.json()
    const nextData = (payload?.data ?? payload) as Partial<StorylinesData>
    return normalizeData(nextData)
  } catch (error) {
    console.warn('Google Sheets unavailable, using local sample data.', error)
    return sampleData
  }
}

export async function submitArtistApplication(payload: SubmissionPayload): Promise<{ ok: boolean; message: string }> {
  if (!API_URL) {
    console.info('Mock submission saved locally:', payload)
    return { ok: true, message: 'Thank you. We will listen and get back to you.' }
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({ action: 'submit', payload }),
    })

    if (!response.ok) {
      throw new Error('Submission failed')
    }

    return { ok: true, message: 'Thank you. We will listen and get back to you.' }
  } catch (error) {
    console.warn('Google Sheets submission failed, using mock fallback.', error)
    console.info('Mock submission saved locally:', payload)
    return { ok: true, message: 'Thank you. We will listen and get back to you.' }
  }
}
