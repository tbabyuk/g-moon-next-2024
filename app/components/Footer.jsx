import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoMapOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";



export const Footer = () => {

    const now = new Date();
    const year = now.getFullYear()

    return(
        <footer className="bg-[url('/images/footer-bg.jpg')] bg-center bg-cover text-g-moon-light-gray">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 px-6">
                <div className="pb-16 border-b-2 border-gray-600 md:border-none flex justify-center">
                    <div className="w-[80%]">
                        <h3 className="text-2xl font-semibold mb-8">Social</h3>
                        <ul className="flex space-x-3">
                            <li><Link href="#" className="g-moon-link"><IoLogoFacebook size="2.5rem" /></Link></li>
                            <li><Link href="#" className="g-moon-link"><IoLogoInstagram size="2.5rem" /></Link></li>
                            <li><Link href="#" className="g-moon-link"><IoLogoYoutube size="2.5rem" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="py-16 md:py-0 md:pb-16 border-b-2 border-gray-600 md:border-none flex justify-center">
                    <div className="w-[80%]">
                        <h3 className="text-2xl font-semibold mb-8">Browse</h3>
                        <ul className="space-y-3 text-[0.9rem]">
                            <li><Link href="/" className="g-moon-link">Home</Link></li>
                            <li><Link href="/#gallery" className="g-moon-link">Gallery</Link></li>
                            <li><Link href="/team" className="g-moon-link">Team</Link></li>
                            <li><Link href="/about" className="g-moon-link">About</Link></li>
                            <li><Link href="/contact" className="g-moon-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="py-16 md:py-0 border-b-2 border-gray-600 md:border-none flex justify-center">
                    <div className="w-[80%]">
                        <h3 className="text-2xl font-semibold mb-8">Services</h3>
                        <ul className="space-y-3 text-[0.9rem]">
                            <li><Link href="/healing-touch-treasures" className="g-moon-link">Healing Touch Treasures</Link></li>
                            <li><Link href="/ladies-retreat" className="g-moon-link">Ladies Retreat</Link></li>
                            <li><Link href="/scalp-and-foot-care" className="g-moon-link">Scalp and Foot Care</Link></li>
                            <li><Link href="/essence-of-body-wellness" className="g-moon-link">Essence of Body Wellness</Link></li>
                            <li><Link href="/curated-luxe-additions" className="g-moon-link">Curated Luxe Additions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-16 md:pt-0 flex justify-center">
                    <div className="w-[80%]">
                        <h3 className="text-2xl font-semibold mb-8">Contact</h3>
                        <ul className="flex flex-col justify-center space-y-4 text-[0.85rem]">
                            <li className="w-fit"><a href="tel:+16472239966" className="flex items-center g-moon-link"><BsTelephone className="me-2 text-[18px]" />(647) 223-9966</a></li>
                            <li className="w-fit"><a href="mailto:vivi@g-moon-wellness.ca" className="flex items-center g-moon-link"><AiOutlineMail className="me-2 text-[18px]" />vivi@g-moon-wellness.ca</a></li>
                            <li className="flex items-center w-fit"><IoTimeOutline className="me-2 text-[20px] shrink-0"  />Mon - Sun, 10:00am-10:00pm</li>
                            <li className="w-fit"><a href="https://maps.app.goo.gl/kjCq6FC7RopNiny19" target="_blank" className="flex items-center g-moon-link"><IoMapOutline className="me-2 text-[18px]" />160 East Beaver Creek Rd, #21,<br /> Richmond Hill, ON, L4B 3L4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-5 bg-black/30 h-[40px] text-sm flex justify-center items-center text-white/40 font-medium">&copy; {year} Seelio Clinic</div>
        </footer>
    )
}