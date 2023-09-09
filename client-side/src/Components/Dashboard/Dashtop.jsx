import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import alert from '../../Images/Group 18.png'
import question from '../../Images/Group 19.png'
import options from '../../Images/options.svg'
import logo from '../../Images/logo.png'
import { LuLayoutDashboard } from 'react-icons/lu'
import { GiThreeLeaves } from 'react-icons/gi'
import { BiHistory, BiLogOutCircle } from 'react-icons/bi'
import { FaAmazonPay } from 'react-icons/fa'
import { AiOutlineSetting } from 'react-icons/ai'
import { PiListNumbersBold } from 'react-icons/pi'
import { FiX } from 'react-icons/fi'

const Dashtop = () => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className='w-full flex justify-between px-6 py-3 bg-white border-b-2'>
                <div className='flex w-[50%]'>
                    <img className='hidden lg:block' src={logo} alt="" />
                    <GiHamburgerMenu onClick={handleToggle} className='lg:hidden block cursor-pointer'/>
                </div>
                <div className='flex w-[100%] justify-between'>
                    <div className='flex border-2 bg-[#FBFBFB] border-none w-[40%] gap-4 rounded-3xl px-3 py-[2px]'>
                        <AiOutlineSearch />
                        <input className='outline-0 w-[80%] bg-transparent' type="text" placeholder='Search Here' />
                    </div>
                    <div className='flex gap-3'>
                        <img className='w-[40px] h-[40px]' src={question} alt="" />
                        <img className='w-[40px] h-[40px]' src={alert} alt="" />
                        <img src={options} alt="" />
                    </div>
                </div>
            </div>
            <div className={open ? "absolute w-[55%] lg:hidden h-[100%] top-0 z-50 overflow-hidden justify-between flex flex-col bg-white ease-in duration-300" : 'lg:hidden bg-white w-[0] top-0 overflow-hidden md:w-0 flex flex-col h-[100%] justify-between ease-in duration-300 absolute'}>
                <div className='flex w-full justify-around'>
                    <img src={logo} alt="" />
                    <FiX onClick={()=> setOpen(!open)} className='cursor-pointer'/>
                </div>
                <div className='pl-3 flex flex-col gap-12 mt-0'>
                    <a href='/dashboard' className='flex gap-2 items-center '>
                        <LuLayoutDashboard className='icon' />
                        <p className='nunito text-[#35CD8D] text-[20px]'>Dashboard</p>
                    </a>
                    <a href='farm-details' className='flex gap-2 items-center'>
                        <GiThreeLeaves className='icon' />
                        <p className='nunito text-[grey] text-[20px]'>Farm Details</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <PiListNumbersBold className='icon' />
                        <p className='nunito text-[grey] text-[20px]'>Loan Application</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <GiThreeLeaves className='icon' />
                        <p className='nunito text-[grey] text-[20px]'>Repayment</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <BiHistory className='icon' />
                        <p className='nunito text-[grey] text-[20px]'>Loan History</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <FaAmazonPay className='icon' />
                        <p className='nunito text-[grey] text-[20px]' href="">Payout</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <AiOutlineSetting className='icon' />
                        <p className='nunito text-[grey] text-[20px]' href="">Settings</p>
                    </a>
                </div>
                <a href='' className='bg-[#35CD8D] flex gap-2 text-left pl-3 py-8'>
                    <BiLogOutCircle className='icon' />
                    <p className='nunito text-white text-[20px] font-extrabold'>Log out</p>
                </a>
            </div>
        </>
    )
}

export default Dashtop