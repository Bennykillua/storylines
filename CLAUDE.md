# Storylines Project Blueprint

This document captures the project so it can be rebuilt or recreated in a fresh workspace.

## Project overview

Storylines is a live music platform and cultural brand centered on intimate performances. Each show brings together four artists from different genres in one room. The site should feel warm, human, cultural, cinematic, and editorial rather than startup-like or SaaS-like.

The website includes five main pages:

- Home
- Stars
- Shows
- About
- Partner with Storylines

## Visual direction

Use the supplied logo at public/images/storylines-logo.png without recreating it as text.

Primary palette:
- Deep black/brown: #130D0B
- Warm dark brown: #211512
- Storylines red: #B71927
- Deep red: #7E101A
- Neon yellow: #FFD84A
- Warm cream: #F4E8D7
- Muted cream: #CDBEAA

Design intent:
- intimate
- warm
- artistic
- Nigerian/African
- contemporary
- slightly nostalgic
- human
- credible
- culturally aware

The site should mostly use dark warm backgrounds, cream typography, and atmospheric photography. Use red and yellow as accents, with yellow kept relatively sparing for highlights and active states. Avoid generic AI landing-page visuals, purple gradients, glassmorphism, rounded card-heavy layouts, and default SaaS UI aesthetics.

Typography:
- Use a distinctive editorial serif for headlines.
- Use a clean understated sans-serif for body text and navigation.
- Avoid Arial, Inter, Roboto, and generic system fonts where possible.

## Architecture

This project is built with:
- React
- Vite
- TypeScript
- CSS
- React Router

Recommended directory structure:
- src/components
- src/pages
- src/services
- src/data
- src/styles
- public/images

## App structure used in this build

Main app flow:
- App.tsx contains the routing for the five pages.
- Layout.tsx contains the sticky header, nav, and footer.
- HomePage.tsx contains hero, stats, next show, story section, featured stars, sponsorship section, and application form.
- StarsPage.tsx contains the artist discovery gallery with filters and artist detail modal.
- ShowsPage.tsx contains upcoming and past events archive.
- AboutPage.tsx contains the mission and cultural story.
- PartnerPage.tsx contains partnership info and the contact form.

## Data layer

The frontend should read public content from Google Sheets through a simple API endpoint.

Do not hard-code key values that should be editable in Google Sheets. The site should gracefully fallback to local sample data when the Google endpoint is unavailable.

Environment variable:
- VITE_GOOGLE_SHEETS_API_URL

Example file:
- .env.example

The site uses a simple service layer in src/services/content.ts that supports:
- read action via fetch to API URL
- submit action for artist applications
- fallback to sample data if Google Sheets is not available

## Google Sheets backend requirement

Use a Google Apps Script web app or similar simple endpoint.

Important: do not expose private Google credentials in frontend code.

The site should read public content from Google Sheets and write artist submissions to a Submissions sheet.

### Required tabs

Tab: Artists
Columns:
- id
- name
- genre
- bio
- photo_url
- spotify_url
- apple_music_url
- youtube_url
- instagram_url
- featured
- show_id

Tab: Shows
Columns:
- id
- date
- title
- venue
- location
- description
- image_url
- ticket_url
- status

status values:
- upcoming
- past

Tab: Stats
Columns:
- metric
- value
- label

Example values:
- shows | 12 | Shows
- artists | 48 | Artists featured
- attendance | 8500 | People in the room
- growth | 32 | Audience growth

Tab: Submissions
Columns:
- timestamp
- artist_name
- email
- phone
- instagram
- genre
- youtube_url
- spotify_url
- message
- status

Tab: Site Content
Columns:
- key
- value

Editable content examples:
- hero_title
- hero_description
- hero_copy
- story_intro
- story_body
- about_intro
- partner_intro

## Form requirements

Artist application form:
- Artist name
- Email
- Phone / Instagram
- Genre
- YouTube link
- Spotify link
- Short message

Validation requirements:
- YouTube link required
- no account creation required
- hidden honeypot field for basic spam protection
- on success: “Thank you. We will listen and get back to you.”

