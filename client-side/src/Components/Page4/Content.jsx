import React from 'react'

const Content = () => {
  return (
    <div className='px-20 lg:px-0'>
        <div className='container flex flex-col gap-10 my-10 lg:flex-row justify-between lg:pt-[13rem] lg:pb-[8rem]'>
            <div className='flex flex-col gap-2 border-2 border-grey rounded-2xl lg:w-[30%] py-10 text-left px-20'>
                <h3 className='capitalize nunito'>office address</h3>
                <p className='capitalize nunito'>no 2B Taiwo road, ilorin, kwara state</p>
            </div>
            <div className='flex flex-col gap-2 border-2 border-grey rounded-2xl lg:w-[30%] py-10 text-left px-20'>
                <h3 className='capitalize nunito'>email address</h3>
                <p className='capitalize nunito'>info@smartfarmers.com</p>
            </div>
            <div className='flex flex-col gap-2 border-2 border-grey rounded-2xl lg:w-[30%] py-10 text-left px-20'>
                <h3 className='capitalize nunito'>phone no.</h3>
                <p className='capitalize nunito'>(+234) 70 6483 6784</p>
            </div>
        </div>
        <div className='container w-full lg:w-[39%] flex flex-col gap-7'>
            <h1 className='capitalize nunito text-2xl my-6 lg:text-4xl'>need more help? fill the form below</h1>
            <div className='flex flex-col gap-4'>
                <input className=' border-grey w-full py-3 outline-none border-b-2 nunito' type="text" placeholder='Full Name' />
                <input className=' border-grey w-full py-3 outline-none border-b-2 nunito' type="text" placeholder='Email Address' />
                <input className=' border-grey w-full py-3 outline-none border-b-2 nunito' type="text" placeholder='Subject' />
                <input className=' border-grey w-full py-3 outline-none border-b-2 nunito' type="text" placeholder='Message' />
                <div className='text-left mt-6'>
                    <button className='btn text-white'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content