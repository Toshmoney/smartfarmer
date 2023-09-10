import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Quickprops1 = (props) =>{
    useEffect(()=>{
        AOS.init();
    },[])
    return(
        <div data-aos="fade-in" className="w-full mt-10 px-5 flex flex-col gap-6 items-center lg:flex lg:flex-row lg:justify-between">
            <img className="w-[50%] lg:w-[450px] lg:h-[450px]" src={props.image} alt=""/>
            <div className='w-full text-center items-centre lg:w-[45%] flex flex-col gap-4 lg:text-left'>
                <h1 className="lg:text-[30px] text-[20px] lg:w-[80%]">{props.heading}</h1>
                <p className="w-full lg:w-[75%] capitalize">{props.paragraph}</p>
                <div>
                    <button className="btn text-white">{props.button}</button>
                </div>
            </div>
        </div>
    )
}
export default Quickprops1