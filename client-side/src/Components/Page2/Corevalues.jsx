import React from 'react'
import { values } from './data'

const Corevalues = () => {
  return (
    <div className='container mt-6 flex flex-col gap-10'>
        <div>
            <h1>Our Core Values</h1>
            <p className='capitalize nunito text-2xl text-bold text-[grey]'>easy access to 5million worth of loan for your business</p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                values.map(d=>{
                    return(
                        <div className='text-left shadow-lg bg-white rounded-xl p-7'>
                            <h2 className='nunito'>{d.number}</h2>
                            <h2 className='nunito'>{d.title}</h2>
                            <p className='nunito'>{d.para}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Corevalues