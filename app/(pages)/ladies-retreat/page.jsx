import { HealingTouchTreasuresPricingTable } from "@/app/components/HealingTouchTreasuresPricingTable";
import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";
import { PageSubSubheader } from "../components/PageSubSubheader";



export const metadata = {
    title: "Ladies Retreat | G Moon Wellness Centre",
    description: "Indulge in the ultimate ladies' retreat with a variety of luxurious, relaxing options crafted to pamper and rejuvenate your mind and body,",
}


const LadiesRetreatPage = () => {


  return (
    <main className="text-g-moon-dark-gray">
        <PageHeader title="Ladies Retreat" />
        <div className="g-moon-content-padding">
            <PageSubheader title="OVERVIEW" />
            <p className="mb-16">Our Ladies Retreat collection addresses your unique concerns, balancing relaxation, luxury, and tension release. Each treatment is tailored to harmonize body and mind, ensuring a rejuvenating experience. Reclaim serenity, rebalance energy, and rediscover radiance. Book your Retreat today!</p>

            <PageSubheader title="COMBO SERVICES" />

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Body & Soul Retreat (60 mins) - $80.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aromatic Oil Full Body Massage</td>
                            <td>45 mins</td>
                        </tr>
                        <tr>
                            <td>Hot Stone Massage</td>
                            <td>15 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Chest & Stomach Energy Awaken (90 mins) - $120.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hot Stone Back Massage</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Warming Stomach Hot Stone Massage</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Lymphatic Chest Care Massage</td>
                            <td>30 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Chest & Stomach Energy Awaken (60 mins) - $100.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hot Stone Back Massage</td>
                            <td>20 mins</td>
                        </tr>
                        <tr>
                            <td>Warming Stomach Hot Stone Massage</td>
                            <td>20 mins</td>
                        </tr>
                        <tr>
                            <td>Lymphatic Chest Care Massage</td>
                            <td>20 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Booming Life (90 mins) - $130.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Body Scrub</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Body Wrap</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil Massage</td>
                            <td>30 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Booming Life (60 mins) - $100.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Body Scrub</td>
                            <td>20 mins</td>
                        </tr>
                        <tr>
                            <td>Body Wrap</td>
                            <td>20 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil Massage</td>
                            <td>20 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Sweet Care (60 mins) - $100.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hand Scrub & Hand Wrap</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil Hand Massage</td>
                            <td>15 mins</td>
                        </tr>
                        <tr>
                            <td>Shoulder & Head Massage</td>
                            <td>15 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
  )
}

export default LadiesRetreatPage;