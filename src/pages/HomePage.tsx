import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Artist, Stat, StorylinesData } from '../data/sampleData'
import { submitArtistApplication } from '../services/content'
import { StorylinesImage } from '../components/StorylinesImage'

const defaultForm = {
  artist_name: '',
  email: '',
  phone: '',
  instagram: '',
  genre: '',
  youtube_url: '',
  spotify_url: '',
  message: '',
}

type HomePageProps = {
  data: StorylinesData
}

export function HomePage({ data }: HomePageProps) {
  const [formState, setFormState] = useState(defaultForm)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [honeypot, setHoneypot] = useState('')

  const upcomingShow = useMemo(
    () => data.shows.find((show) => show.status === 'upcoming') ?? data.shows[0],
    [data.shows],
  )

  const [featuredArtists] = useState(() =>
    [...data.artists.filter((artist) => artist.featured)].sort(() => Math.random() - 0.5).slice(0, 4),
  )

  useEffect(() => {
    if (window.location.hash !== '#apply') return

    requestAnimationFrame(() => {
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  const handleFieldChange = (field: keyof typeof defaultForm, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (honeypot) {
      return
    }

    const result = await submitArtistApplication({
      artist_name: formState.artist_name,
      email: formState.email,
      phone: formState.phone,
      instagram: formState.instagram,
      genre: formState.genre,
      youtube_url: formState.youtube_url,
      spotify_url: formState.spotify_url,
      message: formState.message,
    })

    if (result.ok) {
      setStatus('success')
      setFormState(defaultForm)
    } else {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Live music / Lagos</p>
            <h1>{data.siteContent.hero_title || 'STORYLINES'}</h1>
            <p className="hero-tagline">{data.siteContent.hero_description || '4 artists. 1 room. Different stories.'}</p>
            <p className="hero-text">
              {data.siteContent.hero_copy ||
                'An intimate live music show bringing together four artists from different genres for one unforgettable night.'}
            </p>
            <div className="cta-row">
              <a href="#apply" className="button primary">
                Apply to Perform
              </a>
              <Link to="/stars" className="button secondary">
                Discover the Stars
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Intimate performance scene">
            <div className="hero-photo-card">
              <StorylinesImage
                source={data.siteContent.hero_image_url || 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80'}
                alt="Musicians in an intimate live room"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {data.stats.map((stat: Stat) => (
            <div key={stat.metric} className="stat-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section next-show-section">
        <div className="container next-show-layout">
          <div className="show-date-panel">
            <span className="month">NOV</span>
            <span className="day">16</span>
          </div>

          <div className="show-details">
            <p className="eyebrow">Next show</p>
            <h2>{upcomingShow.title}</h2>
            <p className="location-line">{upcomingShow.location}</p>
            <p className="venue-line">{upcomingShow.venue}</p>
            <p className="show-artist-line">4 artists. One room.</p>
            <a href={upcomingShow.ticket_url} className="text-link" target="_blank" rel="noreferrer">
              Get tickets →
            </a>
          </div>

          <div className="show-image-card">
            <StorylinesImage source={upcomingShow.image_url} alt={upcomingShow.title} />
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-layout">
          <div className="story-photo">
            <StorylinesImage
              source={data.siteContent.story_image_url || 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1200&q=80'}
              alt="Live crowd listening closely"
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow">The Storylines idea</p>
            <h2>{data.siteContent.story_intro || 'More than just a show.'}</h2>
            <p>
              {data.siteContent.story_body ||
                'Storylines is a cultural platform built around live music, emerging artists and intimate experiences.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section stars-section">
        <div className="container section-headline-row">
          <div>
            <p className="eyebrow">Featured stars</p>
            <h2>Made for listening close.</h2>
          </div>
          <Link to="/stars" className="text-link">
            Meet the Stars →
          </Link>
        </div>

        <div className="container star-grid">
          {featuredArtists.map((artist: Artist) => (
            <article key={artist.id} className="featured-artist-card">
              <StorylinesImage source={artist.photo_url} alt={artist.name} />
              <div className="featured-artist-info">
                <h3>{artist.name}</h3>
                <span>{artist.genre}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section sponsor-section">
        <div className="container sponsor-layout">
          <div className="sponsor-copy">
            <p className="eyebrow">Partnership</p>
            <h2>Built around music. Growing through community.</h2>
            <p>
              Storylines gives brands a way to connect with an engaged audience through authentic music and culture.
            </p>
            <Link to="/partner" className="text-link">
              Partner with Storylines →
            </Link>
          </div>
        </div>
      </section>

      <section id="apply" className="section apply-section">
        <div className="container apply-shell">
          <div className="apply-header">
            <p className="eyebrow">Apply to perform</p>
            <h2>Think you belong on the next Storylines?</h2>
          </div>

          <form className="apply-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <label>
                <span>Artist name</span>
                <input
                  type="text"
                  value={formState.artist_name}
                  onChange={(event) => handleFieldChange('artist_name', event.target.value)}
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(event) => handleFieldChange('email', event.target.value)}
                  required
                />
              </label>
              <label>
                <span>Phone / Instagram</span>
                <input
                  type="text"
                  value={formState.phone}
                  onChange={(event) => handleFieldChange('phone', event.target.value)}
                />
              </label>
              <label>
                <span>Genre</span>
                <input
                  type="text"
                  value={formState.genre}
                  onChange={(event) => handleFieldChange('genre', event.target.value)}
                  required
                />
              </label>
              <label>
                <span>YouTube link</span>
                <input
                  type="url"
                  value={formState.youtube_url}
                  onChange={(event) => handleFieldChange('youtube_url', event.target.value)}
                  required
                />
              </label>
              <label>
                <span>Spotify link</span>
                <input
                  type="url"
                  value={formState.spotify_url}
                  onChange={(event) => handleFieldChange('spotify_url', event.target.value)}
                />
              </label>
            </div>

            <label className="full-width">
              <span>Short message</span>
              <textarea
                value={formState.message}
                onChange={(event) => handleFieldChange('message', event.target.value)}
                rows={5}
              />
            </label>

            <div className="honeypot" aria-hidden="true">
              <label>
                Leave this blank
                <input
                  type="text"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </label>
            </div>

            <div className="apply-form-footer">
              <button type="submit" className="button primary">
                Submit application
              </button>
              {status === 'success' && (
                <p className="form-status success">Thank you. We will listen and get back to you.</p>
              )}
              {status === 'error' && <p className="form-status error">Please try again.</p>}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
