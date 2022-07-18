import { convert, options } from 'hooks/convert'
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