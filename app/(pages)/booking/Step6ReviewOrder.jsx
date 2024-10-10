"use client"

import { useBookingContext } from "@/app/context/BookingContext"


export const Step6ReviewOrder = ({currentStep, totalSteps, previousStep, nextStep}) => {


    const {orderDetails} = useBookingContext()

    const date = orderDetails.chosenDate;

    const formattedDate = date?.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric"
    });


    const formatService = (service) => {
        const stringArray = service.split(" ")
        if(stringArray.length === 1) {
            return `${stringArray[0][0].toUpperCase()}${stringArray[0].slice(1)}`
        } else if (stringArray.length === 2) {
            return `${stringArray[0][0].toUpperCase() + stringArray[0].slice(1)} ${stringArray[1][0].toUpperCase() + stringArray[1].slice(1)}`
        } else {
            return `${stringArray[0][0].toUpperCase() + stringArray[0].slice(1)} ${stringArray[1][0].toUpperCase() + stringArray[1].slice(1)} ${stringArray[2][0].toUpperCase() + stringArray[2].slice(1)}`
        }
    }


    const handleCheckout = async () => {

        console.log("Logging orderDetails from handleCheckout:", orderDetails)

        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderDetails)
            })

            if(res.ok) {
                const {url} = await res.json()
                window.location.assign(url)            
            }
    
        } catch (error) {
            console.log(error.message)
        }
    }


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Review your selections:</p>
            <small className="block mb-4">To modify your order, use the &quot;Go Back&quot; button</small>
            <ul className="list-inside list-disc border-2 p-3 mb-12">
                <li>Service: <span className="ms-2 font-bold">{formatService(orderDetails.chosenService)}</span></li>
                <li>Date: <span className="ms-2 font-bold">{formattedDate}</span></li>
                <li>Start Time: <span className="ms-2 font-bold">{orderDetails.chosenStartTime}</span></li>
                <li>Duration: <span className="ms-2 font-bold">{orderDetails.chosenDuration} minutes</span></li>
                <li>Therapist: <span className="ms-4 font-bold">{orderDetails.chosenTherapist[0]?.toUpperCase() + orderDetails.chosenTherapist.slice(1)}</span></li>
            </ul>
            <div className="flex justify-between">
                <button className="btn btn-success text-g-moon-white float-end" onClick={previousStep}>Go Back</button>
                <button className="btn btn-warning text-g-moon-white float-end" onClick={handleCheckout}>Go to Checkout</button>
            </div>        
        </div>   
    )
}


