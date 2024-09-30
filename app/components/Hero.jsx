
import { IoMdCheckmarkCircle } from "react-icons/io";


export const Hero = () => {

    return(
        <div className="h-[calc(100vh-115px)] bg-[#EDEADF] flex">
            <div className="flex-1 flex flex-col text-g-moon-dark-gray p-20">
                <h2 className="text-6xl mb-10">Rejuvenate your body, mind and soul</h2>
                <ul className="text-xl space-y-4 mb-10">
                <li className="flex items-center"><IoMdCheckmarkCircle className="text-green-500 me-2" />Relaxing Massages</li>
                <li className="flex items-center"><IoMdCheckmarkCircle className="text-green-500 me-2" />Exfoliating Body Scrubs</li>
                <li className="flex items-center"><IoMdCheckmarkCircle className="text-green-500 me-2" />Experienced Staff</li>
                </ul>
                <button className="btn btn-lg g-moon-action-btn w-fit text-lg text-g-moon-white">Book My Appointment</button>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="/g-moon-header-image-500.png" className="w-[80%]" alt="Relaxing Massage" />
            </div>
        </div>
    )
}