import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import test from '../../Images/test.svg'
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Aboutus = () => {
  useEffect(()=>{

  },[])
  return (
    <div data-aos="fade-up" className='px-20 mb-[1rem]'>
      <div className='container capitalize nunito lg:text-left items-center text-center lg:items-start lg:w-full flex flex-col gap-3'>
        <h1 className='lg:w-[35%] w-full font-extrabold lg:text-[45px] text-[20px]'>what farmers are saying about us</h1>
        <p className='capitalize nunito lg:text-xl text-[16px] text-[grey]'>request a loan and get money to your balance</p>
        <Swiper className='container flex flex-row justify-between w-full mt-4'
          modules={[Navigation, Autoplay, Scrollbar]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{ autoplay: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            }

          }}
        >
          <SwiperSlide className='bg1 relative z-auto text-white nunito rounded-[10%]'>
            <div className='relative p-5 z-50 flex flex-col items-center text-center gap-2'>
              <p className='lg:text-[20px] text-[15px]'>"I've had a wonderful experience with this loan platform. As a first-time borrower, I was unsure about the process, but their customer support team was exceptional. They patiently answered all my questions and helped me secure the loan I needed to upgrade my irrigation system. I am grateful for their assistance!"</p>
              <img src={test} alt="" />
              <h5>Jenny Wilson</h5>
              <h6>Horticulture</h6>
            </div>
            <div className='absolute w-full h-full top-0 rounded-[10%] bg-black opacity-[0.7]'></div>
          </SwiperSlide>
          <SwiperSlide className='bg2 relative z-auto text-white rounded-[10%] nunito'>
            <div className='relative flex flex-col items-center gap-2 p-5 z-50'>
              <p className='lg:text-[20px] text-[15px] text-center'>"I've had a wonderful experience with this loan platform. As a first-time borrower, I was unsure about the process, but their customer support team was exceptional. They patiently answered all my questions and helped me secure the loan I needed to upgrade my irrigation system. I am grateful for their assistance!"</p>
              <img src={test} alt="" />
              <h5>Jenny Wilson</h5>
              <h6>Horticulture</h6>
            </div>
            <div className='absolute w-full h-full top-0 rounded-[10%] bg-black opacity-[0.7]'></div>
          </SwiperSlide>
          <SwiperSlide className='bg3 relative z-auto items-center text-white rounded-[10%]  nunito'>
            <div className='relative flex flex-col items-center gap-2 p-5 z-50'>
              <p className='lg:text-[20px] text-[15px] text-center'>"I've had a wonderful experience with this loan platform. As a first-time borrower, I was unsure about the process, but their customer support team was exceptional. They patiently answered all my questions and helped me secure the loan I needed to upgrade my irrigation system. I am grateful for their assistance!"</p>
              <img src={test} alt="" />
              <h5>Jenny Wilson</h5>
              <h6>Horticulture</h6>
            </div>
            <div className='absolute w-full h-full top-0 bg-black rounded-[10%] opacity-[0.7]'></div>
          </SwiperSlide>
          <SwiperSlide className='bg3 relative z-auto items-center text-white rounded-[10%]  nunito'>
            <div className='relative flex flex-col items-center gap-2 p-5 z-50'>
              <p className='lg:text-[20px] text-[15px] text-center'>"I've had a wonderful experience with this loan platform. As a first-time borrower, I was unsure about the process, but their customer support team was exceptional. They patiently answered all my questions and helped me secure the loan I needed to upgrade my irrigation system. I am grateful for their assistance!"</p>
              <img src={test} alt="" />
              <h5>Jenny Wilson</h5>
              <h6>Horticulture</h6>
            </div>
            <div className='absolute w-full h-full top-0 bg-black rounded-[10%] opacity-[0.7]'></div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  )
}

export default Aboutus;
