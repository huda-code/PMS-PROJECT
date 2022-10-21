// import { Chart } from "react-google-charts";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import BarChart from "./BarChart";


function Charts(){
  const [userData, setUserData] = useState({})
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    async function getData() {
      try {
        setLoading(true)
        let res = await axios.get(`/sheet`)
        console.log(res.data.data)

        var xValues = res.data.data.map(ele=>ele[0]);
        xValues.splice(0,1);
        console.log("xvalues",xValues);
        var yValues = res.data.data.map(ele=> (ele[1]))
        // yValues.splice(0,1);
        console.log("yvalues",yValues);
        
        setUserData({
          labels: xValues,
          datasets: [
            {
              label: "Marks Gained",
              data: yValues,
              backgroundColor: ["red", "green", "blue", "orange", "brown","violet"],
            },
          ],
        })
        setLoading(false);

      } catch (error) {
        console.error(error);
    }
  }
  getData()

  console.log(userData)
  },[])



  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
        <>
         <h1>Charts</h1>    
         <div style={{ width: 700}}>
        <BarChart chartData={userData} />
      </div>
        </>
      )
}
export default Charts;