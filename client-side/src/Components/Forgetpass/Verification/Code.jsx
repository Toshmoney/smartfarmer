import React from 'react'

const Code = () => {
  return (
    <div className='py-[3rem]'>
        <div className='container border-2 border-grey py-10 px-7 rounded-3xl w-full lg:w-[20%] flex flex-col gap-9'>
            <div>
                <button className='btn1 capitalize nunito text-small my-2 text-white lg:text-xl'>Smartfarmer</button>
            </div>
            <div className='flex flex-col w-full items-center'>
                <h4 className='capitalize nunito'>Complete Verification</h4>
                <p className='capitalize nunito'>enter the code sent to your email</p>
            </div>
            <div className='flex justify-between w-full gap-3'>
                <input className=' border-grey w-full border-grey border-2 nunito flex items-center justify-center' type="text" placeholder='1'/>
                <input className=' border-grey w-full py-3 pl-4 border-grey border-2 nunito' type="text" placeholder='1'/>
                <input className=' border-grey w-full py-3 pl-4 border-grey border-2 nunito' type="text" placeholder='1'/>
                <input className=' border-grey w-full py-3 pl-4 border-grey border-2 nunito' type="text" placeholder='1'/>
                <input className=' border-grey w-full py-3 pl-4 border-grey border-2 nunito' type="text" placeholder='1'/>
                <input className=' border-grey w-full py-3 pl-4 border-grey border-2 nunito' type="text" placeholder='1'/>
            </div>
            <p>Dont see the code? <a href=''>Resend now</a></p>
            <div className='flex flex-col gap-5'>
                <button className='btn text-white'><a href="/verification">Send Now</a></button>
            </div>
        </div>
    </div>
  )
}

export default Code;