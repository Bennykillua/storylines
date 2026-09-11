I want you to build a real website for a live music platform called STORYLINES.

IMPORTANT:
This is not a generic AI startup website.
Do not make it look like a SaaS landing page.
Do not use the typical AI-generated website aesthetic.
Do not use purple gradients, excessive rounded cards, Inter, Roboto, Space Grotesk, or generic dashboard components.

Use the frontend-design skill you have available.

I am not a developer, so keep the project understandable and easy for me to edit in VS Code.

==================================================
ABOUT STORYLINES
==================================================

Storylines is an intimate live music show.

Each show brings together 4 artists from different genres and puts them in one intimate room.

The idea is:

4 artists.
1 room.
Different stories.

Storylines is about discovering artists, experiencing live music up close, and creating a cultural community around music.

It should feel like a real music/culture brand, not a technology company.

The audience should feel:
- intimate
- warm
- artistic
- Nigerian/African
- contemporary
- slightly nostalgic
- human
- credible
- culturally aware

==================================================
THE LOGO
==================================================

There is a Storylines logo in:

public/images/storylines-logo.png

Use the supplied logo.

DO NOT recreate the logo with text.
DO NOT replace it with a generic text logo.

The logo is a handwritten/neon-style "STORYLINES" sign with a warm yellow glow against red.

Use this as the visual inspiration for the site.

==================================================
VISUAL DIRECTION
==================================================

The visual identity should feel like entering a small live music room at night.

Primary colors:

Deep black/brown:
#130D0B

Warm dark brown:
#211512

Storylines red:
#B71927

Deep red:
#7E101A

Neon yellow:
#FFD84A

Warm cream:
#F4E8D7

Muted cream:
#CDBEAA

Use the red and yellow as accents.

DO NOT make every section red.

Most of the website should use dark warm backgrounds, cream typography and photography.

Use the neon yellow sparingly for:
- small highlights
- links
- active states
- buttons
- small decorative lines

The red should appear in:
- photography
- backgrounds
- hover states
- selected sections
- visual accents

The website should feel cinematic.

==================================================
TYPOGRAPHY
==================================================

Do not use Arial, Inter, Roboto or generic system fonts.

Use a distinctive editorial serif for large headlines.

Use a clean, understated sans-serif for body text and navigation.

The headline typography should feel like:
- independent music magazine
- cultural publication
- concert poster
- editorial photography book

Large headlines should be confident and sometimes oversized.

Do not overuse text.

Let photography breathe.

==================================================
PHOTOGRAPHY
==================================================

Photography is extremely important.

Use large, atmospheric photos of:
- Nigerian/African musicians performing
- intimate concert rooms
- microphones
- audiences
- musicians backstage
- instruments
- stage lighting
- people listening

Images should feel candid and documentary rather than corporate stock photography.

Use warm/red/orange stage lighting where appropriate.

Do not use cheesy stock photos of people smiling at cameras.

If real Storylines photographs are not available yet, use clearly replaceable image placeholders and structure the project so I can easily replace the image URLs later.

==================================================
SITE STRUCTURE
==================================================

Build these 5 main pages:

1. HOME
2. STARS
3. SHOWS
4. ABOUT
5. PARTNER WITH STORYLINES

Navigation:

Storylines logo

Home
Stars
Shows
About
Partner

Primary CTA:
Apply to Perform

==================================================
PAGE 1 — HOME
==================================================

Hero section:

STORYLINES

4 artists.
1 room.
Different stories.

Supporting copy:

An intimate live music show bringing together four artists from different genres for one unforgettable night.

Buttons:

Apply to Perform
Discover the Stars

Hero image should feel like an intimate live performance.

Do not make the hero look like a SaaS hero with text on the left and a random rounded image on the right.

Make it cinematic and editorial.

--------------------------------------------------

IMPACT / NUMBERS
--------------------------------------------------

Immediately after the hero, show Storylines' real numbers.

Examples:

12
Shows

48
Artists featured

8,500+
People in the room

32%
Audience growth

These are PLACEHOLDER values.

The important thing is that these numbers must come from Google Sheets.

Do not hard-code them in the React components.

If I change the Google Sheet from:

12 shows

to:

13 shows

the website should display 13.

--------------------------------------------------

NEXT SHOW
--------------------------------------------------

Show the next upcoming Storylines event.

Display:

Date
Venue
Location
Artists
Ticket link

Example:

NOV
16

Lagos
The Palms Annex

4 artists.
One room.

Get tickets →

This data should come from Google Sheets.

--------------------------------------------------

