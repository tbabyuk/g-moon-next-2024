import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";


export const metadata = {
    title: "Swedish Massage | G Moon Wellness Centre",
    description: "Discover the ultimate in relaxation with our Swedish Massage, a classic therapy designed to promote overall wellness and ease muscle tension."
}


const SwedishMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Swedish Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Discover the ultimate in relaxation with our Swedish Massage, a classic therapy designed to promote overall wellness and ease muscle tension. Known for its gentle, flowing techniques, Swedish Massage combines long, gliding strokes with kneading and circular movements to enhance circulation, reduce stress, and invigorate the body.</p>
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
                <PageSubSubheader title="Soothing Strokes" />
                <p className="g-moon-mb">Experience the calming effects of long, smooth strokes that help to relax muscles, ease tension, and improve circulation. These techniques are designed to promote a deep sense of relaxation and comfort.</p>
                <PageSubSubheader title="Kneading and Circular Movements" />
                <p className="g-moon-mb">Our therapists use kneading and circular motions to target areas of muscle tension and enhance flexibility. This approach helps to release knots and alleviate soreness, providing relief to tired and achy muscles.</p>
                <PageSubSubheader title="Improved Circulation" />
                <p className="g-moon-mb">The gentle pressure applied during the massage stimulates blood flow and lymphatic drainage, aiding in the removal of toxins and promoting overall cardiovascular health.</p>
                <PageSubSubheader title="Stress Reduction" />
                <p className="g-moon-mb">Swedish Massage is renowned for its ability to reduce stress and promote relaxation. The soothing movements help to calm the nervous system, decrease anxiety, and elevate mood.</p>
                <PageSubSubheader title="Enhanced Flexibility" />
                <p className="g-moon-mb">The therapeutic techniques used in Swedish Massage improve muscle elasticity and joint mobility, making it an excellent choice for those seeking greater physical flexibility and range of motion.</p>
                <p className="font-semibold">Indulge in the soothing and restorative benefits of Swedish Massage, and enjoy a session designed to relax your body, rejuvenate your spirit, and enhance your overall well-being.</p>
            </div>
        </main>
    )
}


export default SwedishMassagePage;