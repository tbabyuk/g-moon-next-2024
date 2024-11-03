"use client"

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useCartContext } from "@/app/context/CartContext";

export const Step3ChooseTime = ({currentStep, totalSteps, previousStep, nextStep}) => {

    const {orderDetails, setOrderDetails} = useCartContext()

    const handleChooseStartTime = (e) => {
        const time = e.target.value;
        setOrderDetails((prevState) => ({...prevState, chosenStartTime: time }))
    }

    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred start time:</p>
            <small className="block mb-4">Times are limited to our operating hours</small>
            <select className="select select-bordered w-full mb-12" value={orderDetails.chosenStartTime} onChange={(e) => handleChooseStartTime(e)}>
                <option value="10:00am">10:00am</option>
                <option value="10:15am">10:15am</option>
                <option value="10:30am">10:30am</option>
                <option value="10:45am">10:45am</option>
                <option value="11:00am">11:00am</option>
                <option value="11:15am">11:15am</option>
                <option value="11:30am">11:30am</option>
                <option value="11:45am">11:45am</option>
                <option value="12:00pm">12:00pm</option>
                <option value="12:15pm">12:15pm</option>
                <option value="12:30pm">12:30pm</option>
                <option value="12:45pm">12:45pm</option>
                <option value="1:00pm">1:00pm</option>
                <option value="1:15pm">1:15pm</option>
                <option value="1:30pm">1:30pm</option>
                <option value="1:45pm">1:45pm</option>
                <option value="2:00pm">2:00pm</option>
                <option value="2:15pm">2:15pm</option>
                <option value="2:30pm">2:30pm</option>
                <option value="2:45pm">2:45pm</option>
                <option value="3:00pm">3:00pm</option>
                <option value="3:15pm">3:15pm</option>
                <option value="3:30pm">3:30pm</option>
                <option value="3:45pm">3:45pm</option>
                <option value="4:00pm">4:00pm</option>
                <option value="4:15pm">4:15pm</option>
                <option value="4:30pm">4:30pm</option>
                <option value="4:45pm">4:45pm</option>
                <option value="5:00pm">5:00pm</option>
                <option value="5:15pm">5:15pm</option>
                <option value="5:30pm">5:30pm</option>
                <option value="5:45pm">5:45pm</option>
                <option value="6:00pm">6:00pm</option>
                <option value="6:15pm">6:15pm</option>
                <option value="6:30pm">6:30pm</option>
                <option value="6:45pm">6:45pm</option>
                <option value="7:00pm">7:00pm</option>
                <option value="7:15pm">7:15pm</option>
                <option value="7:30pm">7:30pm</option>
                <option value="7:45pm">7:45pm</option>
                <option value="8:00pm">8:00pm</option>
                <option value="8:15pm">8:15pm</option>
                <option value="8:30pm">8:30pm</option>
                <option value="8:45pm">8:45pm</option>
                <option value="9:00pm">9:00pm</option>
                <option value="9:15pm">9:15pm</option>
                <option value="9:30pm">9:30pm</option>
            </select>
            <div className="flex justify-between">
                <button className="btn g-moon-action-btn" onClick={previousStep}><MdArrowBackIos /> Go Back</button>
                <button className="btn g-moon-action-btn" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
            </div>        
        </div>   
    )
}