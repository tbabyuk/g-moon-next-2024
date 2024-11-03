"use client"

import { useCartContext } from "@/app/context/CartContext";
import { MdArrowForwardIos } from "react-icons/md";

export const Step1ChooseService = ({ currentStep, totalSteps, nextStep }) => {

    const { orderDetails, setOrderDetails } = useCartContext();


    const handleChooseService = (e) => {
        const serviceId = e.target.value;
        setOrderDetails((prevState) => ({
            ...prevState, 
            chosenService: e.target.selectedOptions[0].text,
            chosenServiceId: serviceId
        }));
    };

    return (
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium mb-3">Choose the service you are interested in:</p>
            <select className="select select-bordered w-full mb-12" value={orderDetails.chosenServiceId} onChange={handleChooseService}>
                {/* THESE ALWAYS NEED TO BE IN SYNC WITH allServicesArray inside data.js. DID NOT MAP BECAUSE WANTED TO INCLUDE OPTGROUP TAGS */}
                <optgroup label="Healing Touch Treasures">
                    <option value="acupressure-thai-massage">Acupressure Thai Massage</option>
                    <option value="aromatic-hot-stone-massage">Aromatic Hot Stone Massage</option>
                    <option value="couples-massage">Couples Massage</option>
                    <option value="deep-tissue-massage">Deep Tissue Massage</option>
                    <option value="foot-acupressure-massage">Foot Acupressure Massage</option>
                    <option value="head-and-shoulder-thai-massage">Head and Shoulder Thai Massage</option>
                    <option value="japanese-shiatsu-massage">Japanese Shiatsu Massage</option>
                    <option value="lymphatic-detoxification">Lymphatic Detoxification</option>
                    <option value="organic-oil-body-massage">Organic Oil Body Massage</option>
                    <option value="swedish-massage">Swedish Massage</option>
                    <option value="table-shower">Table Shower</option>
                    <option value="traditional-thai-massage">Traditional Thai Massage</option>
                </optgroup>
                <optgroup label="Ladies Retreat">
                    <option value="body-and-soul-retreat-combo">Body & Soul Retreat Combo</option>
                    <option value="chest-and-stomach-energy-awaken-combo">Chest & Stomach Energy Awaken Combo</option>
                    <option value="booming-life-combo">Booming Life Combo</option>
                    <option value="sweet-care-combo">Sweet Care Combo</option>
                </optgroup>
                <optgroup label="Scalp and Foot Care">
                    <option value="combo-a">Combo A</option>
                    <option value="combo-b">Combo B</option>
                    <option value="combo-c">Combo C</option>
                    <option value="destress-and-rebalance-combo">Destress & Rebalance Combo</option>
                    <option value="sport-and-jet-lag-retreat-combo">Sport & Jet Lag Retreat Combo</option>

                </optgroup>
                <optgroup label="Essence of Body Wellness">
                    <option value="body-and-soul-combo">Body & Soul Combo</option>
                    <option value="dream-package-combo">Dream Package Combo</option>
                    <option value="pain-relief-and-pain-prevention-combo">Pain Relief & Pain Prevention Combo</option>
                    <option value="golfers-heaven-combo">Golfer's Heaven Combo</option>
                    <option value="lets-relax-experience-combo">Let's Relax Experience Combo</option>
                    <option value="test-combo">Test Combo</option>
                </optgroup>
            </select>
            <button className="btn g-moon-action-btn float-end" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
        </div>
    );
};
