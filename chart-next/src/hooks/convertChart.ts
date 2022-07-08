/*
 export const data = [
  { year: '2018', sales: 1000, cost: 400, profit: 200 },
  { year: '2019', sales: 1170, cost: 460, profit: 250 },
  { year: '2020', sales: 260, cost: 1120, profit: 300 },
  { year: '2021', sales: 1030, cost: 540, profit: 350 },
] 
*/

import { Earning } from "modules/slice/chart/salesSlice"

function convertChart(data:any){ 
  let data2:any = []

  const keys = Object.keys(data[0])
  data2.push(keys)

  let values=[]
  for (let i = 0; i < data.length; i++) {
     values[i] = Object.values(data[i])
  }
  data2.push(...values)
  
  console.log(`data2 : ${JSON.stringify(data2)}`)
  return data2
}
export default convertChart
