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
        <div className='flex flex-col h-[100%] justify-between'>
            <div className='pl-3 lg:flex flex-col gap-12'>
                <a href='' className='flex gap-2 items-center '>
                    <LuLayoutDashboard className='icon'/>
                    <p className='nunito text-[#35CD8D] text-[20px]'>Dashboard</p>
                </a>
                <a href='' className='flex gap-2 items-center'>
                    <GiThreeLeaves className='icon'/>
                    <p className='nunito text-[grey] text-[20px]'>Farm Details</p>
                </a>
                <a href='' className='flex gap-2 items-center'>
                    <GiThreeLeaves className='icon'/>
                    <p className='nunito text-[grey] text-[20px]'>Loan Application</p>
                </a>
                <a href='' className='flex gap-2 items-center'>
                    <GiThreeLeaves className='icon'/>
                    <p className='nunito text-[grey] text-[20px]'>Repayment</p>
                </a>
                <a href='' className='flex gap-2 items-center'>
                    <BiHistory className='icon'/>
                    <p className='nunito text-[grey] text-[20px]'>Loan History</p>
                </a>
                <a href='' className='flex gap-2 items-center'>
                    <FaAmazonPay className='icon'/>
                    <p className='nunito text-[grey] text-[20px]' href="">Payout</p>
                </a>
                <a href='' className='flex gap-2 items-center'>
                    <AiOutlineSetting className='icon'/>
                    <p className='nunito text-[grey] text-[20px]' href="">Settings</p>
                </a>
            </div>
            <div className='bg-[#35CD8D] py-8'>
                <a href="">Log out</a>
            </div>
        </div>
    </div>
  )
}

export default Leftnav