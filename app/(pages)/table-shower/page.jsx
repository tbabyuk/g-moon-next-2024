import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";
import { PageSubSubheader } from "../components/PageSubSubheader";


export const metadata = {
    title: "Table Shower | G Moon Wellness Centre",
    description: "Experience the ultimate in relaxation and rejuvenation with our Table Shower service!",
}


const TableShowerPage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Table Shower" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Experience the ultimate in relaxation and rejuvenation with our Table Shower service. This unique treatment combines the therapeutic benefits of hydrotherapy with a soothing full-body cleanse. Our skilled therapists will guide you through a gentle, invigorating rinse on a specially designed table, where you&apos;ll be comfortably positioned as warm water cascades over your body.</p>
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
                                <td>$60.00</td>
                            </tr>
                            <tr>
                                <td>60 minutes</td>
                                <td>$80.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Cleansing and Refreshing" />
                <p className="g-moon-mb">Enjoy a thorough rinse with warm, purified water to cleanse your skin of impurities and prepare it for further treatments.</p>
                <PageSubSubheader title="Hydrotherapy" />
                <p className="g-moon-mb">The gentle massage of the water helps to relax your muscles, improve circulation, and promote a sense of well-being.</p>
                <PageSubSubheader title="Gentle Exfoliation" />
                <p className="g-moon-mb">Experience a mild exfoliation as the water&apos;s pressure helps to slough off dead skin cells, leaving your skin feeling smooth and revitalized.</p>
                <p className="font-semibold">Ideal as a standalone treatment or a prelude to other spa services, the Table Shower offers a refreshing start to your spa journey, ensuring you feel clean, relaxed, and ready for ultimate pampering.</p>
            </div>
        </main>
    )
}


export default TableShowerPage;


