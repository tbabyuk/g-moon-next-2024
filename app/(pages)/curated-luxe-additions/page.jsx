import { CuratedLuxeAdditionsPricingTable } from "@/app/components/CuratedLuxeAdditionsPricingTable";
import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";



const CuratedLuxeAdditionsPage = () => {


    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Curated Luxe Additions" />
            <div className="g-moon-content-padding">
            <PageSubheader title="OVERVIEW" />
            <p className="mb-16">Coming soon...</p>
            <PageSubheader title="PRICING" />
            <div className="mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <CuratedLuxeAdditionsPricingTable />
            </div>
            </div>
        </main>    
    )
}


export default CuratedLuxeAdditionsPage;