"use client"


import { createContext, useContext, useState } from "react";


const CartContext = createContext();



export const CartContextProvider = ({children}) => {

    const [orderDetails, setOrderDetails] = useState({
        chosenService: "acupressure-thai-massage",
        chosenDate: null,
        chosenStartTime: "10:00am",
        chosenDuration: "",
        chosenTherapist: ""
    })

    const [cartItemsArray, setCartItemsArray] = useState([
        {
            id: "111",
            name: "Product 1",
            price: 20.00,
            quantity: 5
        },
        {
            id: "222",
            name: "Product 2",
            price: 40.00,
            quantity: 4
        }
    ])

    const decreaseQuantity = (id) => {
        setCartItemsArray((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    }

    const increaseQuantity = (id) => {
        setCartItemsArray((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }


    const removeProduct = (id) => {
        const newCartItemsArray = cartItemsArray.filter((item) => item.id !== id)
        setCartItemsArray(newCartItemsArray)
    }


    console.log("Logging orderDetails from Booking Context:", orderDetails)
    console.log("Logging cartItemsArray from cartContext:", cartItemsArray)



    return (
        <CartContext.Provider value={{orderDetails, setOrderDetails, cartItemsArray, setCartItemsArray, decreaseQuantity, increaseQuantity, removeProduct}}>
            {children}
        </CartContext.Provider>
    )

}


export const useCartContext = () => {
    return useContext(CartContext)
}
