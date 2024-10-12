import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoMapOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";



export const Footer = () => {

    return(
        <footer className="flex flex-col md:flex-row py-16 px-6 bg-[url('/images/footer-bg.jpg')] bg-center bg-cover text-g-moon-light-gray">
            <div className="flex-1 pb-16 border-b-2 border-gray-600 md:border-none md:flex md:flex-col md:items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-8">Social</h3>
                    <ul className="flex space-x-3">
                        <li><Link href="#" className="g-moon-link"><IoLogoFacebook size="2.5rem" /></Link></li>
                        <li><Link href="#" className="g-moon-link"><IoLogoInstagram size="2.5rem" /></Link></li>
                        <li><Link href="#" className="g-moon-link"><IoLogoYoutube size="2.5rem" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 py-16 md:py-0 border-b-2 border-gray-600 md:border-none md:flex md:flex-col md:items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-8">Services</h3>
                    <ul className="space-y-2 text-[0.9rem]">
                        <li><Link href="/services/massages" className="g-moon-link">Massages</Link></li>
                        <li><Link href="/services/body-scrubs" className="g-moon-link">Body Scrubs</Link></li>
                        <li><Link href="/services/table-shower" className="g-moon-link">Table Shower</Link></li>
                        <li><Link href="/services/hot-stone-therapy" className="g-moon-link">Hot Stone Therapy</Link></li>
                        <li><Link href="/services/aromatherapy" className="g-moon-link">Aromatherapy</Link></li>
                        <li><Link href="/services/reflexology" className="g-moon-link">Reflexology</Link></li>
                        <li><Link href="/services/consultation" className="g-moon-link">Consultation</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 pt-16 md:pt-0 md:flex md:flex-col md:items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-8">Contact</h3>
                    <ul className="flex flex-col justify-center space-y-6 text-[0.85rem]">
                        <li className="w-fit"><a href="tel:+16472239966" className="flex items-center g-moon-link"><BsTelephone className="me-2 text-[18px]" />(647) 223-9966</a></li>
                        <li className="w-fit"><a href="mailto:vivi@g-moon-wellness.ca" className="flex items-center g-moon-link"><AiOutlineMail className="me-2 text-[18px]" />vivi@g-moon-wellness.ca</a></li>
                        <li className="flex items-center w-fit"><IoTimeOutline className="me-2 text-[20px] shrink-0"  />Mon - Sun, 10:00am-10:00pm</li>
                        <li className="w-fit"><a href="https://maps.app.goo.gl/kjCq6FC7RopNiny19" target="_blank" className="flex items-center g-moon-link"><IoMapOutline className="me-2 text-[18px]" />160 East Beaver Creek Rd, #21,<br /> Richmond Hill, ON, L4B 3J6</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}