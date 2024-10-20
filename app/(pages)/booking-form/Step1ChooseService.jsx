"use client"


import { useBookingContext } from "@/app/context/BookingContext"
import { MdArrowForwardIos } from "react-icons/md";



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
                {/* THESE ALWAYS NEED TO BE IN SYNC WITH allServicesList inside data.js. DID NOT MAP BECAUSE WANTED TO INCLUDE OPTGROUP TAGS */}
                <optgroup label="Massages">
                    <option value="swedish massage">Swedish Massage</option>
                    <option value="deep tissue massage">Deep Tissue Massage</option>
                    <option value="shiatsu massage">Shiatsu Massage</option>
                    <option value="thai massage">Thai Massage</option>
                    <option value="couples massage">Couples Massage</option>
                    <option value="prenatal massage">Prenatal Massage</option>
                    <option value="postnatal massage">Postnatal Massage</option>
                    <option value="scalp massage">Scalp Massage</option>
                    <option value="face massage">Face Massage</option>
                </optgroup>
                <optgroup label="Body Scrubs">
                    <option value="sugar scrub">Sugar Scrub</option>
                    <option value="sea salt scrub">Sea Salt Scrub</option>
                    <option value="coffee scrub">Coffee Scrub</option>
                </optgroup>
                <optgroup label="Other Services">
                    <option value="aromatherapy">Aromatherapy</option>
                    <option value="reflexology">Reflexology</option>
                    <option value="hot stone therapy">Hot Stone Therapy</option>
                    <option value="table shower">Table Shower</option>
                </optgroup>
            </select>
            <button className="btn g-moon-action-btn float-end" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
        </div>   
    )
}