export type Artist = {
  id: string
  name: string
  genre: string
  bio: string
  photo_url: string
  spotify_url: string
  apple_music_url?: string
  youtube_url: string
  instagram_url: string
  featured: boolean
  show_id: string
}

export type Show = {
  id: string
  date: string
  title: string
  venue: string
  location: string
  description: string
  image_url: string
  ticket_url: string
  status: 'upcoming' | 'past'
  artists: string[]
}

export type Stat = {
  metric: string
  value: string
  label: string
}

export type SiteContent = Record<string, string>

export type StorylinesData = {
  artists: Artist[]
  shows: Show[]
  stats: Stat[]
  siteContent: SiteContent
}

export const sampleArtists: Artist[] = [
  {
    id: 'a1',
    name: 'Ire',
    genre: 'Afrobeats',
    bio: 'A warm-leaning singer storyteller blending dance rhythms with intimate hooks and late-night reflections.',
    photo_url:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    spotify_url: 'https://open.spotify.com/',
    youtube_url: 'https://www.youtube.com/',
    instagram_url: 'https://www.instagram.com/',
    featured: true,
    show_id: 'show-1',
  },
  {
    id: 'a2',
    name: 'Tola K',
    genre: 'R&B',
    bio: 'Velvet vocals and subtle percussion shaped around memories, longing and the city after midnight.',
    photo_url:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    spotify_url: 'https://open.spotify.com/',
    youtube_url: 'https://www.youtube.com/',
    instagram_url: 'https://www.instagram.com/',
    featured: true,
    show_id: 'show-1',
  },
  {
    id: 'a3',
    name: 'Efe Sol',
    genre: 'Alternative',
    bio: 'Rustic guitar textures and spoken-word phrasing that turns the room into a listening booth.',
    photo_url:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    spotify_url: 'https://open.spotify.com/',
    youtube_url: 'https://www.youtube.com/',
    instagram_url: 'https://www.instagram.com/',
    featured: true,
    show_id: 'show-2',
  },
  {
    id: 'a4',
    name: 'Maya J',
    genre: 'Soul',
    bio: 'A cinematic voice moving between gospel tenderness and fresh smoke-filled club energy.',
    photo_url:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    spotify_url: 'https://open.spotify.com/',
    youtube_url: 'https://www.youtube.com/',
    instagram_url: 'https://www.instagram.com/',
    featured: true,
    show_id: 'show-2',
  },
  {
    id: 'a5',
    name: 'Numa',
    genre: 'Hip Hop',
    bio: 'Sharp, poetic bars layered with live drums and a fiercely human sense of place.',
    photo_url:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    spotify_url: 'https://open.spotify.com/',
    youtube_url: 'https://www.youtube.com/',
    instagram_url: 'https://www.instagram.com/',
    featured: false,
    show_id: 'show-3',
  },
  {
    id: 'a6',
    name: 'Kola & the Frames',
    genre: 'Jazz',
    bio: 'A quartet of improvisers turning the room into an after-hours smoke lounge for lost melodies.',
    photo_url:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    spotify_url: 'https://open.spotify.com/',
    youtube_url: 'https://www.youtube.com/',
    instagram_url: 'https://www.instagram.com/',
    featured: false,
    show_id: 'show-3',
  },
]

export const sampleShows: Show[] = [
  {
    id: 'show-1',
    date: '2026-11-16',
    title: 'Storylines Live',
    venue: 'The Palms Annex',
    location: 'Lagos',
    description: 'Four artists. One room. Different stories.',
    image_url:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    ticket_url: 'https://example.com/tickets',
    status: 'upcoming',
    artists: ['Ire', 'Tola K', 'Efe Sol', 'Maya J'],
  },
  {
    id: 'show-2',
    date: '2026-09-27',
    title: 'Room Tone',
    venue: 'Bamboo House',
    location: 'Abuja',
    description: 'A night of intimate listening, low lighting and unexpected collaborations.',
    image_url:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    ticket_url: 'https://example.com/tickets',
    status: 'past',
    artists: ['Efe Sol', 'Maya J', 'Numa', 'Kola & the Frames'],
  },
  {
    id: 'show-3',
    date: '2026-06-11',
    title: 'After Hours Session',
    venue: 'The Courtyard',
    location: 'Ibadan',
    description: 'A slower set that moved between soul, jazz, rap and ambient textures.',
    image_url:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    ticket_url: 'https://example.com/tickets',
    status: 'past',
    artists: ['Numa', 'Kola & the Frames', 'Ire', 'Tola K'],
  },
]

export const sampleStats: Stat[] = [
  { metric: 'shows', value: '12', label: 'Shows' },
  { metric: 'artists', value: '48', label: 'Artists featured' },
  { metric: 'attendance', value: '8,500+', label: 'People in the room' },
  { metric: 'growth', value: '32%', label: 'Audience growth' },
]

export const sampleSiteContent: SiteContent = {
  hero_title: 'STORYLINES',
  hero_description: '4 artists. 1 room. Different stories.',
  hero_copy:
    'An intimate live music show bringing together four artists from different genres for one unforgettable night.',
  story_intro: 'More than just a show.',
  story_body:
    'Storylines is a cultural platform built around live music, emerging artists and intimate experiences.',
  about_intro:
    'Music sounds different when you are close enough to hear the story.',
  partner_intro:
    'We work with brands and organisations that believe in the power of music, culture and community.',
}

export const sampleData: StorylinesData = {
  artists: sampleArtists,
  shows: sampleShows,
  stats: sampleStats,
  siteContent: sampleSiteContent,
}
