import React from 'react'
import password from '../../Images/Vector (10).png'



const Content = () => {
  return (
    <div className='py-[3rem]'>
        <div className='container border-2 border-grey py-10 px-7 rounded-3xl w-full lg:w-[20%] flex flex-col gap-7'>
            <div>
                <button className='btn1 capitalize nunito text-small my-2 text-white lg:text-xl'>Smartfarmer</button>
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
                <b className='font-small'>By Signing Mean You agree To Our <span className='text-[##35CD8D]'><a href=""><u>Terms of Services</u></a></span></b>
                <button className='btn text-white'>Create an Account</button>
               
            </div>
        </div>
    </div>
  )
}

export default Content