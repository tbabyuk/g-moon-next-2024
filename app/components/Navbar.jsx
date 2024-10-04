"use client"

import Link from "next/link"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


export const Navbar = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false)
    const [bookingSubmenuOpen, setBookingSubmenuOpen] = useState(false)


    const closeAllMenus = () => {
        setDropdownIsOpen(false)
        setServicesSubmenuOpen(false)
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="px-5 h-[60px] flex justify-between items-center md:w-[300px] md:justify-center bg-g-moon-dark-gray">
                <Link href="/"><img src="/images/g-moon-logo-transparent-white.png" alt="G Moon Wellness Centre Logo" width="120px" /></Link>
                <RxHamburgerMenu className="text-g-moon-white text-[35px] md:hidden cursor-pointer" onClick={() => setDropdownIsOpen(!dropdownIsOpen)} />
            </div>
            <nav className={`${dropdownIsOpen ? "block" : "hidden"} md:flex-1 md:flex justify-center items-center bg-g-moon-dark-gray z-20`}>
                <ul className="flex flex-col md:flex-row h-full">
                    <li><Link href="/" className="g-moon-nav-link hover:bg-g-moon-dark-gray-hover" onClick={() => setDropdownIsOpen(false)}>HOME</Link></li>
                    <li className="relative"><span className="g-moon-nav-link" onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)} onMouseEnter={() => setServicesSubmenuOpen(true)} onMouseLeave={() => setServicesSubmenuOpen(false)}>SERVICES <MdOutlineKeyboardArrowDown size="1.3rem" /></span>
                        {servicesSubmenuOpen && 
                            <ul className="bg-g-moon-dark-gray w-full md:w-fit md:absolute" onMouseEnter={() => setServicesSubmenuOpen(true)} onMouseLeave={() => setServicesSubmenuOpen(false)}>
                                <li className="whitespace-nowrap"><Link href="/massages" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover" onClick={() => closeAllMenus()}>Massages</Link></li>
                                <li className="whitespace-nowrap" ><Link href="/body-scrubs" className="g-moon-subnav-link"  onClick={() => closeAllMenus()}>Body Scrubs</Link></li>
                                <li className="whitespace-nowrap"><Link href="/table-shower" className="g-moon-subnav-link"  onClick={() => closeAllMenus()}>Table Shower</Link></li>
                                <li className="whitespace-nowrap"><Link href="/hot-stone-therapy" className="g-moon-subnav-link"  onClick={() => closeAllMenus()}>Hot Stone Therapy</Link></li>
                                <li className="whitespace-nowrap"><Link href="/aromatherapy" className="g-moon-subnav-link"  onClick={() => closeAllMenus()}>Aromatherapy</Link></li>
                                <li className="whitespace-nowrap"><Link href="/reflexology" className="g-moon-subnav-link"  onClick={() => closeAllMenus()}>Reflexology</Link></li>
                                <li className="whitespace-nowrap"><Link href="/consultation" className="g-moon-subnav-link"  onClick={() => closeAllMenus()}>Consultation</Link></li>
                            </ul>
                        }
                    </li>
                    <li className="relative"><span href="#" className="g-moon-nav-link" onClick={() => setBookingSubmenuOpen(!bookingSubmenuOpen)}  onMouseEnter={() => setBookingSubmenuOpen(true)} onMouseLeave={() => setBookingSubmenuOpen(false)}>BOOKING <MdOutlineKeyboardArrowDown size="1.3rem" /></span>
                        {bookingSubmenuOpen && 
                            <ul className="bg-g-moon-dark-gray w-full md:w-fit md:absolute" onMouseEnter={() => setBookingSubmenuOpen(true)} onMouseLeave={() => setBookingSubmenuOpen(false)}>
                                <li className="whitespace-nowrap"><Link href="/resources/videos" className="g-moon-subnav-link" onClick={() => closeAllMenus()}>Contact Form</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link" onClick={() => closeAllMenus()}>Booking Calendar</Link></li>
                            </ul>
                        }
                    </li>
                    <li><Link href="/team" className="g-moon-nav-link hover:bg-g-moon-dark-gray-hover" onClick={() => setDropdownIsOpen(false)}>TEAM</Link></li>
                    <li><Link href="/pricing" className="g-moon-nav-link hover:bg-g-moon-dark-gray-hover" onClick={() => setDropdownIsOpen(false)}>PRICING</Link></li>
                    <li><Link href="/about" className="g-moon-nav-link hover:bg-g-moon-dark-gray-hover" onClick={() => setDropdownIsOpen(false)}>ABOUT</Link></li>
                </ul>
            </nav>
        </div>
    )
}