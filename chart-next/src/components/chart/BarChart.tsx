import convertChart from 'hooks/convertChart'
import { salesRequest } from 'modules/slice/chart/salesSlice'
import React, { useEffect } from 'react'
import Chart from 'react-google-charts'
import { useDispatch } from 'react-redux'
import styles from '../styles/Bar.module.css'

interface Earning{
  year: string,
  sales: number,
  cost: number,
  profit: number
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
  /*        data={convertChart()} */
            options={options}
      />
      <hr/>
    </div>
  )
}
export default BarChart