"use client"


import { useCartContext } from "@/app/context/CartContext";
import { MdArrowForwardIos } from "react-icons/md";



export const Step1ChooseService = ({currentStep, totalSteps, nextStep}) => {

    const {orderDetails, setOrderDetails} = useCartContext()

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
                <optgroup label="Healing Touch Treasures">
                    <option value="acupressure thai massage">Acupressure Thai Massage</option>
                    <option value="aromatic hot stone massage">Aromatic Hot Stone Massage</option>
                    <option value="couples massage">Couples Massage</option>
                    <option value="deep tissue massage">Deep Tissue Massage</option>
                    <option value="foot acupressure massage">Foot Acupressure Massage</option>
                    <option value="head and shoulder thai massage">Head and Shoulder Thai Massage</option>
                    <option value="japanese shiatsu massage">Japanese Shiatsu Massage</option>
                    <option value="lymphatic detoxification">Lymphatic Detoxification</option>
                    <option value="organic oil body massage">Organic Oil Body Massage</option>
                    <option value="swedish massage">Swedish Massage</option>
                    <option value="table shower">Table Shower</option>
                    <option value="traditional thai massage">Traditional Thai Massage</option>
                </optgroup>
                <optgroup label="Ladies Retreat">
                    <option value="body and soul retreat combo 80">Body & Soul Retreat Combo - $80</option>
                    <option value="chest and stomach energy awaken combo 120">Chest & Stomach Energy Awaken Combo - $120</option>
                    <option value="chest and stomach energy awaken combo 100">Chest & Stomach Energy Awaken Combo - $100</option>
                    <option value="booming life combo 130">Booming Life Combo - $130</option>
                    <option value="booming life combo 100">Booming Life Combo - $100</option>
                    <option value="sweet care combo 100">Sweet Care Combo - $100</option>
                </optgroup>
                <optgroup label="Scalp and Foot Care">
                    <option value="combo a 95">Combo A - $95</option>
                    <option value="combo b 105">Combo B - $105</option>
                    <option value="combo c 90">Combo C - $90</option>
                    <option value="destress and rebalance combo 80">Destress & Rebalance Combo - $80</option>
                    <option value="sport and jet lag retreat combo 100">Sport & Jet Lag Retreat Combo - $100</option>
                </optgroup>
                <optgroup label="Essence of Body Wellness">
                    <option value="body and soul combo ??">Body & Soul Combo - $??</option>
                    <option value="dream package combo 90">Dream Package Combo - $90</option>
                    <option value="pain relief and pain prevention combo 90">Pain Relief & Pain Prevention Combo - $90</option>
                    <option value="golfer's heaven combo 100">Golfer's Heaven Combo - $100</option>
                    <option value="let's relax experience combo 120">Let's Relax Experience Combo - $120</option>
                </optgroup>
            </select>
            <button className="btn g-moon-action-btn float-end" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
        </div>   
    )
}