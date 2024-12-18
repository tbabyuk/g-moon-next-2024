"use client"

import Link from "next/link"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


export const Navbar = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false)
    const [bookingSubmenuOpen, setBookingSubmenuOpen] = useState(false)


    const closeAllMenus = () => {
        setDropdownIsOpen(false)
        setServicesSubmenuOpen(false)
        setBookingSubmenuOpen(false)
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="px-5 h-[55px] flex justify-between items-center md:w-[300px] md:justify-center bg-g-moon-medium-gray">
                <Link href="/"><img src="/images/g-moon-logo-transparent-white.png" alt="G Moon Wellness Centre Logo" width="120px" /></Link>
                {!dropdownIsOpen && <RxHamburgerMenu className="text-g-moon-white text-[35px] md:hidden cursor-pointer" onClick={() => setDropdownIsOpen(!dropdownIsOpen)} />}
                {dropdownIsOpen && <AiOutlineClose className="text-g-moon-white text-[35px] md:hidden cursor-pointer" onClick={() => setDropdownIsOpen(!dropdownIsOpen)} />}
            </div>
            <nav className={`${dropdownIsOpen ? "block" : "hidden"} md:flex-1 md:flex justify-center items-center bg-g-moon-medium-gray z-20`}>
                <ul className="flex flex-col md:flex-row h-full">
                    <li><Link href="/" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={() => setDropdownIsOpen(false)}>HOME</Link></li>
                    <li className="relative"><span className="g-moon-nav-link cursor-pointer" onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)} onMouseEnter={() => setServicesSubmenuOpen(true)} onMouseLeave={() => setServicesSubmenuOpen(false)}>SERVICES <MdOutlineKeyboardArrowDown size="1.3rem" /></span>
                        {servicesSubmenuOpen && 
                            <ul className="bg-g-moon-medium-gray w-full md:w-fit md:absolute" onMouseEnter={() => setServicesSubmenuOpen(true)} onMouseLeave={() => setServicesSubmenuOpen(false)}>
                                <li className="whitespace-nowrap"><Link href="/healing-touch-treasures" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover" onClick={() => closeAllMenus()}>Healing Touch Treasures</Link></li>
                                <li className="whitespace-nowrap" ><Link href="/ladies-retreat" className="g-moon-subnav-link" onClick={() => closeAllMenus()}>Ladies Retreat</Link></li>
                                <li className="whitespace-nowrap"><Link href="/scalp-and-foot-care" className="g-moon-subnav-link" onClick={() => closeAllMenus()}>Scalp and Foot Care</Link></li>
                                <li className="whitespace-nowrap"><Link href="/essence-of-body-wellness" className="g-moon-subnav-link"  onClick={() => closeAllMenus()}>Essence of Body Wellness</Link></li>
                                <li className="whitespace-nowrap"><Link href="/curated-luxe-additions" className="g-moon-subnav-link" onClick={() => closeAllMenus()}>Curated Luxe Additions</Link></li>
                            </ul>
                        }
                    </li>
                    <li className="relative"><span href="#" className="g-moon-nav-link cursor-pointer" onClick={() => setBookingSubmenuOpen(!bookingSubmenuOpen)}  onMouseEnter={() => setBookingSubmenuOpen(true)} onMouseLeave={() => setBookingSubmenuOpen(false)}>BOOKING <MdOutlineKeyboardArrowDown size="1.3rem" /></span>
                        {bookingSubmenuOpen && 
                            <ul className="bg-g-moon-medium-gray w-full md:w-fit md:absolute" onMouseEnter={() => setBookingSubmenuOpen(true)} onMouseLeave={() => setBookingSubmenuOpen(false)}>
                                <li className="whitespace-nowrap"><Link href="/booking-form" className="g-moon-subnav-link" onClick={() => closeAllMenus()}>Booking Form</Link></li>
                                {/* <li className="whitespace-nowrap"><Link href="/contact-form" className="g-moon-subnav-link" onClick={() => closeAllMenus()}>Contact Form</Link></li> */}
                            </ul>
                        }
                    </li>
                    <li><Link href="/team" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={() => setDropdownIsOpen(false)}>TEAM</Link></li>
                    {/* <li><Link href="/pricing" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={() => setDropdownIsOpen(false)}>PRICING</Link></li> */}
                    <li><Link href="/about" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={() => setDropdownIsOpen(false)}>ABOUT</Link></li>
                    <li><Link href="/contact" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={() => setDropdownIsOpen(false)}>CONTACT</Link></li>
                </ul>
            </nav>
        </div>
    )
}