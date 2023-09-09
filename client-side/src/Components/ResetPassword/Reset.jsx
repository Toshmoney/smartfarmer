import React from 'react'
import password from '../../Images/Vector (10).png'
import logo from '../../Images/logo.png'


const Reset = () => {
  return (
    <div className='flex flex-col py-[2rem] items-center justify-center'>
        <div className='container border-2 border-grey py-10 px-7 rounded-3xl w-[80%] lg:w-[20%] flex flex-col gap-7'>
            <div className='flex w-full justify-center'>
                <img src={logo} alt="" />
            </div>
            <div className='nunito flex flex-col items-center'>
                <h4>Reset Password</h4>
                <p className='text-[grey] text-[14px] text-center'>Type your password to Login to Your Account</p>
            </div>
            <div className='flex flex-col gap-7'>
                <div className='border-grey w-full border-b-2 flex items-center'>
                    <input className=' border-grey w-full py-3 outline-none nunito' type="text" placeholder='New Password' />
                    <img className='cursor-pointer' src={password} alt="" />
                </div>
                <div className='border-grey w-full border-b-2 flex items-center'>
                    <input className=' border-grey w-full py-3 outline-none nunito' type="text" placeholder='Confirm Password' />
                    <img className='cursor-pointer' src={password} alt="" />
                </div>
                <button className='btn text-white'><a href="">Done</a></button>
            </div>
        </div>
    </div>
  )
}

export default Reset;