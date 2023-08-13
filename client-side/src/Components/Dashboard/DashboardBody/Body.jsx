import React from 'react'
import Leftnav from './Leftnav'
import Rightcontent from './Rightcontent'

const Body = () => {
  return (
    <div className='flex w-full bg-[#e0dfe2]'>
        <Leftnav/>
        <Rightcontent/>
    </div>
  )
}

export default Body