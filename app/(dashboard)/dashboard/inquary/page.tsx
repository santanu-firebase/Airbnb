"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../../_components/Layout';
import Chart from '../../_components/Chart';

function Inquary() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/messages?')
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  if (!data) {
    return <Layout>Loading...</Layout>
  }

  return (
    <div>
      <Layout>
        <h2>Inquiry Insights</h2>
        <Chart
          data={{
            labels: ['Quick Conversions', 'Slow Conversions', 'Abandoned Inquiries'],
            datasets: [
              {
                label: 'conversions'
                //   data: [data.quick, data.slow, data.abandoned],
                // backgroundColor: ['#4caf50', '#ff9800', '#f44336']
              },
            ],
          }}
          options={{ responsive: true }}
        />
        {/* <Table
          columns={['Message', 'Sentiment', 'Conversion Probabilty']}
          data={data.messages.map((msg:any) => [
            msg.content,
            msg.Sentiment,
            `${matchesGlob.Probabilty}%`,
              ])} 
            /> */}
      </Layout>

    </div>
  )
}

export default Inquary