"use client"


import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "@/app/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";


export const TopHeader = () => {

    const [popupIsOpen, setPopupIsOpen] = useState(true)
    const router = useRouter()

    const handleClickHere = () => {
        setPopupIsOpen(false)
        router.push("/gift-cards")
    }

    const {cartItemsArray} = useCartContext()

    return (
        <>
            <div className="bg-[url('/images/header-bg.jpg')] bg-center bg-cover text-g-moon-light-gray p-6 text-[0.9rem] min-h-[40px] md:max-h-[60px] flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex flex-col md:flex-row">
                    <div className="mb-6 md:mb-0 flex items-center justify-center md:justify-center md:me-14"><a href="mailto:vivi@g-moon-wellness.ca" className="flex items-center g-moon-link"><AiOutlineMail className="me-4 text-[22px] shrink-0" />vivi@g-moon-wellness.ca</a></div>
                    <div className="mb-6 md:mb-0 flex items-center justify-center md:justify-center"><a href="tel:+16472239966" className="flex items-center g-moon-link"><BsTelephone className="me-4 text-[18px] shrink-0" />
                    (647) 223-9966</a></div>
                </div>
                <div className="flex gap-x-5">
                    <Link href="/booking-form"><button className="btn g-moon-action-btn text-[1rem]">Book Now</button></Link>
                    <Link href="/cart"><button className="btn bg-gray-400 hover:bg-gray-500 text-[1rem] text-g-moon-white"><MdShoppingCart />Cart({cartItemsArray.length}) </button></Link>
                </div>
            </div>
            {popupIsOpen && 
                <div className="popup-banner fixed top-0 px-5 min-h-[130px] w-[100%] bg-[url('/banner-bg.jpg')] bg-center bg-cover z-40 flex justify-center items-center">
                    <IoMdClose className="absolute top-2 right-2 text-[3rem] md:text-[4rem] text-white cursor-pointer" onClick={() => setPopupIsOpen(false)} />
                    <div className="text-white text-lg flex flex-col text-center space-y-3">
                        <p>Christmas is just around the corner!</p>
                        <p><span className="underline font-semibold cursor-pointer" onClick={handleClickHere}>CLICK HERE</span> to get your spa gift card from G Moon Wellness!</p>
                    </div>
                </div>
            }
        </>
    )
}

<li><a href="tel:+16472239966" className="flex items-center g-moon-footer-link"><BsTelephone className="me-2" size="1.1rem" />(647) 223-9966</a></li>
