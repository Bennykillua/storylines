# STORYLINES Google Sheet starter pack

This folder contains a starter CSV set for the Storylines app. The `Artists` tab includes an optional `apple_music_url` column for artist profiles.

## Import into Google Sheets

1. Open Google Drive.
2. Create a new Google Sheet.
3. In the first tab, rename it to `Artists` and paste the contents of `Artists.csv`.
4. Add new tabs named exactly:
   - `Shows`
   - `Stats`
   - `Submissions`
   - `Site Content`
5. Paste the matching CSV data into each sheet.

To change the editorial images, update these rows in the `Site Content` tab with direct image URLs, such as Cloudinary URLs:

- `hero_image_url` changes the large homepage hero image.
- `story_image_url` changes the second homepage image.
- `about_image_url` changes the About page image.

## Apps Script deployment

1. In the Google Sheet, open Extensions > Apps Script.
2. Paste the script below.
3. Save and deploy as a Web app.
4. Set access to "Anyone".
5. Copy the Web app URL into your local `.env` as `VITE_GOOGLE_SHEETS_API_URL`.

```javascript
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'read';

  if (action === 'read') {
    const payload = {
      artists: readSheetAsObjects('Artists'),
      shows: readSheetAsObjects('Shows'),
      stats: readSheetAsObjects('Stats'),
      siteContent: readKeyValueSheet('Site Content'),
      submissions: readSheetAsObjects('Submissions')
    };
    return jsonResponse(payload);
  }

  return jsonResponse({ ok: false, error: 'Unsupported action' }, 400);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const action = (data && data.action) || 'submit';

    if (action === 'submit') {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Submissions');
      if (!sheet) {
        throw new Error('Submissions sheet not found');
      }

      const payload = {
        timestamp: new Date().toISOString(),
        artist_name: data.artist_name || '',
        email: data.email || '',
        phone: data.phone || '',
        instagram: data.instagram || '',
        genre: data.genre || '',
        youtube_url: data.youtube_url || '',
        spotify_url: data.spotify_url || '',
        message: data.message || '',
        status: 'new'
      };

      sheet.appendRow([
        payload.timestamp,
        payload.artist_name,
        payload.email,
        payload.phone,
        payload.instagram,
        payload.genre,
        payload.youtube_url,
        payload.spotify_url,
        payload.message,
        payload.status
      ]);

      return jsonResponse({ ok: true, message: 'Submission saved successfully' });
    }

    return jsonResponse({ ok: false, error: 'Unsupported action' }, 400);
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message || 'Unknown error' }, 500);
  }
}

function readSheetAsObjects(sheetName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return [];

  const values = sheet.getDataRange().getValues();
  if (!values || values.length < 2) return [];

  const headers = values[0].map(String);
  return values.slice(1)
    .filter(row => row.some(cell => String(cell).trim() !== ''))
    .map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header.trim()] = row[index] ?? '';
      });
      return obj;
    });
}

function readKeyValueSheet(sheetName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return {};

  const rows = sheet.getDataRange().getValues();
  if (!rows || rows.length < 2) return {};

  const values = {};
  rows.slice(1).forEach(row => {
    const key = row[0];
    const value = row[1];
    if (key) values[String(key).trim()] = value ?? '';
  });
  return values;
}

function jsonResponse(payload, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(payload));
  output.setMimeType(ContentService.MimeType.JSON);
  if (statusCode) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: payload && payload.error ? payload.error : 'Request failed' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return output;
}
```

## Notes

- The app is designed to fail gracefully to local sample data if the sheet URL is missing or the script is unavailable.
- Update the data in Google Sheets instead of changing the frontend code for most content updates.
