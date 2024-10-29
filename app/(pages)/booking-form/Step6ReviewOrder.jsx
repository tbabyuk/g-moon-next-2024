"use client"

import { MdArrowBackIos, MdShoppingCart, MdCreditCard } from "react-icons/md";
import { useCartContext } from "@/app/context/CartContext";
import { formatDate } from "@/app/utils/formatDate"
// import { formatService } from "@/app/utils/formatService"

export const Step6ReviewOrder = ({currentStep, totalSteps, previousStep}) => {

    const {orderDetails, setOrderDetails, setCartItemsArray} = useCartContext()


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

    const handleAddToCart = () => {
        setCartItemsArray((prev) => [...prev, {...orderDetails}])
    }


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Review your selections:</p>
            <small className="block mb-4">To modify your order, use the &quot;Go Back&quot; button</small>
            <ul className="list-inside list-disc border-2 p-3 mb-12">
                {/* <li>Service: <span className="ms-2 font-bold">{formatService(orderDetails.chosenService)}</span></li> */}
                <li>Date: <span className="ms-2 font-bold">{formatDate(orderDetails.chosenDate)}</span></li>
                <li>Start Time: <span className="ms-2 font-bold">{orderDetails.chosenStartTime}</span></li>
                <li>Duration: <span className="ms-2 font-bold">{orderDetails.chosenDuration} minutes</span></li>
                {/* <li>Therapist: <span className="ms-4 font-bold">{orderDetails.chosenTherapist[0]?.toUpperCase() + orderDetails.chosenTherapist.slice(1)}</span></li> */}
            </ul>
            <div className="flex flex-col md:flex-row justify-between mb-4">
                <button className="btn bg-gray-400 hover:bg-gray-500 text-g-moon-white mb-4 md:mb-0" onClick={handleAddToCart}>Add to Cart & Keep Shopping <MdShoppingCart /></button>
                <button className="btn bg-green-600 hover:bg-green-700 text-g-moon-white" onClick={handleCheckout}>Go to Checkout <MdCreditCard /></button>
            </div>
            <div className="flex justify-between">
                <button className="btn g-moon-action-btn" onClick={previousStep}><MdArrowBackIos /> Go Back</button>
            </div>
        </div>   
    )
}


