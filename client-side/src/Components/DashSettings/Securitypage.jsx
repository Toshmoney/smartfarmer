import React from 'react';
import key from '../../Images/lock.svg';
import fa from '../../Images/2fa.png'
import visibility from '../../Images/visibility.svg';
import computer from '../../Images/mac.svg'
import linus from '../../Images/linus.svg'

const Securitypage = () => {
    return (
        <div className='bg-white w-full h-page rounded-3xl p-[4rem] nunito'>
            <div className='flex flex-col gap-4 '>
                <div>
                    <h1 className='nunito text-[20px] font-bold'>Security Management</h1>
                    <p className='nunito '>Your Security Information show here</p>
                </div>
                <div className='w-full flex flex-col gap-[2rem] mb-4'>
                    <div className='flex flex-row justify-between'>
                        <span className='flex gap-2 items-center'>
                            <div>
                                <img className='bg-[#35CD8D] p-2 rounded-xl' src={key} height={35} width={35} alt="" />
                            </div>
                            <div>
                                <h6>Password</h6>
                                <p className='text-[grey]'>Your Security informaton Shows here</p>
                            </div>
                        </span>
                        <button className='py-1 px-5 rounded-2xl bg-[#EBFBF3]'>Change</button>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span className='flex gap-2 items-center'>
                            <div>
                                <img className='bg-[#35CD8D] p-2 rounded-xl' src={fa} height={35} width={35} alt="" />
                            </div>
                            <div>
                                <h6>2FA Authentication</h6>
                                <p className='text-[grey]'>Your Security informaton Shows here</p>
                            </div>
                        </span>
                        <button className='py-1 px-9  rounded-2xl bg-[#EBFBF3]'>Set</button>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span className='flex gap-2 items-center'>
                            <div>
                                <img className='bg-[#35CD8D] p-2 rounded-xl' src={visibility} height={35} width={35} alt="" />
                            </div>
                            <div>
                                <h6>Account Visibility</h6>
                                <p className='text-[grey]'>Your Security informaton Shows here</p>
                            </div>
                        </span>
                        <button className='py-1 px-5 rounded-2xl text-white bg-[#35CD8D]'>Active</button>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-[2rem] nunito mb-4'>
                    <h3 className='text-[grey]'>Login Information</h3>
                    <div className='flex flex-row justify-between'>
                        <span className='flex gap-2 items-center'>
                            <div>
                                <img className='bg-[#35CD8D] p-2 rounded-xl' src={computer} height={35} width={35} alt="" />
                            </div>
                            <div>
                                <h6>Google Chrome</h6>
                                <p className='text-[grey]'>Active Now</p>
                            </div>
                        </span>
                        <button className='py-1 px-5 rounded-2xl bg-[#EBFBF3]'>Remove</button>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span className='flex gap-2 items-center'>
                            <div>
                                <img className='bg-[#35CD8D] p-2 rounded-xl' src={linus} height={35} width={35} alt="" />
                            </div>
                            <div>
                                <h6>Linux 345 </h6>
                                <p className='text-[grey]'>Account Logged in 23 minutes ago</p>
                            </div>
                        </span>
                        <button className='py-1 px-5 rounded-2xl bg-[#EBFBF3]'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Securitypage