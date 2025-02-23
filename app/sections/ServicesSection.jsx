import { SectionHeader } from "../components/SectionHeader"
import { servicesList } from "../data/data"
import { ServiceCard } from "./components/ServiceCard"


export const ServicesSection = () => {

    return (
        <div className="px-5 py-24">
            <SectionHeader title="OUR SERVICES" />
            <div className="flex lg:px-22 xl:px-28 justify-center flex-wrap gap-8">
                {servicesList.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    )
}