import React from 'react'
import Chart from 'react-google-charts'
import styles from '../styles/Bar.module.css'

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
            data={data}
            options={options}
      />
      <hr/>
    </div>
  )
}
export default BarChart