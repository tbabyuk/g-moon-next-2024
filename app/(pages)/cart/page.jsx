"use client"

import { PageHeader } from "../components/PageHeader";
import { useCartContext } from "@/app/context/CartContext";
import { ProductCard } from "./components/ProductCard";


const Cart = () => {

    const {cartItemsArray, decreaseQuantity, increaseQuantity, removeProduct} = useCartContext()

    console.log("Logging length of cartItemsArray:", typeof cartItemsArray.length)

    return(
        <main>
            <PageHeader title="Cart" />

            <div className="g-moon-content-padding flex flex-col gap-y-4">
                
                {cartItemsArray.length === 0 && <p className="text-center">Your cart is currently empty. Click 'Book Now' to add items to your cart."</p>}
                
                {cartItemsArray.map((product, index) => (
                    <ProductCard key={index} product={product} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} removeProduct={removeProduct} />
                ))}
            </div>
        </main>
    )
}

export default Cart;
