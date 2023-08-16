import React, { useState } from 'react'
import plus from '../../Images/Vector (9).png'
import {BsDash} from 'react-icons/bs'

const Getstarted = () => {
    const [open, setOpen] = useState(false)

    const handleAccordion = () =>{
        setOpen(!open)
    }
  return (
    <div>
        <div className='container px-10 py-20 flex-col w-full justify-between lg:flex lg:flex-row lg:px-0'>
            <div className='text-left mb-7 lg:w-1/3 flex flex-col gap-4'>
                <h1 className='head capitalize'>a simples way to get started with us!</h1>
                <p className='nunito text-xl text-[grey] capitalize'>Start your journey with us today and experience a hassle-free loan process tailored to the needs of farmers like you!</p>
                <div>
                    <button className='btn text-white'>Get Started</button>
                </div>
            </div>
            <div className='lg:w-1/2 text-left head text-[grey] gap-5 flex flex-col'>
                <div className='flex flex-col w-full justify-between items-center py-2 px-4 border-b-2'>
                    <div onClick={handleAccordion} className='flex w-full justify-between'>
                        <h1 className='text-xl lg:text-3xl'>01. User Registration</h1>
                        <div>
                            {open? <BsDash/>:<img src={plus} alt="" />}
                        </div>
                    </div>
                    <p className={open? 'accordion':'h-0 overflow-hidden text-[20px] leading-[22px] text-justify mt-2 '}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aut eveniet tempora quidem reiciendis voluptates temporibus maxime similique mollitia a. Unde nihil tempora eveniet fuga, deleniti, at, omnis officiis adipisci aliquid voluptas beatae quidem ipsa ullam. Reprehenderit pariatur modi repellat neque qui quas esse velit fugiat architecto illum, consequatur debitis!</p>
                </div>
                <div className='flex w-full justify-between items-center py-2 px-4 border-b-2 bg-white'>
                    <h1 className='text-xl lg:text-3xl'>02. Loan Application</h1>
                    <img src={plus} alt="" />
                </div>
                <div className='flex w-full justify-between items-center py-2 px-4 border-b-2 bg-white'>
                    <h1 className='text-xl lg:text-3xl'>03. Consultation with Loan Officers</h1>
                    <img src={plus} alt="" />
                </div>
                <div className='flex w-full justify-between items-center py-2 px-4 border-b-2 bg-white'>
                    <h1 className='text-xl lg:text-3xl'>04. loan Approval and Disbursement</h1>
                    <img src={plus} alt="" />
                </div>
            </div>
        </div>
        <div className='container flex flex-col mb-10 gap-11 px-10 lg:px-0 lg:mb-40'>
            <div className='capitalize nunito text-left lg:w-1/3 flex flex-col gap-3'>
                <h1 className='w-full lg:w-[70%]'>your estimate loan calculator</h1>
                <p className='capitalize nunito text-xl text-[grey]'>request a loan and get money to your balance</p>
            </div>
            <div className='border-2 border-grey-400 rounded-3xl flex flex-col w-full px-10 py-10 lg:justify-between lg:flex-row'>
                <div className='w-full lg:w-[60%] flex flex-col gap-3 text-left'>
                    <h1>Loan Calculator</h1>
                    <p className='capitalize nunito text-xl text-[grey]'>request a loan and get money to your balance</p>
                    <div className='flex flex-col gap-9'>
                        <div className='flex w-full mt-10 '>
                            <div className='w-[30%] flex justify-center border-2 py-5 rounded-tl-2xl rounded-bl-2xl'>
                                <button className='font-medium py-1 px-2 lg:py-3 lg:px-8 bg-[#35CD8D] rounded-2xl hover:opacity-20 ease-in duration-200 text-white'>Amount</button>
                            </div>
                            <div className='w-[70%] outline-0 border-2 py-7 rounded-tr-2xl rounded-br-2xl flex justify-center'>
                                <input className='w-full px-5 text-2xl outline-none' type="text" placeholder='2,000,000.00' />
                            </div>
                        </div>
                        <div className='flex w-full mt-10 '>
                            <div className='w-[30%] flex justify-center border-2 py-5 rounded-tl-2xl rounded-bl-2xl'>
                                <button className='font-medium py-1 px-2 lg:py-3 lg:px-8 bg-[#FFA500] rounded-2xl hover:opacity-20 ease-in duration-200 text-white'>Period</button>
                            </div>
                            <div className='w-[70%] outline-0 border-2 py-7 rounded-tr-2xl rounded-br-2xl flex justify-center'>
                                <input className='w-full px-5 text-2xl outline-none' type="text" placeholder='24 Months' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[20%] border-2 rounded-[10%] text-left py-20 items-center flex flex-col gap-10 mt-8'> 
                    <div className='flex flex-col items-center'>
                        <p className='capitalize nunito text-xl text-[grey]'>Monthly Payment</p>
                        <h1>N 10,000</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='capitalize nunito text-xl text-[grey]'>Interest Rate</p>
                        <h1>0.25%</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='capitalize nunito text-xl text-[grey]'>Approve time</p>
                        <h1>24hrs</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Getstarted