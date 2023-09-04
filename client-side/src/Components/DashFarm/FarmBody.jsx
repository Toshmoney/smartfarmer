import React from 'react'
import Leftnav from '../Dashboard/DashboardBody/Leftnav'
import FarmContent from './FarmContent'

const FarmBody = () => {
  return (
    <div className='flex w-full bg-[#e0dfe2]' >
        <Leftnav/>
        <FarmContent/>
    </div>
  )
}

export default FarmBody