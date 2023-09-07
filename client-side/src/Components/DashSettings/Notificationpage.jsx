import React, { useState } from 'react'
import key from '../../Images/lock.svg';
import fa from '../../Images/2fa.png'
import visibility from '../../Images/visibility.svg';
import computer from '../../Images/mac.svg'
import linus from '../../Images/linus.svg'

const Notificationpage = () => {
  const [change, setChange] = useState(false)
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
                <h6>Email Notification</h6>
                <p className='text-[grey]'>Your Security informaton Shows here</p>
              </div>
            </span>
            <button onClick={() => setChange(!change)} className={change? "py-1 px-5 rounded-2xl bg-[#35CD8D] text-white":'py-1 px-5 rounded-2xl bg-[#EBFBF3]' }>
              {change? "Enable":"Disable"}
            </button>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='flex gap-2 items-center'>
              <div>
                <img className='bg-[#35CD8D] p-2 rounded-xl' src={fa} height={35} width={35} alt="" />
              </div>
              <div>
                <h6>SMS Notification</h6>
                <p className='text-[grey]'>Your Security informaton Shows here</p>
              </div>
            </span>
            <button className='py-1 px-5  rounded-2xl bg-[#EBFBF3]'>Disable</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notificationpage