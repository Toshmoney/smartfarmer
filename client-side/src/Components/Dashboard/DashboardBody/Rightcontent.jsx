import React, { useEffect, useState } from 'react'
import LineChart from './LineChart/LineChart'
import { userData } from './LineChart/Data'
import { Table } from 'antd'
import { Paymenthistory, columns } from './TableData'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Rightcontent = () => {
  useEffect(()=>{
    AOS.init();
  }, []);
  
  const [graphical, setGraphical] = useState({
    labels: userData.map((data)=> data.month),
    datasets:[
      {
        label: 'Paid Time',
        data: userData.map((data)=> data.paidTime)
      },
      {
        label: 'Due Payment',
        data: userData.map((data)=> data.duePayment)
      },
    ]
  })
  return (
    <div className=' w-full py-10 px-3 lg:px-10 flex flex-col gap-6 text-left h-[92vh] overflow-x-scroll'>
      <h4 className='nunito'>Dashboard</h4>
      <div className='w-[100%] flex flex-col gap-6 lg:flex-row justify-between'>
        <div className='py-7 px-8 bg-white rounded-2xl text-center nunito'>
          <p>Estimated Loan</p>
          <h1>NGN 500,000</h1>
        </div>
        <div className='py-7 px-8 bg-white rounded-2xl text-center nunito'>
          <p>Estimated Loan</p>
          <h1>NGN 500,000</h1>
        </div>
        <div className='py-7 px-8 bg-white rounded-2xl text-center nunito'>
          <p>Estimated Loan</p>
          <h1>NGN 500,000</h1>
        </div>
      </div>

      {/* =============== Chart Area ====================== */}
      <div className='bg-white px-10 py-10 rounded-3xl w-full'>
        <LineChart graphData={graphical}/>
      </div>
      <div className='py-10 px-10 bg-white rounded-3xl w-full  '>
        <h2 className='capitalize nunito'>payment history</h2>
        <header className='lg:overflow-hidden overflow-x-auto '>
          <Table 
            columns={columns}
            dataSource={Paymenthistory}
          >

          </Table>
        </header>
      </div>
    </div>
  )
}

export default Rightcontent