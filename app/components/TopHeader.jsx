import { IoTimeOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoMapOutline } from "react-icons/io5";
import Link from "next/link";



export const TopHeader = () => {

    return (
        <div className="bg-black/90 text-g-moon-light-gray p-6 text-[0.85rem] min-h-[40px] md:max-h-[60px] flex flex-col items-center md:flex-row md:justify-around lg:justify-between md:items-center">
            <div className="px-5 mb-4 md:mb-0 hidden xl:flex items-center md:justify-center"><a href="https://maps.app.goo.gl/kjCq6FC7RopNiny19" target="_blank" className="flex items-center g-moon-link"><IoMapOutline className="me-4 text-[22px] shrink-0" />160 East Beaver Creek Rd, #21,<br /> Richmond Hill, ON, L4B 3J6</a></div>
            <div className="px-5 mb-4 md:mb-0 hidden lg:flex items-center md:justify-center"><IoTimeOutline className="me-4 text-[25px] shrink-0"  />Mon - Sun, 10:00am-10:00pm</div>
            <div className="px-5 mb-6 md:mb-0 flex items-center md:justify-center"><a href="mailto:vivi@g-moon-wellness.ca" className="flex items-center g-moon-link"><AiOutlineMail className="me-4 text-[22px] shrink-0" />vivi@g-moon-wellness.ca</a></div>
            <div className="px-5 mb-6 md:mb-0 flex items-center md:justify-center"><a href="tel:+16472239966" className="flex items-center g-moon-link"><BsTelephone className="me-4 text-[18px] shrink-0" />(647) 223-9966</a></div>
            <div>
                <Link href="/booking"><button className="btn g-moon-action-btn text-lg text-g-moon-white">Book Now</button></Link>
            </div>
         </div>
    )
}

<li><a href="tel:+16472239966" className="flex items-center g-moon-footer-link"><BsTelephone className="me-2" size="1.1rem" />(647) 223-9966</a></li>
