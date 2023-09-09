import React from 'react'
import logo from '../../Images/logo.png'


const Content = () => {
    return (
        <div className='py-[3rem]'>
            <div className='container border-2 border-grey py-10 px-7 rounded-3xl w-[80%] lg:w-[20%] flex flex-col gap-9'>
                <div className='flex w-full justify-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex flex-col w-full items-center'>
                    <h4 className='capitalize nunito'>forgot password</h4>
                    <p className='capitalize nunito'>verification code will be sent to your email to recover your password.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <input className=' border-grey w-full py-3 outline-none border-b-2 nunito' type="text" placeholder='Email Address' />
                    <button className='btn text-white'><a href="/verification">Send Now</a></button>
                </div>
            </div>
        </div>
    )
}

export default Content