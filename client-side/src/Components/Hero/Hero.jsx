import React from "react";
import hero from '../../Images/HeroImg (1).png'


const Hero = () =>{
    return(
        <>
            <div className=' container  flex flex-col md:flex-col w-full lg:flex lg:w-full lg:flex-row items-center relative'>
                <div className='w-full flex-col items-center lg:w-1/2 lg:text-left space-y-5'>
                    <h1 className='nunito w-[100%] text-[30px] lg:w-[55%]  md:w-[100%] lg:text-4xl '>Supporting Africa Farmer to Fund their Agric Business</h1>
                    <p>Easy Access to 5million worth of Loan for Your Business</p>
                    <div>
                        <button className='btn text-white'>Get Started</button>
                    </div>
                </div>
                <img className='w-full lg:w-1/2' src={hero} alt="" />
                <div className='absolute w-[50%] h-[70vh] bg-[#9fddc3] right-20 blur-3xl -z-20 rounded-full opacity-30'></div>
            </div>
            <div className="grid grid-cols-2 bg-[#EBFBF3] py-12 mt-[2rem] md:mt-[2rem] lg:mt-[4rem] mb-[3rem] lg:grid-cols-4 gap-4">
                <div>
                    <p className="hero-para">Access to Over</p>
                    <h1 className="head">N50N+</h1>
                </div>
                <div>
                    <p className="hero-para">Trusted Partner</p>
                    <h1 className="head">10k+</h1>
                </div>
                <div>
                    <p className="hero-para">Workers</p>
                    <h1 className="head">500+</h1>
                </div>
                <div>
                    <p className="hero-para">Investor</p>
                    <h1 className="head">100+</h1>
                </div>
            </div>
        </>
    )
}
export default Hero;