import React from 'react'
import Leftnav from '../Dashboard/DashboardBody/Leftnav'
import SettingsContent from './SettingsContent'

const SettingsBody = () => {
  return (
    <div className='flex w-full bg-[#e0dfe2]' >
        <Leftnav/>
        <SettingsContent/>
    </div>
  )
}

export default SettingsBody