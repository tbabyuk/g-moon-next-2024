"use client"

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useCartContext } from "@/app/context/CartContext";
import { useState, useEffect } from "react";
import { allServicesArray } from "@/app/data/data";


export const Step4ChooseDuration = ({currentStep, totalSteps, previousStep, nextStep}) => {

    const {orderDetails, setOrderDetails} = useCartContext()
    const [durationOptionsArray, setDurationOptionsArray] = useState([])


    const handleChooseDuration = (e) => {
        const duration = e.target.value;
        const selectedService = allServicesArray.find((service) => service.id === orderDetails.chosenServiceId)
        console.log("Logging duration and currentService from Step4ChooseDuration:", duration, selectedService)
        setOrderDetails((prevState) => ({...prevState, chosenDuration: duration, price: selectedService.pricingOptions[duration].price, chosenServicePriceId: selectedService.pricingOptions[duration].priceId }))
    }

    const getDurationOptions = (chosenServiceId) => {
        const selectedService = allServicesArray.find((service) => service.id === chosenServiceId)
        const defaultServiceDuration = selectedService.durationOptions[0]
        setDurationOptionsArray(selectedService.durationOptions || [])
        // set both duration and price
        setOrderDetails((prevState) => ({
                ...prevState, 
                chosenDuration: defaultServiceDuration,
                price: selectedService.pricingOptions[defaultServiceDuration].price,
                chosenServicePriceId: selectedService.pricingOptions[defaultServiceDuration].priceId
            }));
    }


    useEffect(() => {
        getDurationOptions(orderDetails.chosenServiceId)
    }, [orderDetails.chosenServiceId])


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred appointment duration:</p>
            <small className="block mb-4">Duration options are different depending on chosen service</small>
            <select className="select select-bordered w-full mb-12" value={orderDetails.chosenDuration} onChange={(e) => handleChooseDuration(e)}>
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