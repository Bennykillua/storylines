import type { Show, StorylinesData } from '../data/sampleData'
import { StorylinesImage } from '../components/StorylinesImage'

type ShowsPageProps = {
  data: StorylinesData
}

export function ShowsPage({ data }: ShowsPageProps) {
  const upcoming = data.shows.filter((show) => show.status === 'upcoming')
  const past = data.shows.filter((show) => show.status === 'past')

  return (
    <div className="container page-section">
      <section className="intro-block">
        <p className="eyebrow">Shows</p>
        <h1>The shows.</h1>
      </section>

      <section className="shows-list">
        {upcoming.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </section>

      <section className="archive-block">
        <p className="eyebrow">Past shows</p>
        <div className="shows-list archive-list">
          {past.map((show) => (
            <ShowCard key={show.id} show={show} compact />
          ))}
        </div>
      </section>
    </div>
  )
}

function ShowCard({ show, compact = false }: { show: Show; compact?: boolean }) {
  return (
    <article className={compact ? 'show-card compact' : 'show-card'}>
      <div className="show-card-image">
        <StorylinesImage source={show.image_url} alt={show.title} />
      </div>
      <div className="show-card-body">
        <div className="show-date-block">
          <span className="show-date">{new Date(show.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
        </div>
        <div className="show-text">
          <h3>{show.title}</h3>
          <p>{show.venue}</p>
          <p>{show.location}</p>
          <p>{show.artists.join(' • ')}</p>
          {!compact && <p className="show-description">{show.description}</p>}
          {show.ticket_url && (
            <a href={show.ticket_url} target="_blank" rel="noreferrer" className="text-link">
              {compact ? 'View recap' : 'Get tickets →'}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
