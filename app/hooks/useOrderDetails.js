"use client"


import { useState } from "react"

export const useOrderDetails = () => {

    const [orderDetails, setOrderDetails] = useState({
        chosenService: "thai massage",
        chosenDate: null,
        chosenStartTime: "10:00",
        chosenDuration: "",
        chosenTherapist: ""
  }) 



    return {
        orderDetails,
        setOrderDetails
    }
}