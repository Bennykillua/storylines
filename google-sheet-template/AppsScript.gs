function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'read';
  return handleAction(action, e && e.parameter ? e.parameter : {});
}

function doPost(e) {
  let request = {};

  try {
    const raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    request = raw ? JSON.parse(raw) : {};
  } catch (err) {
    request = {};
  }

  const action = request.action || 'read';
  return handleAction(action, request);
}

function handleAction(action, data) {
  if (action === 'read') {
    const payload = {
      artists: readSheetAsObjects('Artists'),
      shows: readSheetAsObjects('Shows'),
      stats: readSheetAsObjects('Stats'),
      siteContent: readKeyValueSheet('Site Content')
    };

    return jsonResponse({ ok: true, data: payload });
  }

  if (action === 'submit') {
    return submitArtistApplication(data && data.payload ? data.payload : data);
  }

  return jsonResponse({ ok: false, error: 'Unsupported action' }, 400);
}

function submitArtistApplication(payload) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('Submissions');

    if (!sheet) {
      sheet = spreadsheet.insertSheet('Submissions');
      sheet.appendRow([
        'timestamp',
        'artist_name',
        'email',
        'phone',
        'instagram',
        'genre',
        'youtube_url',
        'spotify_url',
        'message',
        'status'
      ]);
    }

    const row = [
      new Date().toISOString(),
      payload.artist_name || '',
      payload.email || '',
      payload.phone || '',
      payload.instagram || '',
      payload.genre || '',
      payload.youtube_url || '',
      payload.spotify_url || '',
      payload.message || '',
      'new'
    ];

    sheet.appendRow(row);
    return jsonResponse({ ok: true, message: 'Thank you. We will listen and get back to you.' });
  } catch (error) {
    return jsonResponse({ ok: false, error: error && error.message ? error.message : 'Submission failed' }, 500);
  }
}

function readSheetAsObjects(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    return [];
  }

  const values = sheet.getDataRange().getValues();
  if (!values || values.length < 2) {
    return [];
  }

  const headers = values[0].map(function (header) {
    return String(header).trim();
  });

  return values.slice(1)
    .filter(function (row) {
      return row.some(function (cell) {
        return String(cell || '').trim() !== '';
      });
    })
    .map(function (row) {
      const obj = {};
      headers.forEach(function (header, index) {
        obj[header] = row[index] !== undefined ? row[index] : '';
      });
      return obj;
    });
}

function readKeyValueSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    return {};
  }

  const values = sheet.getDataRange().getValues();
  if (!values || values.length < 2) {
    return {};
  }

  const result = {};
  values.slice(1).forEach(function (row) {
    const key = String(row[0] || '').trim();
    if (key) {
      result[key] = row[1] !== undefined ? row[1] : '';
    }
  });

  return result;
}

function jsonResponse(payload, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(payload));
  output.setMimeType(ContentService.MimeType.JSON);

  if (statusCode && statusCode >= 400) {
    return ContentService
      .createTextOutput(JSON.stringify(payload))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return output;
}
