import type { Artist } from '../data/sampleData'
import { StorylinesImage } from './StorylinesImage'
import { FaApple, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'

type ArtistCardProps = {
  artist: Artist
  onSelect: (artist: Artist) => void
}

export function ArtistCard({ artist, onSelect }: ArtistCardProps) {
  return (
    <article className="artist-card">
      <button type="button" className="artist-card-trigger" onClick={() => onSelect(artist)}>
        <div className="artist-image-wrap">
          <StorylinesImage source={artist.photo_url} alt={artist.name} className="artist-image" />
        </div>
        <div className="artist-card-body">
          <div className="artist-meta-row">
            <span className="artist-name">{artist.name}</span>
            <span className="artist-genre">{artist.genre}</span>
          </div>
          <p>{artist.bio}</p>
        </div>
      </button>
      <div className="artist-social-links" aria-label={`${artist.name} links`}>
        <ArtistSocialLink href={artist.spotify_url} label="Spotify"><FaSpotify /></ArtistSocialLink>
        <ArtistSocialLink href={artist.apple_music_url} label="Apple Music"><FaApple /></ArtistSocialLink>
        <ArtistSocialLink href={artist.youtube_url} label="YouTube"><FaYoutube /></ArtistSocialLink>
        <ArtistSocialLink href={artist.instagram_url} label="Instagram"><FaInstagram /></ArtistSocialLink>
      </div>
    </article>
  )
}

function ArtistSocialLink({ href, label, children }: { href?: string; label: string; children: React.ReactNode }) {
  if (!href) return null

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      {children}
    </a>
  )
}
