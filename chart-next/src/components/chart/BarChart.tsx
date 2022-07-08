import { salesRequest } from 'modules/slice/chart/salesSlice'
import React, { useEffect } from 'react'
import Chart from 'react-google-charts'
import { useDispatch } from 'react-redux'
import styles from '../styles/Bar.module.css'


// export const data2 = [
//   ["Year", "Sales", "Expenses", "Profit"],
//   ["2018", 1000, 400, 200],
//   ["2019", 1170, 460, 250],
//   ["2020", 260, 1120, 300],
//   ["2021", 1030, 540, 350],
// ]
interface Earning{
  year: string,
  sales: number,
  cost: number,
  profit: number
}

export const data = [
    { year: '2018', sales: 1000, cost: 400, profit: 200 },
    { year: '2019', sales: 1170, cost: 460, profit: 250 },
    { year: '2020', sales: 260, cost: 1120, profit: 300 },
    { year: '2021', sales: 1030, cost: 540, profit: 350 },
]
//==== JSON데이타 Chart형식으로 변환===//
//key값만 []로 가져오기

// let keys = Object.keys(data[0])
// console.log(`keys : ${JSON.stringify(keys)}`)



const valueK=()=> {
  let values = []
  for (let i = 0; i < data.length; i++) {
     values[i] = Object.values(data[i])
  }
  console.log(`values : ${JSON.stringify(values)}`)
  return values 
}
// const data2 = [
//   keys,
//   valueK()[0],
//   valueK()[1],
//   valueK()[2],
//   valueK()[3]
// ]
const convert = () => { 
  let aa: any[] = []
  const keys = Object.keys(data[0])
  aa.push(keys)
  for (let i = 0; i < 4; i++){
    const v = valueK()[i]
    aa.push(v)
  }


  return aa
}




export const options = {
    chart: {
      title: "회사 성과표",
      subtitle: "매출, 비용, 이익: 2018-2021년도",
    },
  };

const BarChart = () => {
  return (
    <div >
      <h2>Bar Chart</h2>


          <Chart
            chartType="Bar"
            width="70%"
            height="400px"
            data={convert()}
            options={options}
      />
      <hr/>
    </div>
  )
}
export default BarChart