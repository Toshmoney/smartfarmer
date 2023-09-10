import React from 'react'
import profile from '../../Images/setting prof.svg'
import { TfiWorld } from 'react-icons/tfi'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { BiUser } from 'react-icons/bi'
import { BsSendSlash } from 'react-icons/bs'
import {HiOutlineHome} from 'react-icons/hi'


const Profilepage = () => {
    return (
        <div className='w-[100%] h-full nunito bg-white rounded-3xl p-10 flex flex-col gap-12'>
            <div className='flex w-full justify-between'>
                <div>
                    <h3>Profile</h3>
                    <p>Your profile information show here</p>
                </div>
                <img src={profile} alt="" />
            </div>
            <form action="" className='flex flex-col lg:gap-[5rem] gap-[1rem] w-full'>
                <div className='flex lg:flex-row flex-col gap-4'>
                    <div className='flex flex-col lg:gap-[5rem] gap-[1rem] w-full'>
                        <span>
                            <h5>Full Name</h5>
                            <div className='border-2 border-[grey] flex px-1 gap-1 items-center rounded-2xl'>
                                <BiUser className='w-[25px] h-[25px]' />
                                <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='E.G John Doe' />
                            </div>
                        </span>
                        <span>
                            <h5>Country</h5>
                            <div className='border-2 border-[grey] flex px-1 gap-1 items-center rounded-2xl'>
                                <TfiWorld className='w-[25px] h-[25px]' />
                                <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='Nigeria' />
                            </div>
                        </span>
                        <span>
                            <h5>City / Town</h5>
                            <div className='border-2 border-[grey] flex px-1 gap-1 items-center rounded-2xl'>
                                <CiLocationOn className='w-[25px] h-[25px]' />
                                <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='Ilorin' />
                            </div>
                        </span>
                    </div>
                    <div className='flex flex-col lg:gap-[5rem] gap-[1rem] w-full'>
                        <span>
                            <h5>Email Address</h5>
                            <div className='border-2 border-[grey] flex px-1 gap-1 items-center rounded-2xl'>
                                <CiMail className='w-[25px] h-[25px]' />
                                <input type="text" className='w-full  py-3 outline-none bg-transparent' placeholder='E.G John Doe' />
                            </div>
                        </span>
                        <span>
                            <h5>State / Province</h5>
                            <div className='border-2 border-[grey] flex px-1 gap-1 items-center rounded-2xl'>
                                <BsSendSlash className='w-[25px] h-[25px]' />
                                <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='Nigeria' />
                            </div>
                        </span>
                        <span>
                            <h5>Street Address</h5>
                            <div className='border-2 border-[grey] flex px-1 gap-1 items-center rounded-2xl'>
                                <HiOutlineHome className='w-[25px] h-[25px]' />
                                <input type="text" className='w-full py-3 outline-none bg-transparent' placeholder='Ilorin' />
                            </div>
                        </span>
                    </div>
                </div>
                <div>
                    <button className='btn text-white nunito float-right'>Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default Profilepage