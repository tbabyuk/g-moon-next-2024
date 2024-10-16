import { SectionHeader } from "../components/SectionHeader"
import { servicesList } from "../data/data"
import { ServiceCard } from "../components/ServiceCard"


export const ServicesSection = () => {

    return (
        <div className="px-5 py-28">
            <SectionHeader title="SERVICES" />
            <div className="flex lg:px-22 xl:px-28 justify-center flex-wrap gap-x-4 gap-y-8">
                {servicesList.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    )
}