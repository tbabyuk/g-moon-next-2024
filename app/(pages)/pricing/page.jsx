import { PageHeader } from "../components/PageHeader";
import { PricingTable } from "../components/PricingTable";


export const metadata = {
    title: "G Moon Wellness Centre | Pricing",
    description: "Pricing for our services",
}


const PricingPage = () => {

    return(
        <main>
            <PageHeader title="Pricing" />
            <div className="py-28 px-5 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PricingTable />
            </div>
        </main>
    )
}


export default PricingPage;