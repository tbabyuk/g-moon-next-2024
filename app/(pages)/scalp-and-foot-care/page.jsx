import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";
import { PageSubSubheader } from "../components/PageSubSubheader";

const ScalpAndFootCarePage = () => {


    return (
      <main className="text-g-moon-dark-gray">
      <PageHeader title="Scalp and Foot Care" />
        <div className="g-moon-content-padding">
            <PageSubheader title="OVERVIEW" />
            <p className="mb-20">Indulge in our signature Scalp and Foot Care, a sensorial experience that awakens your senses and transports you to deep relaxation. Surrender to our expert therapists as they guide you through a stress-relieving treatment, combining mobilizing movements and firm massage to melt away tension and restore vitality.</p>
            <PageSubheader title="COMBO SERVICES" />
            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Combo A (90 mins) - $95.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Herbal Foot Spa + Scalp & Shoulder Massage</td>
                            <td>15 mins</td>
                        </tr>
                        <tr>
                            <td>Foot Acupressure Massage</td>
                            <td>45 mins</td>
                        </tr>
                        <tr>
                            <td>Foot Sauna</td>
                            <td>30 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Combo B (90 mins) - $105.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Herbal or Sea Salt Foot Spa + Scalp & Shoulder Massage</td>
                            <td>15 mins</td>
                        </tr>
                        <tr>
                            <td>Foot Acupressure Massage + Foot Cupping</td>
                            <td>45 mins</td>
                        </tr>
                        <tr>
                            <td>Foot Sauna</td>
                            <td>30 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Combo C (90 mins) - $90.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Herbal Foot Spa</td>
                            <td>15 mins</td>
                        </tr>
                        <tr>
                            <td>Foot Acupressure Massage</td>
                            <td>45 mins</td>
                        </tr>
                        <tr>
                            <td>Foot Sauna</td>
                            <td>30 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Destress & Rebalance (60 mins) - $80.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aromatic Oil Neck & Shoulder Detox Massage</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil Scalp Massage</td>
                            <td>30 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Sport & Jet Lag Retreat (90 mins) - $100.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Herbal compress for Leg</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Destress Massage</td>
                            <td>45 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil Scalp Massage</td>
                            <td>15 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
      </main>
  )
  }
  
  export default ScalpAndFootCarePage;