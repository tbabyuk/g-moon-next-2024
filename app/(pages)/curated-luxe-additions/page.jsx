import { CuratedLuxeAdditionsPricingTable } from "@/app/components/CuratedLuxeAdditionsPricingTable";
import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";


export const metadata = {
    title: "Curated Luxe Additions | G Moon Wellness Centre",
    description: "Elevate your spa experience with our curated selection of premium add-ons, including foot sauna, hot stone massage, calming bath, and more for ultimate relaxation!",
}


const CuratedLuxeAdditionsPage = () => {


    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Curated Luxe Additions" />
            <div className="g-moon-content-padding">
            <PageSubheader title="OVERVIEW" />
            <p className="mb-16">Elevate your relaxation.</p>
            <PageSubheader title="PRICING" />
            <div className="mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <CuratedLuxeAdditionsPricingTable />
            </div>
            </div>
        </main>    
    )
}


export default CuratedLuxeAdditionsPage;