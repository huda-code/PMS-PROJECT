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
        let res = await axios.get(`https://sheetdb.io/api/v1/b1ilbces9phed`)
        console.log(res.data)

        var xValues = res.data.map(ele=> ele.Subject)
        var yValues = res.data.map(ele=> Number(ele.Grades))
        
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

<div>

</div>




// export const data = [
//   ["  Subjects", "Monthly progress"],
//   ["English", 11],
//   ["Hindi", 2],
//   ["Telugu", 2],
//   ["English", 2],
//   ["Math", 8],
// ];
// export const options = {
//   title: "My Progress",  
// // };

// function Charts() {
//   // const [data, setData] = useState([]);
//   useEffect(() => {

//     async function getResults() {
//       try {
//         let res = await axios.get(`https://sheetdb.io/api/v1/b1ilbces9phed`)
//         console.log(res.data);
//         var myChart = new Chart("myChart", {
//           type: "bar",
//           data: {},
          
//           options: {}
//         });

//         // var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
//         var xValues = res.data.map(ele=> ele.subject)
//         // var yValues = [55, 49, 44, 24, 15];
//         var yValues = res.data.map(ele=> ele.Grades)
//         var barColors = ["red", "green", "blue", "orange", "brown"];
    
//         new Chart("myChart", {
//           type: "bar",
//           data: {
//             labels: xValues,
//             datasets: [{
//               backgroundColor: barColors,
//               data: yValues
//             }]
//           }
//           // options: { ...}
//         });
//       } catch (error) {
//         console.error(error);
//         console.error(error.response.data);
//       }
//     }
//     getResults();
   


//   }, [])
//   return (
//     <>
//      <h1>Charts</h1>
//      <div>
// {/*       
//       <ul>
//         {data && data.length > 0 && data.map((dataObj, index) => (
//             <li key={dataObj.Grades}>{dataObj.Subject}</li>
//           ))}
//       </ul> */}
//      </div>

//     </>





//     //   width={"100%"}
//     //   height={"400px"}
//     // />
   
//   )
//   // // ...............................................................
//   // // const dataSheet=[
//   // //     // chartType="PieChart",
//   // //     //  chartType="BarChart"
//   // //     {Subject:"Hindi",Subject},
//   // //     {Grades: "234",Grades},
//   // //     ]
//   //     getResults.map(getRes);

//   // function Progress() {
//   //   const [Subject, setSubject] = useState("Hindi");
//   //   const [Grades, setGrade] = useState("633");
//   // // const [Assisment, setAssisment] = useState("F.A-1");
//   //   const [credits, setCredits] = useState("8");
//   //   return (
//   //     <>
//   //       <h1>My {Subject} Mark's is</h1>
//   //       <p>
//   //         {/* It is a {Grade} {Credit} from {Assisment}. */}
//   //         It is a {Grades} {credits} from F.A-1.
//   //       </p>
//   //     </>
//   //   )
//   //    //For Bar chart
//   //    setGrade=addData('Grades', Grades, 'green', 'black');
//   // 		drawchart(dataset, Subject, 'bar');

//   // 		//For Line chart
//   // 		setCredits=addData('Credits', credits, 'transparent', 'green');
//   // drawchart(dataset, Subject, 'line');
//   // ...................................................................
//   // }
// }


export default Charts;