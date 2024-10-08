import { SectionHeader } from "../components/SectionHeader"
import { servicesList } from "../data/data"


export const ServicesSection = () => {

    return (
        <div className="px-5 py-28">
            <SectionHeader title="SERVICES" />
            <div className="flex lg:px-22 xl:px-28 justify-center flex-wrap gap-x-4 gap-y-8">
                {servicesList.map((service, index) => (
                    <div key={index} className="h-[180px] w-[250px] bg-g-moon-light-gray hover:bg-g-moon-light-gray-hover hover:cursor-pointer rounded-md">
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