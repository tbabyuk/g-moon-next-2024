import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";




const ShiatsuMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Shiatsu Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Experience the profound benefits of Shiatsu Massage, a traditional Japanese therapy rooted in the principles of acupuncture and holistic health. Shiatsu, meaning &quot;finger pressure,&quot; uses precise finger and palm pressure on specific points along the body&apos;s energy pathways (meridians) to restore balance, relieve tension, and promote overall well-being.</p>
                <PageSubheader title="PRICING" />
                <div className="w-full max-w-[400px] mx-auto mb-24">
                    <table className="single-pricing-table">
                        <thead>
                            <tr className="bg-g-moon-gold text-g-moon-white">
                                <th>DURATION</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>30 minutes</td>
                                <td>$40.00</td>
                            </tr>
                            <tr>
                                <td>45 minutes</td>
                                <td>$50.00</td>
                            </tr>
                            <tr>
                                <td>60 minutes</td>
                                <td>$60.00</td>
                            </tr>
                            <tr>
                                <td>90 minutes</td>
                                <td>$90.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Energy Flow Restoration" />
                <p className="mb-12">Shiatsu focuses on balancing the body&apos;s vital energy (Qi) by applying pressure to key points along the meridians. This technique helps to clear blockages, enhance energy flow, and support your body&apos;s natural healing abilities.</p>
                <PageSubSubheader title="Holistic Touch" />
                <p className="mb-12">Our skilled therapists use their fingers, palms, and thumbs to apply rhythmic pressure, stretching, and gentle manipulation. This approach works to release muscle tension, improve flexibility, and promote relaxation.</p>
                <PageSubSubheader title="Stress Reduction" />
                <p className="mb-12">The methodical pressure and stretches help to reduce stress and anxiety, fostering a deep sense of calm and tranquility. Shiatsu can also improve mood and enhance overall emotional well-being.</p>
                <PageSubSubheader title="Improved Circulation" />
                <p className="mb-12">By stimulating the meridians, Shiatsu enhances blood flow and oxygen delivery to tissues, aiding in detoxification and boosting energy levels.</p>
                <PageSubSubheader title="Muscle and Joint Relief" />
                <p className="mb-12">This therapeutic technique is effective in addressing muscular discomfort and joint stiffness, making it an excellent choice for those seeking relief from physical tension and pain.</p>
                <p className="font-semibold">Embrace the rejuvenating effects of Shiatsu Massage and enjoy a unique blend of relaxation, energy balance, and holistic health benefits.</p>
            </div>
        </main>
    )
}


export default ShiatsuMassagePage;