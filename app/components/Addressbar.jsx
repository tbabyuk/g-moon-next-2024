import { IoTimeOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";


export const Addressbar = () => {

    return (
        <div className="bg-black/90 text-g-moon-light-gray p-5 text-[0.9rem] min-h-[40px] md:max-h-[60px] flex flex-col md:flex-row md:justify-evenly md:items-center">
            <div className="px-5 mb-4 md:mb-0 flex items-center"><IoTimeOutline className="me-4 text-[25px] shrink-0"  />Business Hours: Mon - Sun, 10:00am-10:00pm</div>
            <div className="px-5 flex items-center"><IoMapOutline className="me-5 text-[22px] shrink-0" />Location: 160 East Beaver Creek Rd, #21, Richmond Hill, ON, L4B 3J6</div>
        </div>
    )
}