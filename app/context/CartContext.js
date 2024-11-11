"use client"


import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();


export const CartContextProvider = ({children}) => {

    const [orderDetails, setOrderDetails] = useState({
        chosenServiceId: "acupressure-thai-massage",
        chosenServicePriceId: "price_1QGCIFRwIe8y2zCR3UvyGqKG",
        chosenService: "Acupressure Thai Massage",
        chosenDate: null,
        chosenStartTime: "10:00am",
        chosenDuration: "",
        chosenTherapist: "",
        price: 0,
        quantity: 1
    })

    const [cartItemsArray, setCartItemsArray] = useState([])
    const [subtotal, setSubtotal] = useState(0);


    console.log("Logging orderDetails object:", orderDetails)
    console.log("Logging cartItemsArray from CartContext", cartItemsArray)


    const decreaseQuantity = (id) => {
        console.log("logging product id from decreaseQuantity:", id)
        setCartItemsArray((prev) => prev.map((item) => item.chosenServicePriceId === id ? { ...item, quantity: item.quantity - 1 } : item))
    }

    const increaseQuantity = (id) => {
        setCartItemsArray((prev) => prev.map((item) => item.chosenServicePriceId === id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    const removeProduct = (id) => {
        const newCartItemsArray = cartItemsArray.filter((item) => item.chosenServicePriceId !== id)
        setCartItemsArray(newCartItemsArray)
    }

    const addProduct = () => {
        setCartItemsArray((prev) => [...prev, {...orderDetails}])
    }

    const addGiftCardProduct = (price, priceId) => {
        setCartItemsArray((prev) => [...prev, ({
            chosenServiceId: "gift-card",
            chosenServicePriceId: priceId,
            chosenService: "Gift Card",
            chosenDate: "n/a",
            chosenStartTime: "n/a",
            chosenDuration: 0,
            chosenTherapist: "n/a",
            price: price,
            quantity: 1
        })])
    }


    useEffect(() => {
        const newSubtotal = cartItemsArray.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        setSubtotal(newSubtotal)
    }, [cartItemsArray])

    return (
        <CartContext.Provider value={{orderDetails, setOrderDetails, cartItemsArray, setCartItemsArray, decreaseQuantity, increaseQuantity, addProduct, removeProduct, subtotal, addGiftCardProduct}}>
            {children}
        </CartContext.Provider>
    )

}


export const useCartContext = () => {
    return useContext(CartContext)
}
