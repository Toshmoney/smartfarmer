import React from 'react'

const ContentProp1 = (props) => {
  return (
    <div className='px-20 text-center lg:text-left lg:px-0 flex flex-col items-center lg:flex-row lg:w-full lg:justify-between'>
        <div className='flex flex-col gap-6'>
            <h1 className='nunito text-xl lg:text-3xl'>{props.number}</h1>
            <h1 className='nunito capitalize text-2xl lg:w-[70%] lg:text-4xl lg:leading-[50px]'>{props.title}</h1>
            <p className='capitalize word lg:w-[60%] text-[20px]'>{props.paragraph}</p>
        </div>
        <img className='h-[400px] w-[400px]' src={props.image} alt="" />
    </div>
  )
}

export default ContentProp1