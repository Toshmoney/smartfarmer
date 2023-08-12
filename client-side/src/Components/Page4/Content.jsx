import React from 'react'

const Content = () => {
  return (
    <div>
        <div className='container flex flex-row justify-between lg:pt-[13rem]'>
            <div className='flex flex-col gap-2 border-2 border-grey rounded-2xl w-[30%] py-10 text-left px-20'>
                <h3 className='capitalize nunito'>office address</h3>
                <p className='capitalize nunito'>no 2B Taiwo road, ilorin, kwara state</p>
            </div>
            <div className='flex flex-col gap-2 border-2 border-grey rounded-2xl w-[30%] py-10 text-left px-20'>
                <h3 className='capitalize nunito'>email address</h3>
                <p className='capitalize nunito'>info@smartfarmers.com</p>
            </div>
            <div className='flex flex-col gap-2 border-2 border-grey rounded-2xl w-[30%] py-10 text-left px-20'>
                <h3 className='capitalize nunito'>phone no.</h3>
                <p className='capitalize nunito'>(+234) 70 6483 6784</p>
            </div>
        </div>
    </div>
  )
}

export default Content