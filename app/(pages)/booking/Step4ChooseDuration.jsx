"use client"


export const Step4ChooseDuration = ({currentStep, totalSteps, previousStep, nextStep, durationOptions, setOrderDetails}) => {

    const handleDurationSelection = (e) => {
        const duration = e.target.value;
        setOrderDetails((prevState) => ({...prevState, chosenDuration: duration }))
    }

    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred appointment duration:</p>
            <small className="block mb-5">Times are limited to our operating hours</small>
            <select className="block ps-4 w-full mb-14 border-2" onChange={(e) => handleDurationSelection(e)}>
                {durationOptions?.map((option, index) => (
                    <option key={index} value={option}>{option} mins</option>
                ))}
            </select>
            <div className="flex justify-between">
                <button className="btn btn-success text-g-moon-white float-end" onClick={previousStep}>Go Back</button>
                <button className="btn btn-success text-g-moon-white float-end" onClick={nextStep}>Next Step</button>
            </div>        
        </div>   
    )
}