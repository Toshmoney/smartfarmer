import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Eligibilityprops = (props) =>{
    useEffect(()=>{
        AOS.init();
    }, [])
    return(
        <div data-aos="fade-in" className="py-10 bg-white w-[100%] rounded-3xl flex flex-col items-center gap-5">
            <img src={props.image} alt="" />
            <h5 className="nunito">{props.title}</h5>
        </div>
    )
}
export default Eligibilityprops;