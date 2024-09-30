import { SectionHeader } from "../components/SectionHeader"
import { servicesList } from "../data/services"


export const ServicesSection = () => {

    return (
        <div className="py-28">
            <SectionHeader title="SERVICES" />
            <div className="px-72 flex justify-center flex-wrap gap-x-4 gap-y-8">
                {servicesList.map((service) => (
                    <div className="h-[150px] w-[190px] bg-g-moon-very-light-gray hover:bg-g-moon-light-gray hover:cursor-pointer">
                        <div className="h-[70%] flex justify-center items-center">
                            <img src={service.icon} className="h-[70%]" alt="" />
                        </div>
                        <div className="h-[30%] flex justify-center items-center">
                            <div>{service.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}