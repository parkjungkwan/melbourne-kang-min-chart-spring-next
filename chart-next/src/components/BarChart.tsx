import React from 'react'
import Chart from 'react-google-charts'
import styles from '../styles/Bar.module.css'

export const data = [
    { year: '2020', sales: '32323', cost: '2323', profit: '23231' },
    { year: '2021', sales: '67456', cost: '6575', profit: '6765' },
]

function jsonConvertToArray(){
  
}

export const data2 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2018", 1000, 400, 200],
  ["2019", 1170, 460, 250],
  ["2020", 260, 1120, 300],
  ["2021", 1030, 540, 350],
]

export const options = {
    chart: {
      title: "회사 성과표",
      subtitle: "매출, 비용, 이익: 2019-2021년도",
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
            data={data2}
            options={options}
      />
      <hr/>
    </div>
  )
}
export default BarChart