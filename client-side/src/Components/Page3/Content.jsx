import React from 'react'
import ContentProp1 from './ContentProp1'
import work1 from '../../Images/work1.png'
import work2 from '../../Images/work2.png'
import work3 from '../../Images/work3.png'
import work4 from '../../Images/work4.png'
import work5 from '../../Images/work5.png'

const Content = () => {
  return (
    <div className='container py-11 text-left'>
        <div className='container'>
            <ContentProp1
                number = '01'
                title = 'create an account with smartfarmers.'
                paragraph = 'easy access to 5million worth of loan for your business'
                image = {work1}
            /> 
        </div>
    </div>
  )
}

export default Content