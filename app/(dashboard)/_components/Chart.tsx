import React from 'react'
import { Bar } from 'react-chartjs-2'

function Chart({data, options}: any) {
  return (
    <div>
        <Bar data={data} options={options}/>
    </div>
  )
}

export default Chart