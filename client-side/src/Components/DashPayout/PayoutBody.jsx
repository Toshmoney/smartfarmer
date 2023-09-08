import React from 'react'
import Leftnav from '../Dashboard/DashboardBody/Leftnav'
import PayoutContent from './PayoutContent'

const PayoutBody = () => {
  return (
    <div className='flex w-full bg-[#e0dfe2]'>
        <Leftnav/>
        <PayoutContent/>
    </div>
  )
}

export default PayoutBody