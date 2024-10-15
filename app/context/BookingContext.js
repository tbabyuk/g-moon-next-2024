
import { createContext, useContext, useState } from "react";


const BookingContext = createContext();



export const BookingContextProvider = ({children}) => {

    const [orderDetails, setOrderDetails] = useState({
        chosenService: "swedish massage",
        chosenDate: null,
        chosenStartTime: "10:00am",
        chosenDuration: "",
        chosenTherapist: ""
    })


    console.log("Logging orderDetails from Booking Context:", orderDetails)



    return (
        <BookingContext.Provider value={{orderDetails, setOrderDetails}}>
            {children}
        </BookingContext.Provider>
    )

}


export const useBookingContext = () => {
    return useContext(BookingContext)
}
