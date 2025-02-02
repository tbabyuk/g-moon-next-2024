import { PageHeader } from "../components/PageHeader"
import { bodyScrubsList } from "@/app/data/data"
import { ServiceCard } from "@/app/sections/components/ServiceCard"

export const metadata = {
    title: "Body Scrubs | G Moon Wellness Centre",
    description: "Choose from our selection of body scrubs!",
}


const BodyScrubsPage = () => {

    return(
        <main>
            <PageHeader title="Body Scrubs" />
            <div className="py-28 xl:px-44 flex justify-center flex-wrap gap-x-4 gap-y-8">
                {bodyScrubsList.map((scrub, index) => (
                    <ServiceCard key={index} service={scrub} />
                ))}
            </div>
        </main>
    )
}


export default BodyScrubsPage;