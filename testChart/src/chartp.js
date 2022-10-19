// import { Chart } from "react-google-charts";
import { useEffect } from "react";
// import axios from "axios";
import {google} from "googleapi";
import express from "express";
import { useState } from "react";
import BarChart from "./BarChart";
// import credentials from "./utils"; 

app.get("/", (req, res) => {
    res.send ("Port is working");
  });

function Charts(){
  const [userData, setUserData] = useState({})
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    async function getData() {
      app.get("/sheet", async (req, res) => {
        
    
        try{
            const auth = new google.auth.GoogleAuth({
              keyFile: "../utils/credentials.json",
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



        // // ....................................................
        // let res = await axios.get(`https://sheetdb.io/api/v1/b1ilbces9phed`)
        // console.log(res.data)

        var xValues = getRows.data.values.map(ele=> ele.Subject)
        var yValues = getRows2.data.values.map(ele=> Number(ele.Grades))
        
        setUserData({
          labels: xValues,
          datasets: [
            {
              label: "Marks Gained",
              data: yValues,
              backgroundColor: ["red", "green", "blue", "orange", "brown"],
            },
          ],
        })
        setLoading(false);

      } catch (error) {
        console.error(error);
    }
  }
      )}
  getData()

  console.log(userData)
  },[])
//   if (isLoading) {
//     return <div className="App">Loading...</div>;
//   }

//   return (
//         <>
//          <h1>Charts</h1>    
//          <div style={{ width: 700}}>
//         <BarChart chartData={userData} />
//       </div>
//         </>
//   )

}
export default Charts;