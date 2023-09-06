import React, {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import alert from '../../Images/Group 18.png'
import question from '../../Images/Group 19.png'
import options from '../../Images/Frame 143.png'
import logo from '../../Images/logo.png'
import { LuLayoutDashboard } from 'react-icons/lu'
// import toggle from '../../../Images/Group 20.png'
import { GiThreeLeaves } from 'react-icons/gi'
import { BiHistory, BiLogOutCircle } from 'react-icons/bi'
import { FaAmazonPay } from 'react-icons/fa'
import { AiOutlineSetting } from 'react-icons/ai'
import { PiListNumbersBold } from 'react-icons/pi'
import { GiFarmTractor } from 'react-icons/gi'

const Dashtop = () => {
  const [open, setOpen] = useState(false)
  
  const handleTracktor = () => {
    setOpen(!open)
}
  return (
  <>
    <div className='w-full flex justify-between px-6 py-3 bg-white border-b-2'>
        <div>
          <img className='hidden lg:block' src={logo} alt="" />
          <GiHamburgerMenu onClick={handleTracktor} className='lg:hidden block'/>
        </div>
        <div className='flex w-[70%]'>
          <div className='flex border-2 bg-[#b8b7b7] border-none w-[25%] gap-4 rounded-3xl px-3 py-[2px]'>
              <AiOutlineSearch/>
              <input className='outline-0 w-[80%] bg-transparent' type="text" placeholder='Search Here' />
          </div>
          <div className='flex gap-3'>
              <img className='w-[40px] h-[40px]' src={question} alt="" />
              <img className='w-[40px] h-[40px]' src={alert} alt="" />
              <img src={options} alt="" />
          </div>
        </div>
    </div>
    <div className={open ? "absolute w-[55%] h-[100%] overflow-hidden justify-between flex flex-col bg-white ease-in duration-300" : 'lg:hidden bg-white w-[0] overflow-hidden md:w-0 flex flex-col h-[89%] justify-between ease-in duration-300 absolute'}>
    <div className='pl-3 flex flex-col gap-12 mt-7'>
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