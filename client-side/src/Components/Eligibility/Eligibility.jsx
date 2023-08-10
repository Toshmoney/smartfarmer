import React from "react";
import Eligibilityprops from "./Eligibilityprops";
import one from '../../Images/Group 6.png'
import two from '../../Images/Group 7.png'
import three from '../../Images/Group 8.png'
import four from '../../Images/Group 9.png'
import five from '../../Images/Group 10.png'
import six from '../../Images/Group 11.png'
import seven from '../../Images/Group 12.png'
import eight from '../../Images/Group 13.png'


const Eligibility = () =>{
    return(
        <div className=" bg-[#EBFBF3] w-full text-left py-20 mt-[6rem]">
            <div className="container flex flex-col gap-2">
                <h1 className="head capitalize w-[32%]">what required to be eligible for the loan</h1>
                <p className="word w-[40%] capitalize">we give loans to founders, business owners, farmers to grow their business in a profitable way.</p>
                <div className="grid grid-cols-4 gap-7 mt-8">
                    <Eligibilityprops
                        image = {one}
                        title = '20+ age requirement'
                    />
                    <Eligibilityprops
                        image = {two}
                        title = 'Agricultural Background'
                    />
                    <Eligibilityprops
                        image = {three}
                        title = 'Proof of Farming'
                    />
                    <Eligibilityprops
                        image = {four}
                        title = ' Financial Stability'
                    />
                    <Eligibilityprops
                        image = {five}
                        title = 'Documentation'
                    />
                    <Eligibilityprops
                        image = {six}
                        title = 'Compliance'
                    />
                    <Eligibilityprops
                        image = {seven}
                        title = 'Payment Capacity'
                    />
                    <Eligibilityprops
                        image = {eight}
                        title = 'Geographic Limitations'
                    />
                </div>
            </div>
        </div>
    )
}
export default Eligibility;