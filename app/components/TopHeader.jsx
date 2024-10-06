import { IoTimeOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";


export const TopHeader = () => {

    return (
        <div className="bg-black/90 text-g-moon-light-gray p-5 text-[0.9rem] min-h-[40px] md:max-h-[60px] flex flex-col md:flex-row md:justify-around md:items-center">
            <div className="px-5 mb-4 md:mb-0 flex items-center md:justify-center"><IoTimeOutline className="me-4 text-[25px] shrink-0"  />Business Hours: Mon - Sun, 10:00am-10:00pm</div>
            <div className="px-5 mb-4 md:mb-0 flex items-center md:justify-center"><a href="tel:+16472239966" className="flex items-center g-moon-footer-link"><BsTelephone className="me-5 text-[18px] shrink-0" />(647) 223-9966</a></div>
            <div className="flex items-center justify-center">
                <button className="btn g-moon-action-btn text-lg text-g-moon-white">Book Now</button>
            </div>
         </div>
    )
}

<li><a href="tel:+16472239966" className="flex items-center g-moon-footer-link"><BsTelephone className="me-2" size="1.1rem" />(647) 223-9966</a></li>
