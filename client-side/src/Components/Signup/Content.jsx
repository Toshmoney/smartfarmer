import React from 'react'
import password from '../../Images/Vector (10).png'
import logo from '../../Images/logo.png'



const Content = () => {
  return (
    <div className='flex flex-col py-[2rem] items-center justify-center'>
        <div className='container border-2 border-grey py-10 px-7 rounded-3xl w-[80%] lg:w-[22%] flex flex-col gap-7'>
        <div className='flex w-full justify-center'>
                <img src={logo} alt="" />
            </div>
            <div className='flex flex-row w-full justify-between items-center'>
                <button className='btn1 text-white'><a href="">Create an Account</a></button>
                <button className='text-[grey]'><a href="/signin">Sign In</a></button>
            </div>
            <div className='flex flex-col gap-4'>
                <input className=' border-grey w-full py-3 outline-none border-b-2 nunito' type="text" placeholder='Full Name' />
                <input className=' border-grey w-full py-3 outline-none border-b-2 nunito' type="text" placeholder='Email Address' />
                <div className='border-grey w-full border-b-2 flex items-center'>
                    <input className=' border-grey w-full py-3 outline-none nunito' type="text" placeholder='Password' />
                    <img src={password} alt="" />
                </div>
                <b className='text-[14px]'>By Signing Mean You agree To Our <span><a href=""><u className='text-[#35CD8D]'>Terms of Services</u></a></span></b>
                <button className='btn text-white'>Create an Account</button>
               
            </div>
        </div>
    </div>
  )
}

export default Content