import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";


export const metadata = {
    title: "Couples Massage | G Moon Wellness Centre",
    description: "Share a serene and intimate experience with our Couples Massage, a luxurious treatment designed for two."
}


const CouplesMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Couples Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Share a serene and intimate experience with our Couples Massage, a luxurious treatment designed for two. Whether you&apos;re celebrating a special occasion or simply enjoying a relaxing day together, this service allows you and your partner to indulge in synchronized relaxation side by side.</p>
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
                                <td>$160.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Shared Serenity" />
                <p className="g-moon-mb">Enjoy the soothing ambiance of our private, dual massage room, where you and your partner can unwind together in a tranquil setting. The gentle sound of calming music and soft lighting enhances your shared relaxation experience.</p>
                <PageSubSubheader title="Personalized Treatments" />
                <p className="g-moon-mb">Each partner receives a customized massage tailored to individual preferences and needs. Our skilled therapists use a combination of techniques, such as Swedish, Deep Tissue, or Aromatherapy, to ensure both of you receive the perfect balance of relaxation and therapeutic benefit.</p>
                <PageSubSubheader title="Enhanced Connection" />
                <p className="g-moon-mb">The shared experience of a Couples Massage fosters emotional bonding and mutual relaxation. It&apos;s a wonderful way to strengthen your connection while enjoying the benefits of professional massage therapy.</p>
                <PageSubSubheader title="Romantic Touch" />
                <p className="g-moon-mb">For a special touch, opt for additional enhancements such as aromatic oils, chocolates, or a glass of champagne to make your experience even more memorable.</p>
                <PageSubSubheader title="Holistic Wellness" />
                <p className="g-moon-mb">Beyond physical relaxation, the Couples Massage offers emotional and mental well-being. The synchronized massage helps to reduce stress, ease muscle tension, and promote a sense of harmony and rejuvenation.</p>
                <p className="font-semibold">Celebrate your relationship with a shared journey of relaxation and pampering. Our Couples Massage provides the perfect blend of comfort, connection, and indulgence, creating lasting memories and enhancing your overall well-being.</p>
            </div>
        </main>
    )
}


export default CouplesMassagePage;