THE STORYLINES IDEA
--------------------------------------------------

A section explaining:

More than just a show.

Storylines is a cultural platform built around live music, emerging artists and intimate experiences.

Include a strong photograph.

Keep the copy short.

--------------------------------------------------

FEATURED STARS
--------------------------------------------------

Show 4 or 6 artists.

Large photography.

Name
Genre
Short description

CTA:

Meet the Stars →

--------------------------------------------------

SPONSOR / PARTNER SECTION
--------------------------------------------------

Create a section specifically useful for potential sponsors.

Headline:

Built around music.
Growing through community.

Show 3 or 4 real metrics from Google Sheets.

Example:

12
Shows

48
Artists

8.5K+
Audience

4
Artists per show

Then:

Storylines gives brands a way to connect with an engaged audience through authentic music and culture.

CTA:

Partner with Storylines →

Do not make this feel like a corporate sponsorship pitch.

--------------------------------------------------

ARTIST APPLICATION
--------------------------------------------------

Include an "Apply to Perform" section on the homepage.

Headline:

Think you belong on the next Storylines?

Fields:

Artist name
Email
Phone / Instagram
Genre
YouTube link
Spotify link
Short message

Button:

Submit application

The YouTube link should be required.

The form should send the submission to the Google Sheet.

Do not require artists to create accounts.

Include basic spam protection such as a hidden honeypot field.

After successful submission:

Thank you.
We'll listen and get back to you.

==================================================
PAGE 2 — STARS
==================================================

This is the artist discovery page.

Navigation label:
Stars

Headline:

Meet the artists behind Storylines.

Subheading:

Four artists. Different genres. One room.

Create a beautiful editorial gallery.

Each artist card should show:

Artist photograph
Artist name
Genre
Short bio
Spotify icon/link
YouTube icon/link

Clicking an artist opens an artist detail page or modal.

Artist detail should include:

Large portrait
Name
Genre
Short bio
Spotify link
YouTube link
Instagram link
Storylines show they appeared on

Keep this page visual.

It should feel more like a music magazine or photography archive than a directory.

Add simple genre filters if useful:

All
Afrobeats
R&B
Hip Hop
Alternative
Soul
Jazz
Other

These genres should also come from the data where possible.

==================================================
PAGE 3 — SHOWS
==================================================

Headline:

The shows.

Show upcoming events first.

Each event:

Date
Venue
Location
Artists
Event image
Ticket link

Then:

Past shows

Each past show should have:

Date
Venue
Artists
Photos if available
Short recap

This page should eventually become Storylines' archive.

Make the design feel like a concert archive, not an events SaaS dashboard.

==================================================
PAGE 4 — ABOUT
==================================================

Headline:

About Storylines

Opening idea:

Music sounds different when you're close enough to hear the story.

Explain:

Storylines is an intimate live music experience that brings together four artists from different genres for one night.

Explain why the format exists.

Explain the importance of:
- emerging artists
- live music
- community
- discovery
- intimate experiences

Include:

Our mission

To give emerging and established artists a platform to share their sound, build new audiences and become part of a growing creative community.

Include beautiful photography.

Keep this page emotional and human.

Do not write corporate mission/vision fluff.

==================================================
PAGE 5 — PARTNER WITH STORYLINES
==================================================

This page is specifically for brands, executives and organisations.

Headline:

Partner with Storylines.

Opening:

We work with brands and organisations that believe in the power of music, culture and community.

Create two sections:

FOR BRANDS

Possible partnerships:
- Event sponsorship
- Brand experiences
- Product integrations
- Content collaborations
- Audience engagement

FOR ORGANISATIONS / EXECUTIVES

Possible partnerships:
- Private experiences
- Cultural initiatives
- Community development
- Talent discovery
- Long-term partnerships

Then show Storylines' impact numbers from Google Sheets.

Example:

Shows
Artists
Audience
Audience growth

Then a simple contact form:

Name
Organisation
Email
I'm interested in:
Message

Button:

Start a conversation

Do not make this sound like a generic agency website.

==================================================
GOOGLE SHEETS BACKEND
==================================================

Use Google Sheets as the simple content management backend.

I am not a developer.

I want to be able to open a Google Sheet and change:

- artist information
- artist photos
- Spotify links
- YouTube links
- show information
- ticket links
- Storylines statistics

without editing the website code.

Use a simple Google Apps Script API layer if that is the simplest reliable approach.

Do not build an unnecessarily complicated backend.

The website should read public content from Google Sheets.

The artist submission form should write new submissions to the Submissions sheet.

