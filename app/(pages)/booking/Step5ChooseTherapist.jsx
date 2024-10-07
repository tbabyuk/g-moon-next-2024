"use client"


export const Step5ChooseTherapist = ({currentStep, totalSteps, previousStep, nextStep, therapistOptionsArray, setOrderDetails}) => {

    console.log("Step5 Therapist FIRED:", therapistOptionsArray)

    const handleTherapistSelection = (e) => {
        const therapist = e.target.value;
        setOrderDetails((prevState) => ({...prevState, chosenTherapist: therapist }))
    }


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred therapist:</p>
            <small className="block mb-5">These are the available therapists based on the day and service you chose</small>
            <select className="block w-full mb-16 border-2" onChange={(e) => handleTherapistSelection(e)}>
                {therapistOptionsArray?.map((therapist, index) => (
                    <option key={index} value={therapist.name}>{therapist.name[0].toUpperCase() + therapist.name.slice(1)}</option>
                ))}
            </select>
            <div className="flex justify-between">
                <button className="btn btn-success text-g-moon-white float-end" onClick={previousStep}>Go Back</button>
                <button className="btn btn-success text-g-moon-white float-end" onClick={nextStep}>Next Step</button>
            </div>        
        </div>   
    )
}