"use client"

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { therapistsBasedOnDays } from "@/app/data/data"
import { useCartContext } from "@/app/context/CartContext";
import { useState, useEffect } from "react"

export const Step5ChooseTherapist = ({currentStep, totalSteps, previousStep, nextStep}) => {

    const {orderDetails, setOrderDetails} = useCartContext()
    const [therapistOptionsArray, setTherapistOptionsArray] = useState([])


    const handleTherapistSelection = (e) => {
        const therapist = e.target.value;
        setOrderDetails((prevState) => ({...prevState, chosenTherapist: therapist }))
    }


    useEffect(() => {
            const date = new Date(orderDetails.chosenDate);
            const chosenDay = date.toLocaleString("en-US", {
            weekday: "long"
            })
            const therapistOptions = therapistsBasedOnDays.filter((therapist) => therapist.availability.includes(chosenDay.toLowerCase()) && therapist.services.includes(orderDetails.chosenService))
            setTherapistOptionsArray(therapistOptions)
            setOrderDetails((prevState) => ({...prevState, chosenTherapist: therapistOptions[0]?.name}))
    }, [orderDetails.chosenService, orderDetails.chosenDate])


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred therapist:</p>
            <small className="block mb-4">These are the available therapists based on the day and service you chose</small>
            <select className="select select-bordered w-full mb-12" value={orderDetails.chosenTherapist} onChange={(e) => handleTherapistSelection(e)}>
                {therapistOptionsArray?.map((therapist, index) => (
                    <option key={index} value={therapist.name}>{therapist.name[0].toUpperCase() + therapist.name.slice(1)}</option>
                ))}
            </select>
            <div className="flex justify-between">
                <button className="btn g-moon-action-btn" onClick={previousStep}><MdArrowBackIos /> Go Back</button>
                <button className="btn g-moon-action-btn" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
            </div>        
        </div>   
    )
}