import { HealingTouchTreasuresPricingTable } from "@/app/components/HealingTouchTreasuresPricingTable";
import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";



const HealingTouchTreasuresPage = () => {


  return (
    <main className="text-g-moon-dark-gray">
      <PageHeader title="Healing Touch Treasures" />
      <div className="g-moon-content-padding">
        <PageSubheader title="OVERVIEW" />
        <p className="mb-16">Coming soon...</p>
        <PageSubheader title="PRICING" />
        <div className="mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
          <HealingTouchTreasuresPricingTable />
        </div>
      </div>
    </main>
  )
}

export default HealingTouchTreasuresPage;