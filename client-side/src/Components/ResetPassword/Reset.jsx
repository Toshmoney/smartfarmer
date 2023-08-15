import React from 'react'
import password from '../../Images/Vector (10).png'

const Reset = () => {
  return (
    <div className='py-[3rem] px-14 lg:px-0'>
        <div className='container border-2 border-grey py-10 px-7 rounded-3xl w-full lg:w-[20%] flex flex-col gap-7'>
            <div>
                <button className='btn1 capitalize nunito text-small my-2 text-white lg:text-xl'>Smartfarmer</button>
            </div>
            <div className=''>
                
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