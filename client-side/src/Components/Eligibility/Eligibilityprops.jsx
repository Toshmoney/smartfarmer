import React from "react";

const Eligibilityprops = (props) =>{
    return(
        <div className="py-10 bg-white w-[100%] rounded-3xl flex flex-col items-center gap-5">
            <img src={props.image} alt="" />
            <h5 className="nunito">{props.title}</h5>
        </div>
    )
}
export default Eligibilityprops;