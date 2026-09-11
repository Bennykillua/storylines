import type { StorylinesData } from '../data/sampleData'
import { StorylinesImage } from '../components/StorylinesImage'

type AboutPageProps = {
  data: StorylinesData
}

export function AboutPage({ data }: AboutPageProps) {
  return (
    <div className="container page-section about-page">
      <section className="intro-block">
        <p className="eyebrow">About</p>
        <h1>About Storylines</h1>
        <p className="lede">{data.siteContent.about_intro || 'Music sounds different when you are close enough to hear the story.'}</p>
      </section>

      <section className="about-story">
        <div className="about-photo">
          <StorylinesImage
            source={data.siteContent.about_image_url || 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80'}
            alt="Audience gathered in a warm music room"
          />
        </div>
        <div className="about-copy">
          <p>
            Storylines is an intimate live music experience that brings together four artists from different genres for one night.
          </p>
          <p>
            The format exists to make room for discovery: to let artists share sound with an audience that is close enough to feel it, hear the textures in the voice and remember the room long after the last note.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div>
          <p className="eyebrow">Our mission</p>
          <h2>To give emerging and established artists a platform to share their sound, build new audiences and become part of a growing creative community.</h2>
        </div>
        <ul className="mission-list">
          <li>Emerging artists</li>
          <li>Live music</li>
          <li>Community</li>
          <li>Discovery</li>
          <li>Intimate experiences</li>
        </ul>
      </section>
    </div>
  )
}
