import React from 'react'

const Securitypage = () => {
  return (
    <div className='bg-white w-full h-page px-7 nunito'>
        <div>
            <h1 className='nunito font-bold'>Security Management</h1>
            <p className='nunito '>Your Security Information show here</p>
            <div className='w-full'>
                <div className='flex flex-row justify-between'>
                    <span>
                        <div className='bg-[#35CD8D] items-center justify-center'>

                        </div>
                        <div>
                            <h6>Password</h6>
                            <p>Your Security informaton Shows here</p>
                        </div>
                    </span>
                    <button className='py-1 px-5 rounded-2xl bg-[lightgreen]'>Change</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Securitypage