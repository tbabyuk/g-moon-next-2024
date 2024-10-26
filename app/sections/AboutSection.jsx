import { SectionHeader } from "../components/SectionHeader"
import Link from "next/link"


export const AboutSection = () => {

    return (
        <div className="px-5 py-24 bg-gray-100">
            <SectionHeader title="ABOUT US" />
            <div className="flex flex-col items-center lg:flex-row md:px-20 xl:px-40">
                <img src="/images/about/store-front.jpg" className="w-[100%] max-w-[400px] mb-6 lg:self-start lg:mb-0 lg:me-6 rounded-lg" />
                
                <div>
                    <p className="mb-6 leading-8">G Moon Wellness is located near Highway 7 in Richmond Hill and has been in business for over three years. Our mission is to blend the art of relaxation with the science of wellness, offering spa treatments that rejuvenate both body and mind. We are committed to maintaining the highest standards by using top-quality equipment and products sourced from trusted suppliers...</p>
                    <Link href="/about"><button className="btn g-moon-action-btn block mx-auto lg:mx-0">Read More</button></Link>
                </div>
            </div>
        </div>
    )
}