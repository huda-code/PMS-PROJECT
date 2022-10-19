const express = require("express");
const { google } = require("googleapis");

const app = express();
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send ("Port is working")
});

app.get("/sheet", async (req, res) => {
try{
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1-R2QwFfIXMA4CpNOYkiNLlTT_h0FDURVS5KKq9xeWrQ";
  console.log("1")
  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });
  console.log(metaData)
  console.log("2")
  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:A",
  });
  const getRows2 = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:B",
  });

  console.log(getRows.data.values);
  console.log(getRows2.data.values);


  res.send("Successfully submitted! Thank you!");
}catch(erro){
  console.log(error)
}
  
});

app.listen(1337, (req, res) => console.log("running on 1337"));


































