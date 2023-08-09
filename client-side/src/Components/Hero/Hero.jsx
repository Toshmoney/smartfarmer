import React from "react";
import hero from '../../Images/HeroImg (1).png'


const Hero = () =>{
    return(
        <div className=' container  flex flex-col md:flex-col w-full lg:flex lg:w-full lg:flex-row items-center relative'>
            <div className='w-full flex-col items-center text-center py-20 lg:w-1/2 lg:text-left space-y-5'>
                <h1 className='head w-[100%] text-xl lg:w-[55%] lg:text-4xl  md:w-[100%] md:text-xl '>Supporting Africa Farmer to Fund their Agric Business</h1>
                <p>Easy Access to 5million worth of Loan for Your Business</p>
                <div>
                    <button className='btn text-white'>Get Started</button>
                </div>
            </div>
            <img className='w-full lg:w-1/2' src={hero} alt="" />
        <div className='absolute w-[50%] h-[70vh] bg-[#9fddc3] right-20 blur-3xl -z-20 rounded-full opacity-30'></div>
    </div>
    )
}
export default Hero;