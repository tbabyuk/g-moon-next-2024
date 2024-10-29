"use client"


import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { daysBasedOnService } from "@/app/data/data";
import { useCartContext } from "@/app/context/CartContext";
import { startOfTomorrow, isEqual, startOfDay } from "date-fns";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";


export const Step2ChooseDate = ({currentStep, totalSteps, previousStep, nextStep}) => {


    const {orderDetails, setOrderDetails} = useCartContext()
    const tomorrow = startOfTomorrow()

    const dayOptions = daysBasedOnService.filter((day) => day.services.includes(orderDetails.chosenService))
    const daysOnlyArray = dayOptions.map((dayObject) => dayObject.day)
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

    // At this time, only holidays until January 1, 2025 are filtered out
    const holidayArray = [new Date("2024-10-14T00:00:00-04:00").toDateString(), new Date("2024-12-25T00:00:00-05:00").toDateString(), new Date("2024-12-26T00:00:00-05:00").toDateString(), new Date("2025-01-01T00:00:00-05:00").toDateString()];

    // const filterDays = (date) => {
    //     return date >= tomorrow && allowedDays.includes(date.getDay()) && !holidayArray.includes(date.toDateString())
    // };

    const handleDateSelection = (date) => {
        setOrderDetails((prevState) => ({...prevState, chosenDate: date.toISOString()}))
    }

    useEffect(() => {
        setOrderDetails((prevState) => ({...prevState, chosenDate: tomorrow}))
    }, [])


    return(
        <div>
            <div className="border-b-2 pb-2 mb-2 text-gray-400">Step {currentStep} of {totalSteps}</div>
            <p className="text-lg font-medium">Choose your preferred day:</p>
            <small className="block mb-4">These are the days on which your chosen service is currently available</small>
            <div className="customDatePickerWidth mb-12">
                <DatePicker 
                    selected={orderDetails.chosenDate}
                    onChange={handleDateSelection}
                    // filterDate={filterDays} //use this function to restrict what date are shown on the calendar
                    dateFormat="MMMM d, yyyy"
                    // holidays={[
                    //     { date: "2024-10-14", holidayName: "Thanksgiving" },
                    //     { date: "2024-12-25", holidayName: "Fake holiday" },
                    //   ]}
                    className="w-full border border-gray-300 text-center h-[45px]"
                />
            </div>

            <div className="flex justify-between">
                <button className="btn g-moon-action-btn" onClick={previousStep}><MdArrowBackIos /> Go Back</button>
                <button className="btn g-moon-action-btn" onClick={nextStep}>Next Step <MdArrowForwardIos /></button>
            </div>
        </div>   
    )
}