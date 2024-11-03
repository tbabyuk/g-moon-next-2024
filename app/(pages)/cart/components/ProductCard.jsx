"use client"

import { IoArrowBackCircle, IoArrowForwardCircle, IoCloseCircleSharp } from "react-icons/io5";
import { formatDate } from "@/app/utils/formatDate";


export const ProductCard = ({item, decreaseQuantity, increaseQuantity, removeProduct}) => {

    const totalPrice = (item.price * item.quantity).toFixed(2);

    console.log("Logging product from product card==========================", item)


    return(
        <div className="border-2 flex flex-col w-full md:w-[80%] xl:w-[60%] mx-auto mb-3">
            <div className="flex justify-between bg-gray-200 p-2">
                <div>
                    <div className="font-semibold">{item.chosenService}</div>
                    <div className="text-sm">{formatDate(item.chosenDate)} at {item.chosenStartTime} ({item.chosenDuration} mins)</div>
                </div>
                <div>
                    <IoCloseCircleSharp className="text-[35px] text-red-500 cursor-pointer" onClick={() => removeProduct(item.chosenServiceId)} />
                </div>
            </div>
            <div className="flex justify-between md:justify-evenly items-center px-3 py-4">
                <div className="text-lg">Quantity:</div>
                <div className="flex items-center">
                    <div><IoArrowBackCircle className={`text-[35px] cursor-pointer ${item.quantity === 1 ? "text-gray-300 pointer-events-none" : "cursor-pointer"}`} onClick={() => decreaseQuantity(item.chosenServiceId)} /></div>
                    <span className="text-xl mx-4">{item.quantity}</span>
                    <IoArrowForwardCircle className="text-[35px] cursor-pointer" onClick={() => increaseQuantity(item.chosenServiceId)} />
                </div>
                <div className="text-lg">${totalPrice}</div>
            </div>
        </div>
    )
}