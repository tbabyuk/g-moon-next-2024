import Link from "next/link"


export const ServiceCard = ({service}) => {

    return(
        <Link href={service.url} className="h-[180px] w-1/4 min-w-[250px] g-moon-service-icon hover:cursor-pointer rounded-md">
            <div className="h-[70%] flex justify-center items-center">
                <img src={service.icon} className="h-[70%]" alt="" />
            </div>
            <div className="h-[30%] flex justify-center items-center">
                <div>{service.name}</div>
            </div>
        </Link>
    )
}