import React from "react";

const Quickprops1 = (props) =>{
    return(
        <div className={props.class}>
            <img src={props.image} alt=""/>
            <div className={props.div}>
                <h1>{props.heading}</h1>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}
export default Quickprops1