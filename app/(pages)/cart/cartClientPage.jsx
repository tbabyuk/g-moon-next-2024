"use client"

import { PageHeader } from "../components/PageHeader";
import { useCartContext } from "@/app/context/CartContext";
import { ProductCard } from "./components/ProductCard";
import { MdCreditCard } from "react-icons/md";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState } from "react";




const CartClientPage = () => {

    const {cartItemsArray, decreaseQuantity, increaseQuantity, removeProduct, subtotal} = useCartContext()

    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState("")

    const router = useRouter()

    // Moved handleCheckout from to here from Step6ReviewOrder
    const handleCheckout = async () => {

        console.log("Logging orderDetails from handleCheckout:", cartItemsArray)

        setProcessing(true);
        setError("");

        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cartItemsArray)
            })


            if(res.ok) {
                // console.log("response was OKAY")
                const {url} = await res.json()
                window.location.assign(url)            
            } else {
                setError("Ooops, an error occurred while processing your payment. Please call us or visit us in person to book your appointment!");
            }

        } catch (error) {
            console.log(error.message)
            setError("A network error has occurred. Please try again later or call/visit us in person to book your appointment.");
        } finally {
            setProcessing(false)
        }
    }

    return(
        <main>
            <PageHeader title="Cart" />

            <div className="g-moon-content-padding flex flex-col gap-y-4">
                
                {cartItemsArray.length === 0 && <p className="text-center">Your cart is currently empty. Click &quot;Book Now&quot; to add items to your cart.</p>}
                
                {cartItemsArray.map((item, index) => (
                    <ProductCard key={index} item={item} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} removeProduct={removeProduct} />
                ))}

                {cartItemsArray.length !== 0 && (
                    <div className="w-full flex justify-end md:w-[80%] xl:w-[60%] mx-auto mt-1">
                        <div className="flex flex-col">
                            <div className="self-end">Subtotal:&nbsp;&nbsp; <span className="font-semibold">${subtotal.toFixed(2)}</span></div>
                            <div className="text-sm">(total will be calculated at checkout)</div>
                        </div>
                    </div>
                )}

                {cartItemsArray.length !== 0 && (
                    <div className="flex flex-col space-y-3 justify-between mt-5 md:flex-row-reverse md:w-[80%] xl:w-[60%] md:mx-auto md:justify-between md:space-y-0">
                        <button className="btn bg-green-600 hover:bg-green-700 text-g-moon-white" disabled={processing} onClick={handleCheckout}>{processing ? "Processing..." : "Go to Checkout"}<MdCreditCard className="text-lg" /></button>
                        <button className="btn g-moon-action-btn" onClick={() => {router.push("/booking-form")}}>Add a Service<HiOutlinePlusCircle className="text-lg" /></button>
                        <button className="btn g-moon-action-btn" onClick={() => {router.push("/gift-cards")}}>Add a Gift Card<HiOutlinePlusCircle className="text-lg" /></button>
                    </div>
                )}

                {error && (
                    <div className="font-medium text-center text-2xl text-red-500 mb-6">{error}</div>
                )}

            </div>
        </main>
    )
}

export default CartClientPage;
