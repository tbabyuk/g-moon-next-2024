"use client"


import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { startOfTomorrow } from "date-fns";


export const Step2ChooseDate = ({currentStep, totalSteps, previousStep, nextStep, dayOptionsArray, setOrderDetails}) => {

    const tomorrow = startOfTomorrow()

    const [chosenDate, setChosenDate] = useState(tomorrow);

    const daysOnlyArray = dayOptionsArray.map((dayObject) => dayObject.day)

    const daysList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    const getNums = (array) => {
        const numsArray = [];
        array.forEach((day) => {
            if(daysList.includes(day)) {
                numsArray.push(daysList.indexOf(day))
            }
        })
        return numsArray
    }
    
    const allowedDays = getNums(daysOnlyArray)

    const filterDays = (date) => {
        return date >= tomorrow && allowedDays.includes(date.getDay());
    };

    const handleDateSelection = (date) => {
        setChosenDate(date)
        setOrderDetails((prevState) => ({...prevState, chosenDate: date}))
    }


    useEffect(() => {
        console.log("useEffect inside ChooseDate fired")
        setOrderDetails((prevState) => ({...prevState, chosenDate: tomorrow}))
    }, [])


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred day:</p>
            <small className="block mb-4">These are the only days on which your chosen service is currently available</small>
            <div className="customDatePickerWidth mb-12">
                <DatePicker 
                    selected={chosenDate} 
                    onChange={handleDateSelection}
                    filterDate={filterDays} // Apply the filterDays function to restrict selectable dates
                    dateFormat="MMMM d, yyyy"
                    className="w-full border border-gray-300 text-center h-[45px]"
                />
            </div>

            <div className="flex justify-between">
                <button className="btn btn-success text-g-moon-white float-end" onClick={previousStep}>Go Back</button>
                <button className="btn btn-success text-g-moon-white float-end" onClick={nextStep}>Next Step</button>
            </div>
        </div>   
    )
}