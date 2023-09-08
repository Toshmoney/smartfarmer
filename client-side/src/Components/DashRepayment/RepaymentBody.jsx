import React from 'react'
import Leftnav from '../Dashboard/DashboardBody/Leftnav'
import RepaymentContent from './RepaymentContent'

const RepaymentBody = () => {
  return (
    <div className='flex w-full bg-[#e0dfe2]'>
        <Leftnav/>
        <RepaymentContent/>
    </div>
  )
}

export default RepaymentBody