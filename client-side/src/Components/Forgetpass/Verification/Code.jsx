import React from 'react'
import logo from '../../../Images/logo.png'


const Code = () => {
    return (
        <div className='flex flex-col py-[2rem] items-center justify-center'>
            <div className='container border-2 border-grey py-10 px-7 rounded-3xl w-[80%] lg:w-[23%] flex flex-col gap-9'>
                <div className='flex w-full justify-center'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex flex-col w-full items-center'>
                    <h4 className='capitalize nunito'>Complete Verification</h4>
                    <p className='capitalize nunito'>enter the code sent to your email</p>
                </div>
                <div className='grid grid-cols-6 w-full gap-3'>
                    <input className=' border-grey w-full py-3 lg:pl-4 pl-2 border-grey border-2 nunito ' type="text" placeholder='1' />
                    <input className=' border-grey w-full py-3 lg:pl-4 pl-2 border-grey border-2 nunito' type="text" placeholder='1' />
                    <input className=' border-grey w-full py-3 lg:pl-4 pl-2 border-grey border-2 nunito' type="text" placeholder='1' />
                    <input className=' border-grey w-full py-3 lg:pl-4 pl-2 border-grey border-2 nunito' type="text" placeholder='1' />
                    <input className=' border-grey w-full py-3 lg:pl-4 pl-2 border-grey border-2 nunito' type="text" placeholder='1' />
                    <input className=' border-grey w-full py-3 lg:pl-4 pl-2 border-grey border-2 nunito' type="text" placeholder='1' />
                </div>
                <p>Dont see the code? <a href='' className='text-[#35CD8D]' >Resend now</a></p>
                <div className='flex flex-col gap-5'>
                    <button className='btn text-white'><a href="/verification">Send Now</a></button>
                </div>
                <a href='/resetpassword' className='capitalize text-[#35cd8d] font-bold'>Reset My Password</a>
            </div>
        </div>
    )
}

export default Code;