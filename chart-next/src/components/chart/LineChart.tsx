
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};
//  const convert = () => { 
//     let todata:any[] = []
//     const keys = Object.keys(data[0])
//     console.log('>>>>>todata:',keys)
//     todata.push(keys)
//     for (let i = 0; i < data.length; i++){
//       const values = Object.values(data[i])
//       console.log('>>>>>todata:', values)
//       todata.push(values)
//     }
//     return todata
//   }

const LineChart=()=> {
  return (
    <Chart
      chartType="LineChart"
      width="70%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default LineChart
