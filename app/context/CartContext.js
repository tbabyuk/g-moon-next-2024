
import { createContext, useContext, useState } from "react";


const CartContext = createContext();



export const CartContextProvider = ({children}) => {

    const [orderDetails, setOrderDetails] = useState({
        chosenService: "acupressure thai massage",
        allCartItemsArray: [],
        chosenDate: null,
        chosenStartTime: "10:00am",
        chosenDuration: "",
        chosenTherapist: ""
    })


    console.log("Logging orderDetails from Booking Context:", orderDetails)



    return (
        <CartContext.Provider value={{orderDetails, setOrderDetails}}>
            {children}
        </CartContext.Provider>
    )

}


export const useCartContext = () => {
    return useContext(CartContext)
}
