"use client"

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useCartContext } from "@/app/context/CartContext";
import { useState, useEffect } from "react"
import { allServicesArray } from "@/app/data/data";


export const Step5ChooseTherapist = ({currentStep, totalSteps, previousStep, nextStep}) => {

    const {orderDetails, setOrderDetails} = useCartContext()
    const [therapistOptionsArray, setTherapistOptionsArray] = useState([])


    const handleChooseTherapist = (e) => {
        const therapist = e.target.value;
        setOrderDetails((prevState) => ({...prevState, chosenTherapist: therapist[0].toUpperCase() + therapist.slice(1) }))
    }

    const getTherapistOptions = (chosenServiceId, chosenDate) => {
        // get user-selected service
        const selectedService = allServicesArray.find((service) => service.id === chosenServiceId)

        // get user-selected day of the week
        const selectedDate = new Date(chosenDate);
        const chosenDay = selectedDate.getDay()

        const availableTherapists = selectedService.therapists.filter((therapist) => therapist.availableDays.includes(chosenDay))

        setTherapistOptionsArray(availableTherapists)
        setOrderDetails((prevState) => ({ ...prevState, chosenTherapist: availableTherapists[0].name }));
    }

    useEffect(() => {
        getTherapistOptions(orderDetails.chosenServiceId, orderDetails.chosenDate)
    }, [orderDetails.chosenServiceId, orderDetails.chosenDate])


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred therapist:</p>
            <small className="block mb-4">These are the available therapists based on the day and service you chose</small>
            <select className="select select-bordered w-full mb-12" value={orderDetails.chosenTherapist.toLowerCase()} onChange={(e) => handleChooseTherapist(e)}>
                {therapistOptionsArray?.map((therapist, index) => (
                    <option key={index} value={therapist.id}>{therapist.name}</option>
                ))}
            </select>
            <div className="flex justify-between">
                <button className="btn g-moon-action-btn" onClick={previousStep}><MdArrowBackIos /> Go Back</button>
                <button className="btn g-moon-action-btn" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
            </div>        
        </div>   
    )
}