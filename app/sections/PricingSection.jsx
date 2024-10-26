import { SectionHeader } from "../components/SectionHeader"
import { PricingTable } from "../components/PricingTable"

export const PricingSection = () => {

    return (
        <div className="px-5 py-24">
            <SectionHeader title="PRICING" />
            <div className="mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PricingTable />
            </div>
        </div>
    )
}