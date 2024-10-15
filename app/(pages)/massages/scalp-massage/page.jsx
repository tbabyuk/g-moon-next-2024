import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";


export const metadata = {
    title: "Scalp Massage | G Moon Wellness Centre",
    description: "Experience the ultimate in relaxation and rejuvenation with our Scalp Massage, a soothing treatment designed to relieve tension, stimulate circulation, and promote overall well-being."
}


const ScalpMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Scalp Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Experience the ultimate in relaxation and rejuvenation with our Scalp Massage, a soothing treatment designed to relieve tension, stimulate circulation, and promote overall well-being. This specialized massage focuses on the scalp, neck, and shoulders, offering a deeply relaxing experience that enhances both physical and mental health.</p>
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
                        </tbody>
                    </table>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Tension Release" />
                <p className="g-moon-mb">Enjoy the calming effects of gentle, yet effective pressure applied to the scalp, neck, and shoulders. This technique helps to release built-up tension and alleviate stress, providing a deep sense of relaxation.</p>
                <PageSubSubheader title="Enhanced Circulation" />
                <p className="g-moon-mb">The massage stimulates blood flow to the scalp, improving circulation and promoting healthy hair growth. This increased blood flow also helps to nourish the scalp and invigorate the hair follicles.</p>
                <PageSubSubheader title="Stress Reduction" />
                <p className="g-moon-mb">The rhythmic movements and soothing touch of the Scalp Massage promote mental calmness and relaxation. This treatment is perfect for reducing anxiety and improving overall emotional well-being.</p>
                <PageSubSubheader title="Aromatic Bliss" />
                <p className="g-moon-mb">Often complemented by essential oils or aromatic blends, the Scalp Massage enhances the sensory experience, leaving you feeling refreshed and uplifted. Choose from a variety of scents to customize your experience and support your specific needs.</p>
                <PageSubSubheader title="Improved Hair Health" />
                <p className="g-moon-mb">The massage can help to reduce scalp dryness and flakiness, improve hair texture, and enhance the overall health of your hair. It&apos;s an excellent choice for those looking to pamper their scalp and promote hair vitality.</p>
                <p className="font-semibold">Ideal for anyone seeking a peaceful escape from everyday stress, our Scalp Massage offers a serene and nurturing experience that revitalizes both body and mind.</p>
            </div>
        </main>
    )
}


export default ScalpMassagePage;