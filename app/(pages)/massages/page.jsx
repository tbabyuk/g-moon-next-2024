import { PageHeader } from "../components/PageHeader"
import { massagesList } from "@/app/data/data"
import { ServiceCard } from "@/app/components/ServiceCard"

export const metadata = {
    title: "Massages | G Moon Wellness Centre",
    description: "Choose from our wide selection of massages!",
}


const MassagesPage = () => {

    return(
        <main>
            <PageHeader title="Massages" />
            <div className="py-28 xl:px-44 flex justify-center flex-wrap gap-x-4 gap-y-8">
                {massagesList.map((massage, index) => (
                    <ServiceCard key={index} service={massage} />
                ))}
            </div>
        </main>
    )
}


export default MassagesPage;