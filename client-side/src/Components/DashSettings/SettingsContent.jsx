import React from 'react'
import {BiUser} from 'react-icons/bi'
import {CiLock, CiLocationOn} from 'react-icons/ci'
import profile from '../../Images/setting prof.svg'
import {TfiWorld} from 'react-icons/tfi'

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
        <div className='w-[70%] nunito bg-white rounded-3xl p-10 flex flex-col gap-12'>
            <div className='flex w-full justify-between'>
                <div>
                    <h3>Profile</h3>
                    <p>Your profile information show here</p>
                </div>
                <img src={profile} alt="" />
            </div>
            <form action="" className='flex gap-3 w-full'>
                <div className='flex flex-col gap-[5rem] w-full'>
                    <span>
                        <h5>Full Name</h5>
                        <div className='border-2 border-black flex px-1 gap-1 items-center rounded-2xl'>
                            <BiUser className='w-[25px] h-[25px]'/>
                            <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='E.G John Doe' />
                        </div>
                    </span>
                    <span>
                        <h5>Country</h5>
                        <div className='border-2 border-black flex px-1 gap-1 items-center rounded-2xl'>
                            <TfiWorld className='w-[25px] h-[25px]'/>
                            <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='Nigeria' />
                        </div>
                    </span>
                    <span>
                        <h5>Full Name</h5>
                        <div className='border-2 border-black flex px-1 gap-1 items-center rounded-2xl'>
                            <CiLocationOn className='w-[25px] h-[25px]'/>
                            <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='Ilorin' />
                        </div>
                    </span>
                </div>
                <div className='flex flex-col gap-[5rem] w-full'>
                    <span>
                        <h5>Full Name</h5>
                        <div className='border-2 border-black flex px-1 gap-1 items-center rounded-2xl'>
                            <BiUser className='w-[25px] h-[25px]'/>
                            <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='E.G John Doe' />
                        </div>
                    </span>
                    <span>
                        <h5>Country</h5>
                        <div className='border-2 border-black flex px-1 gap-1 items-center rounded-2xl'>
                            <TfiWorld className='w-[25px] h-[25px]'/>
                            <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='Nigeria' />
                        </div>
                    </span>
                    <span>
                        <h5>Full Name</h5>
                        <div className='border-2 border-black flex px-1 gap-1 items-center rounded-2xl'>
                            <CiLocationOn className='w-[25px] h-[25px]'/>
                            <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='Ilorin' />
                        </div>
                    </span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SettingsContent