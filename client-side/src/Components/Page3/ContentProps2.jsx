import React from 'react'

const ContentProp2 = (props) => {
  return (
    <div className='px-20 text-center lg:text-left lg:px-0 flex flex-col-reverse items-center lg:flex-row lg:w-full lg:justify-between'>
        <img className='h-[400px] w-[400px]' src={props.image} alt="" />
        <div className='flex flex-col gap-6'>
            <h1 className='nunito text-xl lg:text-3xl'>{props.number}</h1>
            <h1 className='nunito capitalize text-2xl lg:w-[70%] lg:text-4xl lg:leading-[50px]'>{props.title}</h1>
            <p className='capitalize word text-[20px] lg:w-[70%]'>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default ContentProp2;