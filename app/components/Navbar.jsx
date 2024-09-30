"use client"

import Link from "next/link"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";


export const Navbar = () => {

    const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false)
    const [bookingSubmenuOpen, setBookingSubmenuOpen] = useState(false)

    return (
        <div className="h-[70px] bg-g-moon-dark-gray flex">
            <div className="flex justify-center items-center w-[300px]">
                <img src="https://g-moon-wellness.ca/wp-content/uploads/2022/06/g-moon-logo-final-light-768x365.png" alt="G Moon Wellness Centre Logo" width="120px" />
            </div>
            <nav className="flex-1 flex justify-center items-center">
                <ul className="flex h-full">
                    <li><Link href="/" className="g-moon-nav-link">HOME</Link></li>
                    <li className="relative"><Link href="/" className="g-moon-nav-link" onMouseEnter={() => setServicesSubmenuOpen(true)} onMouseLeave={() => setServicesSubmenuOpen(false)}>SERVICES <MdOutlineKeyboardArrowDown size="1.3rem" /></Link>
                        {servicesSubmenuOpen && 
                            <ul className="bg-g-moon-dark-gray w-full md:w-fit md:absolute" onMouseEnter={() => setServicesSubmenuOpen(true)} onMouseLeave={() => setServicesSubmenuOpen(false)}>
                                <li className="whitespace-nowrap"><Link href="/resources/videos" className="g-moon-subnav-link">Massages</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link">Body Scrubs</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link">Table Shower</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link">Hot Stone Therapy</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link">Aromatherapy</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link">Reflexology</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link">Consultation</Link></li>
                            </ul>
                        }
                    </li>
                    <li className="relative"><Link href="/" className="g-moon-nav-link" onMouseEnter={() => setBookingSubmenuOpen(true)} onMouseLeave={() => setBookingSubmenuOpen(false)}>BOOKING <MdOutlineKeyboardArrowDown size="1.3rem" /></Link>
                        {bookingSubmenuOpen && 
                            <ul className="bg-g-moon-dark-gray w-full md:w-fit md:absolute" onMouseEnter={() => setBookingSubmenuOpen(true)} onMouseLeave={() => setBookingSubmenuOpen(false)}>
                                <li className="whitespace-nowrap"><Link href="/resources/videos" className="g-moon-subnav-link">Contact Form</Link></li>
                                <li className="whitespace-nowrap"><Link href="/resources/preferred-vendors" className="g-moon-subnav-link">Booking Calendar</Link></li>
                            </ul>
                        }
                    </li>
                    <li><Link href="/" className="g-moon-nav-link">TEAM</Link></li>
                    <li><Link href="/" className="g-moon-nav-link">PRICING</Link></li>
                    <li><Link href="/" className="g-moon-nav-link">ABOUT US</Link></li>
                </ul>

            </nav>
        </div>
    )
}