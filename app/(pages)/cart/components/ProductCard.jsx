"use client"

import { IoArrowBackCircle, IoArrowForwardCircle, IoCloseCircleSharp } from "react-icons/io5";



export const ProductCard = ({product, decreaseQuantity, increaseQuantity, removeProduct}) => {

    const totalPrice = (product.price * product.quantity).toFixed(2);


    return(
        <div className="border-2 flex flex-col w-full md:w-[80%] mx-auto">
            <div className="flex justify-start bg-gray-200 p-3">
                <div className="font-semibold">{product.name}</div>
            </div>
            <div className="flex justify-between md:justify-evenly items-center px-3 py-6">
                <div className="flex justify-between items-center w-[100px] h-full">
                    <div><IoArrowBackCircle className={`text-[35px] cursor-pointer ${product.quantity === 0 ? "hidden" : "block"}`} onClick={() => decreaseQuantity(product.id)} /></div>
                    <span className="text-xl">{product.quantity}</span>
                    <IoArrowForwardCircle className="text-[35px] cursor-pointer" onClick={() => increaseQuantity(product.id)} />
                </div>
                <div className="text-lg">${totalPrice}</div>
                <IoCloseCircleSharp className="text-[35px] text-red-500 cursor-pointer" onClick={() => removeProduct(product.id)} />
            </div>
        </div>
    )
}