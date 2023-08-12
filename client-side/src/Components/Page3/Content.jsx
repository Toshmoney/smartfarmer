import React from 'react'
import ContentProp1 from './ContentProp1'
import work1 from '../../Images/work1.png'
import work2 from '../../Images/work2.png'
import work3 from '../../Images/work3.png'
import work4 from '../../Images/work4.png'
import work5 from '../../Images/work5.png'
import ContentProp2 from './ContentProps2'

const Content = () => {
  return (
    <div className='container lg:pt-[10rem] text-left'>
      <div className='container flex flex-col gap-10'>
        <ContentProp1
          number = '01'
          title = 'create an account with smart farmers.'
          paragraph = 'easy access to 5million worth of loan for your business'
          image = {work1}
        /> 
        <ContentProp2
          number = '02'
          title = 'verify your account and KYC Details.'
          paragraph = 'easy access to 5million worth of loan for your business'
          image = {work2}
        />
        <ContentProp1
          number = '03'
          title = 'apply for loan and provide neccesary information.'
          paragraph = 'easy access to 5million worth of loan for your business'
          image = {work3}
        />
        <ContentProp2
          number = '04'
          title = 'wait for admin review and feedback.'
          paragraph = 'easy access to 5million worth of loan for your business'
          image = {work4}
        /> 
        <ContentProp1
          number = '05'
          title = 'admin approval and disbursement.'
          paragraph = 'easy access to 5million worth of loan for your business'
          image = {work5}
        /> 

        </div>
    </div>
  )
}

export default Content