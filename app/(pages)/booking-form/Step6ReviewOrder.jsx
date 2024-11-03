"use client"

import { MdArrowBackIos, MdShoppingCart } from "react-icons/md";
import { useCartContext } from "@/app/context/CartContext";
import { formatDate } from "@/app/utils/formatDate"
import { useRouter } from "next/navigation";


export const Step6ReviewOrder = ({currentStep, totalSteps, previousStep}) => {

    const {orderDetails, addProduct} = useCartContext()
    const router = useRouter()


    const handleAddAndGoToCart = () => {
        addProduct()
        router.push("/cart")
    }


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Review your selections:</p>
            <small className="block mb-4">To modify your order, use the &quot;Go Back&quot; button</small>
            <ul className="list-inside list-disc border-2 p-3 mb-12">
                <li>Service: <span className="ms-2 font-bold">{orderDetails.chosenService}</span></li>
                <li>Date: <span className="ms-2 font-bold">{formatDate(orderDetails.chosenDate)}</span></li>
                <li>Start Time: <span className="ms-2 font-bold">{orderDetails.chosenStartTime}</span></li>
                <li>Duration: <span className="ms-2 font-bold">{orderDetails.chosenDuration} minutes</span></li>
                <li>Price: <span className="ms-2 font-bold">${orderDetails.price.toFixed(2)}</span></li>
                <li>Therapist: <span className="ms-4 font-bold">{orderDetails.chosenTherapist}</span></li>
            </ul>
            <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-y-0">
                <button className="btn g-moon-action-btn" onClick={previousStep}><MdArrowBackIos /> Go Back</button>
                <button className="btn bg-green-600 hover:bg-green-700 text-g-moon-white" onClick={handleAddAndGoToCart}>Add to Cart<MdShoppingCart /></button>
            </div>
        </div>   
    )
}


