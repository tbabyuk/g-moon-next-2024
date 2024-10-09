import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";


export const metadata = {
    title: "G Moon Wellness Centre | Postnatal Massage",
    description: "Rejuvenate and restore with our Postnatal Massage, specifically designed to support new mothers as they navigate the postpartum period."
}


const PostnatalMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Postnatal Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Rejuvenate and restore with our Postnatal Massage, specifically designed to support new mothers as they navigate the postpartum period. This therapeutic treatment focuses on easing physical discomforts, promoting relaxation, and aiding in the recovery process after childbirth.</p>
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
                                <td>60 minutes</td>
                                <td>$60.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-sm">*Cupping - $10.00 extra</p>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Gentle and Restorative Techniques" />
                <p className="g-moon-mb">Our therapists use specialized techniques tailored to the needs of new mothers, addressing areas of tension and fatigue while supporting overall recovery. The massage is designed to be gentle and supportive, accommodating any physical changes and sensitivities experienced post-birth.</p>
                <PageSubSubheader title="Relief from Common Postnatal Discomforts" />
                <p className="g-moon-mb">Alleviate common issues such as back pain, neck tension, and muscle soreness. The massage helps to ease physical stress and promote relaxation, which can be especially beneficial during the postpartum period.</p>
                <PageSubSubheader title="Stress Reduction and Emotional Support" />
                <p className="g-moon-mb">Experience the calming effects of a soothing massage that helps reduce stress and anxiety, providing emotional support during a time of significant change and adjustment. The treatment promotes a sense of calm and well-being, which can be valuable for new mothers.</p>
                <PageSubSubheader title="Enhanced Circulation and Recovery" />
                <p className="g-moon-mb">Improve blood flow and lymphatic drainage to support the body’s natural healing processes. The massage helps to reduce swelling and promotes faster recovery, aiding in the overall physical restoration after childbirth.</p>
                <PageSubSubheader title="Boosted Energy and Relaxation" />
                <p className="g-moon-mb">Enjoy a rejuvenating experience that enhances relaxation and revitalizes energy levels. The massage helps to combat fatigue and supports overall wellness, allowing you to better enjoy the early moments with your baby.</p>
                <p className="font-semibold">Ideal for new mothers seeking a restorative and supportive experience, our Postnatal Massage provides a nurturing and relaxing treatment that aids in recovery and enhances well-being during the postpartum period.</p>
            </div>
        </main>
    )
}


export default PostnatalMassagePage;