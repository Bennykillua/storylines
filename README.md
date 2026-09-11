# Storylines

A cinematic live-music website for an intimate multi-artist performance platform.

## Local setup

1. Install dependencies:
   npm install
2. Copy `.env.example` to `.env` and add your Google Apps Script endpoint:
   cp .env.example .env
3. Start the app:
   npm run dev

## Google Sheets setup

Create a Google Sheet with these tabs:

### Artists
Columns:
- id
- name
- genre
- bio
- photo_url
- spotify_url
- youtube_url
- instagram_url
- featured
- show_id

### Shows
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

### Stats
Columns:
- metric
- value
- label

Example rows:
- shows | 12 | Shows
- artists | 48 | Artists featured
- attendance | 8500 | People in the room
- growth | 32 | Audience growth

### Submissions
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

### Site Content
Columns:
- key
- value

## Apps Script API

Use a simple Google Apps Script web app that reads public data and accepts submissions to the Submissions tab.

This app should expose a POST endpoint with a JSON body like:

- { "action": "read" }
- { "action": "submit", "payload": { ...artist form values... } }

Do not commit real credentials. Keep the endpoint in `.env` only.

## Fallback behavior

If the API is unavailable, the site falls back to sample data so the design still works while the sheet is being configured.
