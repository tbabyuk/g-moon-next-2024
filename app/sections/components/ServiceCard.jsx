
import Link from "next/link"


export const ServiceCard = ({service}) => {

    return(
        <Link href={service.url} className={`h-[250px] w-1/4 min-w-[250px] g-moon-service-card`} style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute w-full text-white text-lg bg-black/25 rounded-b-md h-[50px] bottom-0 flex justify-center items-center">
                {service.name}
            </div>
        </Link>
    )
}