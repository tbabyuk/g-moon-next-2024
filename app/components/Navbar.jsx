"use client"

import Link from "next/link"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


export const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false)
    const [bookingSubmenuOpen, setBookingSubmenuOpen] = useState(false)


    const closeAllMenus = () => {
        setMobileMenuOpen(false)
        setServicesSubmenuOpen(false)
        setBookingSubmenuOpen(false)
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
        // Close submenus when toggling main menu
        setServicesSubmenuOpen(false)
        setBookingSubmenuOpen(false)
    }

    return (
        <div className="flex flex-col min-[850px]:flex-row min-[850px]:items-stretch">
            {/* Logo section - always visible, shrink-0 prevents it from being squeezed */}
            <div className="ps-5 h-[55px] min-[850px]:h-auto flex shrink-0 justify-between items-center min-[850px]:justify-center bg-g-moon-medium-gray">
                <Link href="/" onClick={closeAllMenus} className="shrink-0">
                    <img src="/images/g-moon-logo-transparent-white.png" alt="G Moon Wellness Centre Logo" className="w-[120px] h-auto" />
                </Link>
                {/* Hamburger menu - visible only on mobile (below 850px) */}
                <button 
                    className="min-[850px]:hidden text-g-moon-white text-[35px] cursor-pointer me-5"
                    onClick={toggleMobileMenu}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {mobileMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
                </button>
            </div>

            {/* Navigation - hidden on mobile, flex on 850px+ */}
            <nav className={`${mobileMenuOpen ? "flex" : "hidden"} min-[850px]:flex flex-1 justify-center items-center bg-g-moon-medium-gray z-20 pe-5`}>
                <ul className="flex flex-col min-[850px]:flex-row h-full w-full min-[850px]:w-auto">
                    <li>
                        <Link href="/" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={closeAllMenus}>
                            HOME
                        </Link>
                    </li>
                    
                    {/* Services dropdown */}
                    <li className="relative">
                        <span 
                            className="g-moon-nav-link cursor-pointer" 
                            onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)} 
                            onMouseEnter={() => setServicesSubmenuOpen(true)} 
                            onMouseLeave={() => setServicesSubmenuOpen(false)}
                        >
                            SERVICES <MdOutlineKeyboardArrowDown size="1.3rem" className="ms-1" />
                        </span>
                        {servicesSubmenuOpen && 
                            <ul 
                                className="bg-g-moon-medium-gray w-full min-[850px]:w-fit min-[850px]:absolute" 
                                onMouseEnter={() => setServicesSubmenuOpen(true)} 
                                onMouseLeave={() => setServicesSubmenuOpen(false)}
                            >
                                <li className="whitespace-nowrap">
                                    <Link href="/healing-touch-treasures" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover" onClick={closeAllMenus}>
                                        Healing Touch Treasures
                                    </Link>
                                </li>
                                <li className="whitespace-nowrap">
                                    <Link href="/ladies-retreat" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover" onClick={closeAllMenus}>
                                        Ladies Retreat
                                    </Link>
                                </li>
                                <li className="whitespace-nowrap">
                                    <Link href="/scalp-and-foot-care" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover" onClick={closeAllMenus}>
                                        Scalp and Foot Care
                                    </Link>
                                </li>
                                <li className="whitespace-nowrap">
                                    <Link href="/essence-of-body-wellness" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover" onClick={closeAllMenus}>
                                        Essence of Body Wellness
                                    </Link>
                                </li>
                                <li className="whitespace-nowrap">
                                    <Link href="/curated-luxe-additions" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover" onClick={closeAllMenus}>
                                        Curated Luxe Additions
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>

                    {/* Booking dropdown */}
                    <li className="relative">
                        <span 
                            className="g-moon-nav-link cursor-pointer" 
                            onClick={() => setBookingSubmenuOpen(!bookingSubmenuOpen)}  
                            onMouseEnter={() => setBookingSubmenuOpen(true)} 
                            onMouseLeave={() => setBookingSubmenuOpen(false)}
                        >
                            BOOKING <MdOutlineKeyboardArrowDown size="1.3rem" className="ms-1" />
                        </span>
                        {bookingSubmenuOpen && 
                            <ul 
                                className="bg-g-moon-medium-gray w-full min-[850px]:w-fit min-[850px]:absolute" 
                                onMouseEnter={() => setBookingSubmenuOpen(true)} 
                                onMouseLeave={() => setBookingSubmenuOpen(false)}
                            >
                                <li className="whitespace-nowrap">
                                    <Link href="/booking-form" className="g-moon-subnav-link hover:bg-g-moon-dark-gray-hover" onClick={closeAllMenus}>
                                        Booking Form
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>

                    <li>
                        <Link href="/gift-cards" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={closeAllMenus}>
                            GIFT CARDS
                        </Link>
                    </li>
                    <li>
                        <Link href="/team" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={closeAllMenus}>
                            TEAM
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={closeAllMenus}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="g-moon-nav-link hover:bg-g-moon-medium-gray-hover" onClick={closeAllMenus}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
