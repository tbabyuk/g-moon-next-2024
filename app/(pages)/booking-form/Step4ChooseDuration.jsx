"use client"

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useCartContext } from "@/app/context/CartContext";
import { useState, useEffect } from "react";
import { allServicesArray } from "@/app/data/data";


export const Step4ChooseDuration = ({currentStep, totalSteps, previousStep, nextStep}) => {

    const {orderDetails, setOrderDetails} = useCartContext()
    const [durationOptionsArray, setDurationOptionsArray] = useState([])


    const handleDurationSelection = (e) => {
        const duration = e.target.value;
        setOrderDetails((prevState) => ({...prevState, chosenDuration: duration }))
    }

    const getDurationOptions = (chosenService) => {
        const selectedService = allServicesArray.find((service) => service.id === chosenService)
        setDurationOptionsArray(selectedService.durationOptions || [])
        console.log("logging duration options array from Step 4:", selectedService.durationOptions)
        setOrderDetails((prevState) => ({ ...prevState, chosenDuration: selectedService.durationOptions[0] }));
    }

    useEffect(() => {
        getDurationOptions(orderDetails.chosenService)
    }, [orderDetails.chosenService])


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred appointment duration:</p>
            <small className="block mb-4">Duration options are different depending on chosen service</small>
            <select className="select select-bordered w-full mb-12" value={orderDetails.chosenDuration} onChange={(e) => handleDurationSelection(e)}>
                {durationOptionsArray?.map((option, index) => (
                    <option key={index} value={option}>{option} mins</option>
                ))}
            </select>
            <div className="flex justify-between">
                <button className="btn g-moon-action-btn" onClick={previousStep}><MdArrowBackIos /> Go Back</button>
                <button className="btn g-moon-action-btn" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
            </div>        
        </div>   
    )
}