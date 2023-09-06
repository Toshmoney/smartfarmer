import React from 'react'
import {BiUser} from 'react-icons/bi'
import {CiLock} from 'react-icons/ci'

const SettingsContent = () => {
  return (
    <div className='flex p-4  gap-4 w-full'>
        <div className='w-[15%] rounded-3xl'>
            <a href="/settings" className='flex gap-2 cursor-pointer py-8 px-4 rounded-t-3xl bg-[#EBFBF3]'>
                <BiUser className='h-[25px] w-[25px]'/>
                <div className='flex flex-col items gap-1'>
                    <h5 className='nunito'>Profile</h5>
                    <b className='text text-[8px] text-[grey]'>Full Name, Email, Address, Location</b>
                </div>
            </a>
            <a href="/settings" className='flex gap-2 cursor-pointer py-8 px-4 border-t-2 border-[grey] bg-[white]'>
                <CiLock className='h-[25px] w-[25px]'/>
                <div className='flex flex-col items gap-1'>
                    <h5 className='nunito'>Security</h5>
                    <b className='text text-[8px] text-[grey]'>Password, 2FA Authentification</b>
                </div>
            </a>
            <a href="/settings" className='flex gap-2 cursor-pointer rounded-b-3xl py-8 px-4 border-t-2 border-[grey] bg-[white]'>
                <CiLock className='h-[25px] w-[25px]'/>
                <div className='flex flex-col items gap-1'>
                    <h5 className='nunito'>Security</h5>
                    <b className='text text-[8px] text-[grey]'>Password, 2FA Authentification</b>
                </div>
            </a>
        </div>
        <div className='w-[70%] bg-white rounded-3xl p-10 flex flex-col'>
            <div>
                <h3>Profile</h3>
            </div>
            
        </div>
    </div>
  )
}

export default SettingsContent