import { useMemo, useState } from 'react'
import type { Artist, StorylinesData } from '../data/sampleData'
import { ArtistCard } from '../components/ArtistCard'
import { StorylinesImage } from '../components/StorylinesImage'
import { FaApple, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'

type StarsPageProps = {
  data: StorylinesData
}

const genreFilters = ['All', 'Afrobeats', 'R&B', 'Hip Hop', 'Alternative', 'Soul', 'Jazz', 'Other']

export function StarsPage({ data }: StarsPageProps) {
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)

  const filteredArtists = useMemo(() => {
    if (selectedGenre === 'All') return data.artists
    return data.artists.filter((artist) => artist.genre === selectedGenre)
  }, [data.artists, selectedGenre])

  return (
    <div className="page-section">
      <section className="container intro-block">
        <p className="eyebrow">Stars</p>
        <h1>Meet the artists behind Storylines.</h1>
        <p className="lede">Four artists. Different genres. One room.</p>
      </section>

      <section className="container filter-row" aria-label="Artist genres">
        {genreFilters.map((genre) => (
          <button
            key={genre}
            type="button"
            className={selectedGenre === genre ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </section>

      <section className="container artists-gallery">
        {filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} onSelect={setSelectedArtist} />
        ))}
      </section>

      {selectedArtist && (
        <div className="modal-backdrop" onClick={() => setSelectedArtist(null)}>
          <div className="artist-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedArtist(null)}>
              Close
            </button>
            <StorylinesImage source={selectedArtist.photo_url} alt={selectedArtist.name} className="modal-portrait" />
            <div className="modal-copy">
              <p className="eyebrow">Artist spotlight</p>
              <h2>{selectedArtist.name}</h2>
              <p className="modal-genre">{selectedArtist.genre}</p>
              <p>{selectedArtist.bio}</p>
              <div className="modal-links">
                <SocialLink href={selectedArtist.spotify_url} label="Spotify"><FaSpotify /></SocialLink>
                <SocialLink href={selectedArtist.apple_music_url} label="Apple Music"><FaApple /></SocialLink>
                <SocialLink href={selectedArtist.youtube_url} label="YouTube"><FaYoutube /></SocialLink>
                <SocialLink href={selectedArtist.instagram_url} label="Instagram"><FaInstagram /></SocialLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SocialLink({ href, label, children }: { href?: string; label: string; children: React.ReactNode }) {
  if (!href) return null

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      {children}
    </a>
  )
}
