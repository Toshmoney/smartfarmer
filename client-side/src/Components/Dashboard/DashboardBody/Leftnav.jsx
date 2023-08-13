import React from 'react'
import {LuLayoutDashboard} from 'react-icons/lu'
import toggle from '../../../Images/Group 20.png'
import {GiThreeLeaves} from 'react-icons/gi'
import {BiHistory} from 'react-icons/bi'
import {FaAmazonPay} from 'react-icons/fa'
import {AiOutlineSetting} from 'react-icons/ai'

const Leftnav = () => {
  return (
    <div className='bg-white w-[12%] h-[92vh] flex flex-col gap-10'>
        <div>
            <img className='relative left-[93%] top-4' src={toggle} alt="" />
        </div>
        <div className='pl-3 lg:flex flex-col gap-12'>
            <div className='flex gap-2 items-center '>
                <LuLayoutDashboard className='icon'/>
                <a className='nunito text-[#35CD8D] text-[20px]' href="">Dashboard</a>
            </div>
            <div className='flex gap-2 items-center'>
                <GiThreeLeaves className='icon'/>
                <a className='nunito text-[grey] text-[20px]' href="">Farm Details</a>
            </div>
            <div className='flex gap-2 items-center'>
                <GiThreeLeaves className='icon'/>
                <a className='nunito text-[grey] text-[20px]' href="">Loan Application</a>
            </div>
            <div className='flex gap-2 items-center'>
                <GiThreeLeaves className='icon'/>
                <a className='nunito text-[grey] text-[20px]' href="">Repayment</a>
            </div>
            <div className='flex gap-2 items-center'>
                <BiHistory className='icon'/>
                <a className='nunito text-[grey] text-[20px]' href="">Loan History</a>
            </div>
            <div className='flex gap-2 items-center'>
                <FaAmazonPay className='icon'/>
                <a className='nunito text-[grey] text-[20px]' href="">Payout</a>
            </div>
            <div className='flex gap-2 items-center'>
                <AiOutlineSetting className='icon'/>
                <a className='nunito text-[grey] text-[20px]' href="">Settings</a>
            </div>
        </div>
        <div className='bg-red-800'>
            <a href="">Log out</a>
        </div>
    </div>
  )
}

export default Leftnav