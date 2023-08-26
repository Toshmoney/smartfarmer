import React, { useState } from 'react'
import {LuLayoutDashboard} from 'react-icons/lu'
import toggle from '../../../Images/Group 20.png'
import {GiThreeLeaves} from 'react-icons/gi'
import {BiHistory, BiLogOutCircle} from 'react-icons/bi'
import {FaAmazonPay} from 'react-icons/fa'
import {AiOutlineSetting} from 'react-icons/ai'
import {PiListNumbersBold} from 'react-icons/pi'
import {GiFarmTractor} from 'react-icons/gi'

const Leftnav = () => {
    const [tog, setTog] = useState(false)
    const [open, setOpen] = useState(false)

    const handleDashboard = () =>{
        setTog(!tog)
    }
    const handleTracktor = () =>{
        setOpen(!open)
    }

  return (
    <>
        <div className={tog? "navigation-after":'hidden lg:bg-white lg:w-[15%] lg:h-[92.5vh] lg:flex lg:flex-col gap-[2.5rem]'}>
            <div>
                <img onClick={handleDashboard} className='relative w-[50px] h-[50px] left-[87%] cursor-pointer top-4' src={toggle} alt="" />
            </div>
            <div className='flex flex-col h-[100%] justify-between'>
                <div className='pl-3 lg:flex flex-col gap-12 px-3'>
                    <a href='' className='flex gap-2 items-center '>
                        <LuLayoutDashboard className='icon'/>
                        <p className={tog? "title":'nunito text-[#35CD8D] text-[20px]'}>Dashboard</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <GiThreeLeaves className='icon'/>
                        <p className={tog? "title":'nunito text-[grey] text-[20px]'}>Farm Details</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <PiListNumbersBold className='icon'/>
                        <p className={tog? "title":'nunito text-[grey] text-[20px]'}>Loan Application</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <GiThreeLeaves className='icon'/>
                        <p className={tog? "title":'nunito text-[grey] text-[20px]'}>Repayment</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <BiHistory className='icon'/>
                        <p className={tog? "title":'nunito text-[grey] text-[20px]'}>Loan History</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <FaAmazonPay className='icon'/>
                        <p className={tog? "title":'nunito text-[grey] text-[20px]'} href="">Payout</p>
                    </a>
                    <a href='' className='flex gap-2 items-center'>
                        <AiOutlineSetting className='icon'/>
                        <p className={tog? "title":'nunito text-[grey] text-[20px]'} href="">Settings</p>
                    </a>
                </div>
                <a href='' className='bg-[#35CD8D] flex gap-2 text-left pl-3 py-8'>
                    <BiLogOutCircle className='icon'/>
                    <p className={tog? "title":'nunito text-white text-[20px] font-extrabold'}>Log out</p>
                </a>
            </div>
        </div>
        <div className={open? "absolute w-[50%] h-[92%] justify-between flex flex-col bg-white ease-in duration-300":'lg:hidden bg-white w-[0] overflow-hidden md:w-0 flex flex-col h-[92%] justify-between ease-in duration-300 absolute'}>
            <div className='pl-3 flex flex-col gap-12 mt-7'>
                <a href='' className='flex gap-2 items-center '>
                    <LuLayoutDashboard className='icon'/>
                    <p className='nunito text-[#35CD8D] text-[20px]'>Dashboard</p>
                </a>
                <a href='' className='flex gap-2 items-center'>
                    <GiThreeLeaves className='icon'/>
                    <p className='nunito text-[grey] text-[20px]'>Farm Details</p>
                </a>
                <a href='' className='flex gap-2 items-center'>
                    <PiListNumbersBold className='icon'/>
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
                    <p className='nunito text-[grey] text-[20px]'href="">Settings</p>
                </a>
            </div>
            <a href='' className='bg-[#35CD8D] flex gap-2 text-left pl-3 py-8'>
                <BiLogOutCircle className='icon'/>
                <p className={tog? "title":'nunito text-white text-[20px] font-extrabold'}>Log out</p>
            </a>
        </div>
        <div  className='lg:hidden absolute right-[13%] md:top-[10%] top-[14%]'>
            <GiFarmTractor onClick={handleTracktor} className={open?'ease-linear':"translate-x-0"}/>
        </div>
    </>
  )
}

export default Leftnav