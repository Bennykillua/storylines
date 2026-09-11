import type { StorylinesData } from '../data/sampleData'

type PartnerPageProps = {
  data: StorylinesData
}

export function PartnerPage({ data }: PartnerPageProps) {
  return (
    <div className="container page-section partner-page">
      <section className="intro-block narrow-block">
        <p className="eyebrow">Partner</p>
        <h1>Partner with Storylines.</h1>
        <p className="lede">{data.siteContent.partner_intro || 'We work with brands and organisations that believe in the power of music, culture and community.'}</p>
      </section>

      <section className="partner-columns">
        <div className="partner-panel">
          <p className="eyebrow">For brands</p>
          <ul>
            <li>Event sponsorship</li>
            <li>Brand experiences</li>
            <li>Product integrations</li>
            <li>Content collaborations</li>
            <li>Audience engagement</li>
          </ul>
        </div>

        <div className="partner-panel">
          <p className="eyebrow">For organisations / executives</p>
          <ul>
            <li>Private experiences</li>
            <li>Cultural initiatives</li>
            <li>Community development</li>
            <li>Talent discovery</li>
            <li>Long-term partnerships</li>
          </ul>
        </div>
      </section>

      <section className="impact-panel">
        <p className="eyebrow">Impact</p>
        <div className="mini-metrics">
          {data.stats.map((stat) => (
            <div key={stat.metric}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-panel">
        <div className="contact-intro">
          <p className="eyebrow">Start a conversation</p>
          <h2>Let’s build something with music at the centre.</h2>
          <p>Tell us what you are working on and we will get back to you.</p>
        </div>

        <form className="partner-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            <span>Organisation</span>
            <input type="text" placeholder="Organisation" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="Email" required />
          </label>
          <label>
            <span>What are you interested in?</span>
            <select defaultValue="">
              <option value="" disabled>Select one</option>
              <option>Event sponsorship</option>
              <option>Brand experience</option>
              <option>Content collaboration</option>
              <option>Private experience</option>
            </select>
          </label>
          <label className="full-width">
            <span>Message</span>
            <textarea rows={4} placeholder="Tell us about your idea..." required />
          </label>
          <button type="submit" className="button primary compact-button partner-submit">
            Start a conversation
          </button>
        </form>
      </section>
    </div>
  )
}
