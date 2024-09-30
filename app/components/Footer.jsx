import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoMapOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";



export const Footer = () => {

    return(
        <footer className="flex p-16 bg-black/90 text-g-moon-light-gray">
            <div className="flex-1 flex justify-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-8">Social</h3>
                    <ul className="flex space-x-3">
                        <li><Link href="#" className="g-moon-footer-link"><IoLogoFacebook size="2.5rem" /></Link></li>
                        <li><Link href="#" className="g-moon-footer-link"><IoLogoInstagram size="2.5rem" /></Link></li>
                        <li><Link href="#" className="g-moon-footer-link"><IoLogoYoutube size="2.5rem" /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-8">Services</h3>
                    <ul className="space-y-2 text-[0.9rem]">
                        <li><Link href="#" className="g-moon-footer-link">Massages</Link></li>
                        <li><Link href="#" className="g-moon-footer-link">Body Scrubs</Link></li>
                        <li><Link href="#" className="g-moon-footer-link">Table Shower</Link></li>
                        <li><Link href="#" className="g-moon-footer-link">Hot Stone Therapy</Link></li>
                        <li><Link href="#" className="g-moon-footer-link">Aromatherapy</Link></li>
                        <li><Link href="#" className="g-moon-footer-link">Reflexology</Link></li>
                        <li><Link href="#" className="g-moon-footer-link">Consultation</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-8">Contact</h3>
                    <ul className="flex flex-col justify-center space-y-8 text-[0.9rem]">
                        <li className="flex items-center"><IoMapOutline className="me-2" size="1.1rem" />160 East Beaver Creek Rd, #21,<br /> Richmond Hill, ON, L4B 3J6</li>
                        <li className="flex items-center"><BsTelephone className="me-2" size="1.1rem" />(647) 223-9966</li>
                        <li className="flex items-center"><MdOutlineEmail className="me-2" size="1.1rem" />vivi@g-moon-wellness.ca</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}