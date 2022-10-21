const express = require("express");
const { google } = require("googleapis");

const app = express();
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send ("Port is working")
});

app.get("/sheet", async (req, res) => {

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1-R2QwFfIXMA4CpNOYkiNLlTT_h0FDURVS5KKq9xeWrQ";

  // Get metadata about spreadsheet
  // const metaData = await googleSheets.spreadsheets.get({
  //   auth,
  //   spreadsheetId,
  // });

  // Read rows from spreadsheet
  // const getRows = await googleSheets.spreadsheets.values.get({
  //   auth,
  //   spreadsheetId,
  //   range: "Sheet1!A:A",
  // });

  const getAll = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:D",
  });

  console.log(getAll.data.values)
  // let yvalues = (getRows.data.values).flat();
  // console.log(getRows2.data.values);


  res.status(200).json({"data":getAll.data.values});
});

app.listen(1337, (req, res) => console.log("running on 1337"));
