import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";


export const metadata = {
    title: "Coffee Scrub | G Moon Wellness Centre",
    description: "Energize your senses and stimulate circulation with our aromatic Coffee Scrub, ideal for rejuvenating tired, dull skin."
}


const CoffeeScrubPage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Coffee Scrub" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Energize your senses and stimulate circulation with our aromatic coffee scrub, ideal for rejuvenating tired, dull skin. Each scrub is followed by a hydrating lotion application, ensuring your skin remains soft, supple, and beautifully glowing.</p>
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
                {/* <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Shared Serenity" />
                <p className="g-moon-mb">Enjoy the soothing ambiance of our private, dual massage room, where you and your partner can unwind together in a tranquil setting. The gentle sound of calming music and soft lighting enhances your shared relaxation experience.</p>
                <p className="font-semibold">Celebrate your relationship with a shared journey of relaxation and pampering. Our Couples Massage provides the perfect blend of comfort, connection, and indulgence, creating lasting memories and enhancing your overall well-being.</p> */}
            </div>
        </main>
    )
}


export default CoffeeScrubPage;