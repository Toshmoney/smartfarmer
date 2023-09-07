import React from 'react'
import Leftnav from '../Dashboard/DashboardBody/Leftnav'
import LoanContent from './LoanContent'

const LoanBody = () => {
  return (
    <div className='flex w-full bg-[#e0dfe2]'>
        <Leftnav/>
        <LoanContent/>
    </div>
  )
}

export default LoanBody