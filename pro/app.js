import express from "express";
import config from "config";
import {google} from "googleapis"
// const { google } = require("googleapis");
//apiRouter is the alias of the router
let PORT = config.get('PORT')
import apiRouter from "./controllers/api/index.js";



import "./dbConnect.js";

const app = express();


const port = config.get("PORT");

//APP LEVEL MIDDLE WARE
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({ success: "HELLO  FROM EXPRESS" });
})

app.use("/progress", apiRouter);
// ................................................

app.get("/sheet", async (req, res) => {

  const auth = new google.auth.GoogleAuth({
    keyFile: "./utils/credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1-R2QwFfIXMA4CpNOYkiNLlTT_h0FDURVS5KKq9xeWrQ";


  const getAll = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A1:F",
  });

  console.log(getAll.data.values)
  // let yvalues = (getRows.data.values).flat();
  // console.log(getRows2.data.values);


  res.status(200).json({"data":getAll.data.values});
});

app.listen(PORT, (req, res) => console.log(`running on ${PORT} `));





