"use client"

import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "@/app/context/CartContext"
import { useRouter } from "next/navigation";



export const AddAndGoToCartBtn = ({amount, priceId}) => {

       const {addGiftCardProduct} = useCartContext()
       const router = useRouter()


       const handleAddAndGoToCart = () => {
        addGiftCardProduct(amount, priceId)
        router.push("/cart")
    }

    return(
        <button className="btn w-[100%] bg-green-600 hover:bg-green-700 text-g-moon-white" onClick={handleAddAndGoToCart}>Add to Cart<MdShoppingCart /></button>
    )
}