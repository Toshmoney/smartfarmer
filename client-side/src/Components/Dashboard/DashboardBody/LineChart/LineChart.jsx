import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart} from 'chart.js/auto'

const LineChart = ({graphData}) => {
  return (
    <Line data={graphData}/>
  )
}

export default LineChart