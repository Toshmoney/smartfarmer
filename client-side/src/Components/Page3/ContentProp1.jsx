import React from 'react'

const ContentProp1 = (props) => {
  return (
    <div className='flex flex-row w-full justify-between items-center'>
        <div>
            <h1 className='head'>{props.number}</h1>
            <h1 className='head capitalize w-[70%] leading-8\9'>{props.title}</h1>
            <p className='capitalize nunito text-[20px]'>{props.paragraph}</p>
        </div>
        <img className='h-[400px] w-[400px]' src={props.image} alt="" />
    </div>
  )
}

export default ContentProp1