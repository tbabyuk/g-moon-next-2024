"use client"

import { allServicesList } from "@/app/data/data"
import { useBookingContext } from "@/app/context/BookingContext"


export const Step1ChooseService = ({currentStep, totalSteps, nextStep}) => {

    const {orderDetails, setOrderDetails} = useBookingContext()

    const handleServiceSelection = (e) => {
        const service = e.target.value;
        setOrderDetails((prevState) => ({...prevState, chosenService: service}))
    }


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium mb-3">Choose the service you are interested in:</p>
            <select className="select select-bordered w-full mb-12" value={orderDetails.chosenService} onChange={(e) => handleServiceSelection(e)}>
                {allServicesList.map((service, index) => (
                    <option key={index} value={service.name}>{service.name}</option>
                ))}
            </select>
            <button className="btn btn-success text-g-moon-white float-end" onClick={nextStep}>Next Step</button>
        </div>   
    )
}