==================================================
GOOGLE SHEET STRUCTURE
==================================================

Create documentation explaining that the Google Sheet should contain these tabs:

TAB 1: Artists

Columns:

id
name
genre
bio
photo_url
spotify_url
youtube_url
instagram_url
featured
show_id

TAB 2: Shows

Columns:

id
date
title
venue
location
description
image_url
ticket_url
status

status examples:

upcoming
past

TAB 3: Stats

Columns:

metric
value
label

Examples:

shows | 12 | Shows
artists | 48 | Artists featured
attendance | 8500 | People in the room
growth | 32 | Audience growth

TAB 4: Submissions

Columns:

timestamp
artist_name
email
phone
instagram
genre
youtube_url
spotify_url
message
status

TAB 5: Site Content

Columns:

key
value

This can contain editable text such as:

hero_title
hero_description
about_intro
partner_intro

==================================================
IMPORTANT BACKEND RULE
==================================================

Do not expose private Google credentials in frontend code.

Use a Google Apps Script web app endpoint or another simple secure method.

Put the API URL in an environment variable:

VITE_GOOGLE_SHEETS_API_URL

Create:

.env.example

Never commit real credentials.

Create clear setup instructions for me.

==================================================
TECHNOLOGY
==================================================

Use:

React
Vite
TypeScript
CSS or a simple styling system

Keep the architecture simple.

Do not install 40 unnecessary packages.

Use reusable components.

Suggested structure:

src/
  components/
  pages/
  services/
  data/
  styles/

public/
  images/

Create a simple API/service layer for Google Sheets.

If Google Sheets is unavailable, the website should gracefully fall back to local sample data so the site does not completely break.

==================================================
RESPONSIVE DESIGN
==================================================

The site must work beautifully on:

Desktop
Tablet
Mobile

Do not simply shrink the desktop version.

On mobile:
- typography should remain beautiful
- photography should remain prominent
- navigation should become a simple menu
- forms should be easy to use
- artist cards should become single-column or horizontal scroll where appropriate
- buttons should be touch-friendly

==================================================
ANIMATION
==================================================

Use subtle motion.

Examples:

- images gently reveal on page load
- text fades/slides into position
- artist cards have subtle hover movement
- buttons have understated hover states
- page transitions can be subtle

Do NOT add:
- excessive bouncing
- spinning
- giant parallax effects
- random animations everywhere

The music and photography should do most of the work.

==================================================
DESIGN RULES
==================================================

DO:

- use strong editorial typography
- use large photography
- use asymmetrical layouts occasionally
- use generous whitespace
- use warm colors
- use subtle texture
- use the Storylines logo
- create a distinctive visual identity
- make the website feel like a real cultural brand
- make sponsor information credible
- make the artist gallery beautiful

DO NOT:

- make it look like a SaaS landing page
- use generic glassmorphism
- use purple gradients
- use excessive rounded cards
- use Inter
- use generic stock photography
- use fake testimonials
- use fake sponsor logos
- use fake statistics without clearly marking them as sample data
- use meaningless marketing jargon
- make every section look identical
- create huge walls of text
- use "revolutionary", "seamless", "unlock", "empower" or other generic AI marketing language

==================================================
IMPORTANT CONTENT RULE
==================================================

If actual Storylines information is missing, use clearly marked placeholder content.

Do not invent real sponsors.
Do not invent real attendance numbers.
Do not invent real artists.

Make sample data easy to replace through Google Sheets.

==================================================
FINAL EXPERIENCE
==================================================

When someone visits the site, they should immediately understand:

Storylines is a live music experience.

Four artists from different genres.

One intimate room.

They can:

Discover artists
Find upcoming shows
Learn about Storylines
Apply to perform
Partner with Storylines

The website should feel like a place people want to belong to.

==================================================
WORKFLOW
==================================================

Do not dump a huge amount of code at me immediately.

First:

1. Inspect the project.
2. Inspect the Storylines logo in public/images/storylines-logo.png.
3. Confirm the visual direction.
4. Create the project structure.
5. Build the Home page first.
6. Run it locally.
7. Check the design.
8. Then build Stars.
9. Then Shows.
10. Then About.
11. Then Partner.
12. Then connect Google Sheets.
13. Then test the artist submission form.
14. Test desktop and mobile.
15. Fix obvious visual issues.

Before considering the project finished, check every page for:
- broken links
- missing images
- mobile layout issues
- typography issues
- inaccessible buttons/forms
- console errors
- Google Sheets failures
- empty states

The finished website should look like something a real independent music/culture brand could launch, not something generated from a website template.