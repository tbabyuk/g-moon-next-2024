import { IoTimeOutline } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";


export const Addressbar = () => {

    return (
        <div className="bg-gray-900 h-[45px] text-gray-100 flex justify-center items-center">
            <div className="text-[0.95rem] flex justify-center items-center">
                <div className="px-5 flex items-center"><IoTimeOutline className="me-2" size="1.1rem" />OPENING HOURS: Monday - Sunday, 10:00am-10:00pm</div>
                <div className="px-5 flex items-center"><IoMapOutline className="me-2" size="1.1rem" />ADDRESS: 160 East Beaver Creek Rd, #21, Richmond Hill, ON, L4B 3J6</div>
            </div>
        </div>
    )
}