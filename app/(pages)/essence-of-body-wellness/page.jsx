import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";
import { PageSubSubheader } from "../components/PageSubSubheader";



const EssenceOfBodyWellnessPage = () => {


    return (
      <main className="text-g-moon-dark-gray">
      <PageHeader title="Essence of Body Wellness" />
        <div className="g-moon-content-padding">
            <PageSubheader title="OVERVIEW" />
            <p className="mb-20">Coming soon...</p>
            <PageSubheader title="COMBO SERVICES" />
            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Dream Package (90 mins) - $90.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Foot Acupressure Massage</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil or Warm Oil Full Body Massage</td>
                            <td>60 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Pain Relief & Pain Prevention (75 mins) - $90.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Acupressure Thai Massage</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Traditional Thai Massage</td>
                            <td>45 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Golfer's Heaven (90 mins) - $100.00" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Foot Acupressure Massage</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil Full Body Massage</td>
                            <td>45 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Hot Stone Massage or Hot Herbal Compress</td>
                            <td>15 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Let's Relax Experience (105 mins) - $120.00" />
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
                            <td>15 mins</td>
                        </tr>
                        <tr>
                            <td>Floral Bath</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil Massage</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Hot Stone Massage</td>
                            <td>15 mins</td>
                        </tr>
                        <tr>
                            <td>Thai Stretch</td>
                            <td>15 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-20 mx-auto w-full md:max-w-[650px] lg:max-w-[900px]">
                <PageSubSubheader title="Body & Soul (75 mins???) - $????" />
                <table className="short-pricing-table">
                    <thead>
                        <tr className="bg-g-moon-gold text-g-moon-white">
                            <th className="py-2">Service</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Body Scrub or Floral Bath</td>
                            <td>30 mins</td>
                        </tr>
                        <tr>
                            <td>Aromatic Oil or Warm Oil Full Body Massage</td>
                            <td>45 mins</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
      </main>
  )
  }
  
  export default EssenceOfBodyWellnessPage;