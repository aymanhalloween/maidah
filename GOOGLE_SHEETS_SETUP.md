# Google Sheets Email Collection Setup

## 1. Create a Google Sheet

- Go to sheets.google.com and create a new spreadsheet
- Name it "Maidah Subscribers"
- In Row 1, add headers: `Email` (A1) and `Date` (B1)

## 2. Add the Apps Script

- In the sheet, go to Extensions > Apps Script
- Delete any existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var email = data.email;

  // Check for duplicates
  var emails = sheet.getRange("A:A").getValues().flat();
  if (emails.includes(email)) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "exists" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Add new row
  sheet.appendRow([email, new Date().toISOString()]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy

- Click Deploy > New deployment
- Type: Web app
- Execute as: Me
- Who has access: Anyone
- Click Deploy
- Copy the Web app URL

## 4. Add the URL to your environment

Create a `.env.local` file in the project root:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Or set it in your Vercel project settings under Environment Variables.

## 5. Test

Submit an email on the site. It should appear in your Google Sheet within a few seconds.
