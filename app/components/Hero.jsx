
import { IoMdCheckmarkCircle } from "react-icons/io";
import Link from "next/link";

export const Hero = () => {

    return(
        <div className="min-h-[calc(100vh-115px)] bg-[url('/hero-bg.jpg')] bg-center bg-cover grid grid-cols-1 lg:grid-cols-2 items-center px-3">
            <div className="flex pt-12 lg:pt-0 justify-center items-center">
                <img src="/g-moon-header-image-500.png" className="min-w-[300px] max-w-[450px]" alt="Relaxing Massage" />
            </div>
            <div className="flex flex-col items-center lg:items-start text-g-moon-white px-6 md:px-12 py-12 md:py-20">
                <h2 className="text-5xl md:text-6xl mb-10 font-medium text-center lg:text-start">Rejuvenate your body, mind and soul</h2>
                <ul className="text-xl space-y-4 mb-12">
                    <li className="flex items-center"><IoMdCheckmarkCircle className="text-white me-2" />Relaxing Massages</li>
                    <li className="flex items-center"><IoMdCheckmarkCircle className="text-white me-2" />Experienced Staff</li>
                    <li className="flex items-center"><IoMdCheckmarkCircle className="text-white me-2" />Easy Online Booking</li>
                </ul>
                <Link href="/booking-form"><button className="btn btn-lg g-moon-action-btn w-fit text-lg text-g-moon-white">Book My Appointment</button></Link>
            </div>
        </div>
    )
}