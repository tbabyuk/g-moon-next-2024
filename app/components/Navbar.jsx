"use client"

import Link from "next/link"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


export const Navbar = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false)
    const [bookingSubmenuOpen, setBookingSubmenuOpen] = useState(false)

    return (
        <div className="flex flex-col md:flex-row">
            <div className="px-5 h-[60px] flex justify-between items-center md:w-[300px] md:justify-center bg-g-moon-dark-gray">
                <Link href="/"><img src="https://g-moon-wellness.ca/wp-content/uploads/2022/06/g-moon-logo-final-light-768x365.png" alt="G Moon Wellness Centre Logo" width="120px" /></Link>
                <RxHamburgerMenu className="text-g-moon-white text-[35px] md:hidden cursor-pointer" onClick={() => setDropdownIsOpen(!dropdownIsOpen)} />
            </div>
            <nav className={`${dropdownIsOpen ? "block" : "hidden"} md:flex-1 md:flex justify-center items-center bg-g-moon-dark-gray z-20`}>
                <ul className="flex flex-col md:flex-row h-full">
                    <li><Link href="/" className="g-moon-nav-link hover:bg-g-moon-dark-gray-hover">HOME</Link></li>
                    <li className="relative"><Link href="#" className="g-moon-nav-link" onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)} onMouseEnter={() => setServicesSubmenuOpen(true)} onMouseLeave={() => setServicesSubmenuOpen(false)}>SERVICES <MdOutlineKeyboardArrowDown size="1.3rem" /></Link>
                        {servicesSubmenuOpen && 
                            <ul className="bg-g-moon-dark-gray w-full md:w-fit md:absolute" onMouseEnter={() => setServicesSubmenuOpen(true)} onMouseLeave={() => setServicesSubmenuOpen(false)}>
                                <li className="whitespace-nowrap"><Link href="/services/massages" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover">Massages</Link></li>
                                <li className="whitespace-nowrap"><Link href="/services/body-scrubs" className="g-moon-subnav-link">Body Scrubs</Link></li>
                                <li className="whitespace-nowrap"><Link href="/services/table-shower" className="g-moon-subnav-link">Table Shower</Link></li>
                                <li className="whitespace-nowrap"><Link href="/services/hot-stone-therapy" className="g-moon-subnav-link">Hot Stone Therapy</Link></li>
                                <li className="whitespace-nowrap"><Link href="/services/aromatherapy" className="g-moon-subnav-link">Aromatherapy</Link></li>
                                <li className="whitespace-nowrap"><Link href="/services/reflexology" className="g-moon-subnav-link">Reflexology</Link></li>
                                <li className="whitespace-nowrap"><Link href="/services/consultation" className="g-moon-subnav-link">Consultation</Link></li>
                            </ul>
                        }
                    </li>
                    <li className="relative"><Link href="#" className="g-moon-nav-link" onClick={() => setBookingSubmenuOpen(!bookingSubmenuOpen)}  onMouseEnter={() => setBookingSubmenuOpen(true)} onMouseLeave={() => setBookingSubmenuOpen(false)}>BOOKING <MdOutlineKeyboardArrowDown size="1.3rem" /></Link>
                        {bookingSubmenuOpen && 
                            <ul className="bg-g-moon-dark-gray w-full md:w-fit md:absolute" onMouseEnter={() => setBookingSubmenuOpen(true)} onMouseLeave={() => setBookingSubmenuOpen(false)}>
                                <li className="whitespace-nowrap"><Link href="/resources/videos" className="g-moon-subnav-link">Contact Form</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link">Booking Calendar</Link></li>
                            </ul>
                        }
                    </li>
                    <li><Link href="/team" className="g-moon-nav-link hover:bg-g-moon-dark-gray-hover">TEAM</Link></li>
                    <li><Link href="/pricing" className="g-moon-nav-link hover:bg-g-moon-dark-gray-hover">PRICING</Link></li>
                    <li><Link href="/about" className="g-moon-nav-link hover:bg-g-moon-dark-gray-hover">ABOUT</Link></li>
                </ul>
            </nav>
        </div>
    )
}