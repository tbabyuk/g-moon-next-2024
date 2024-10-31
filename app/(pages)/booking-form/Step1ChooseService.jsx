"use client"

import { useCartContext } from "@/app/context/CartContext";
import { MdArrowForwardIos } from "react-icons/md";

export const Step1ChooseService = ({ currentStep, totalSteps, nextStep }) => {

    const { orderDetails, setOrderDetails } = useCartContext();


    const handleServiceSelection = (e) => {
        const service = e.target.value;
        setOrderDetails((prevState) => ({ ...prevState, chosenService: service }));
    };

    return (
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium mb-3">Choose the service you are interested in:</p>
            <select className="select select-bordered w-full mb-12" value={orderDetails.chosenService} onChange={handleServiceSelection}>
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
                    <option value="body-and-soul-retreat-combo">Body & Soul Retreat Combo - $80</option>
                    <option value="chest-and-stomach-energy-awaken-combo-120">Chest & Stomach Energy Awaken Combo - $120</option>
                    <option value="chest-and-stomach-energy-awaken-combo-100">Chest & Stomach Energy Awaken Combo - $100</option>
                    <option value="booming-life-combo-130">Booming Life Combo - $130</option>
                    <option value="booming-life-combo-100">Booming Life Combo - $100</option>
                    <option value="sweet-care-combo">Sweet Care Combo - $100</option>
                </optgroup>
                <optgroup label="Scalp and Foot Care">
                    <option value="combo-a">Combo A - $95</option>
                    <option value="combo-b">Combo B - $105</option>
                    <option value="combo-c">Combo C - $90</option>
                    <option value="destress-and-rebalance-combo">Destress & Rebalance Combo - $80</option>
                    <option value="sport-and-jet-lag-retreat-combo">Sport & Jet Lag Retreat Combo - $100</option>
                </optgroup>
                <optgroup label="Essence of Body Wellness">
                    <option value="body-and-soul-combo">Body & Soul Combo - $80</option>
                    <option value="dream-package-combo">Dream Package Combo - $90</option>
                    <option value="pain-relief-and-pain-prevention-combo">Pain Relief & Pain Prevention Combo - $90</option>
                    <option value="golfers-heaven-combo">Golfer&apos;s Heaven Combo - $100</option>
                    <option value="lets-relax-experience-combo">Let&apos;s Relax Experience Combo - $120</option>
                </optgroup>
            </select>
            <button className="btn g-moon-action-btn float-end" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
        </div>
    );
};