## Homepage content requirements

Hero includes:
- STORYLINES
- 4 artists. 1 room. Different stories.
- supporting copy
- Apply to Perform button
- Discover the Stars button
- cinematic editorial image

Impact section:
- stats values should be editable in Google Sheets
- numbers are not hard-coded in the React components if sheet data is connected

Next show section:
- date
- venue
- location
- artists
- ticket link

The Storylines idea section:
- short cultural copy
- strong photo

Featured stars section:
- 4 or more artist cards
- large photography
- name, genre, short description
- CTA: Meet the Stars →

Sponsor / partner section:
- headline: “Built around music. Growing through community.”
- metrics from Google Sheets
- CTA: Partner with Storylines →

Apply to Perform section:
- on home page
- artist submission form

## Stars page requirements

Headline:
- Meet the artists behind Storylines.

Subheading:
- Four artists. Different genres. One room.

Artist cards:
- photo
- name
- genre
- short bio
- optional Spotify / YouTube links

Filters:
- All
- Afrobeats
- R&B
- Hip Hop
- Alternative
- Soul
- Jazz
- Other

Artist detail modal or detail page should include:
- large portrait
- name
- genre
- short bio
- Spotify link
- YouTube link
- Instagram link
- show they appeared on

## Shows page requirements

Headline:
- The shows.

Order:
- upcoming events first
- past events as an archive

Each show should include:
- date
- venue
- location
- artists
- event image
- ticket link

Past shows should include date, venue, artists, optional photos, and a short recap.

## About page requirements

Headline:
- About Storylines

Opening idea:
- Music sounds different when you're close enough to hear the story.

Need to capture:
- intimate live music experience
- four artists from different genres in one room
- why the format exists
- importance of emerging artists, live music, community, discovery, intimate experiences
- mission statement for the brand

## Partner page requirements

Headline:
- Partner with Storylines.

Opening:
- We work with brands and organisations that believe in the power of music, culture and community.

Two sections:
- For brands
  - event sponsorship
  - brand experiences
  - product integrations
  - content collaborations
  - audience engagement
- For organisations / executives
  - private experiences
  - cultural initiatives
  - community development
  - talent discovery
  - long-term partnerships

Then show Stats / impact numbers and a simple contact form.

## Technical setup instructions

Install dependencies:
- npm install

Copy env file:
- cp .env.example .env

Run locally:
- npm run dev

Build project:
- npm run build

## Sample data

If Google Sheets is unavailable, the app falls back to local sample data in:
- src/data/sampleData.ts

This sample data includes mock artists, shows, stats, and site content placeholders. It should be replaced with real sheet values later.

## Notes for future edits

To customize the site without reworking structure:
- update colors and typography in src/index.css
- update page content in src/pages
- update data source in src/services/content.ts
- replace image URLs in Google Sheets or sampleData.ts
- edit nav and footer in src/components/Layout.tsx

## Verification checklist

Before calling the project complete, ensure:
- all pages render without broken routes
- homepage has the correct hero, stats, next show, and application form
- artist gallery works and modal opens correctly
- mobile layout remains readable and usable
- forms are accessible and usable
- no console errors or broken image links
- Google Sheets failures gracefully fall back to local sample data

## Important constraints

Do not:
- create a generic AI startup landing page
- use purple gradients, glassmorphism, or dashboard-like UI
- use Inter, Roboto, or other generic tech fonts
- invent fake sponsorships or attendance stats without clearly marking them as sample or editable data
- make every section identical or overly corporate
- overuse jargon like “revolutionary,” “seamless,” or “unlock”

## Current implementation status

This build includes:
- responsive multi-page React app
- editorial dark warm visual system
- logo integration
- Google Sheets service layer with fallback sample data
- artist submission form with honeypot
- responsive layout for desktop and mobile

## Useful commands

```bash
npm install
cp .env.example .env
npm run dev
npm run build
```

## Final note

This project is intended to feel like a real independent music and culture brand, not a technology product. The site should feel like a place people want to belong to, centered on discovery, live music, community, and intimate rooms.
