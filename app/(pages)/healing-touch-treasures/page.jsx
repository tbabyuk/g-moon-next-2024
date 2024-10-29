import { HealingTouchTreasuresPricingTable } from "@/app/components/HealingTouchTreasuresPricingTable";
import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";



const HealingTouchTreasuresPage = () => {


  return (
    <main className="text-g-moon-dark-gray">
      <PageHeader title="Healing Touch Treasures" />
      <div className="g-moon-content-padding">
        <PageSubheader title="OVERVIEW" />
        <p className="mb-16">Treat yourself to an exquisite blend of relaxation and indulgence. Book a 60-minute or longer treatment or massage. Deep relaxation of mind and body, full bespoke massage using light to medium pressure and stretch. A true feeling of balance.</p>
        <PageSubheader title="PRICING" />
        <div className="mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
          <HealingTouchTreasuresPricingTable />
        </div>
      </div>
    </main>
  )
}

export default HealingTouchTreasuresPage;