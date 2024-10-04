import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";
import { PageSubSubheader } from "../components/PageSubSubheader";




const HotStoneTherapyPage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Hot Stone Therapy" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Indulge in the ultimate relaxation experience with our Hot Stone Therapy, a time-honored technique that combines the therapeutic power of heat with the soothing effects of massage. This treatment uses smooth, heated basalt stones, which are carefully placed on key points of your body to promote deep relaxation and relieve tension.</p>
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
                                <td>60 minutes</td>
                                <td>$70.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Heat-Infused Relaxation" />
                <p className="g-moon-mb">Enjoy the penetrating warmth of heated stones as they are expertly placed on specific areas of your body, helping to melt away stress and ease muscular tension.</p>
                <PageSubSubheader title="Deep Tissue Massage" />
                <p className="g-moon-mb">Our skilled therapists use the heated stones as an extension of their hands to provide a deeply relaxing and effective massage. The warmth enhances blood flow and muscle relaxation, allowing for a more profound therapeutic effect.</p>
                <PageSubSubheader title="Stress Reduction" />
                <p className="g-moon-mb">The combination of heat and massage promotes a sense of calm and well-being, making this treatment an excellent choice for alleviating stress and enhancing overall relaxation.</p>
                <PageSubSubheader title="Improved Circulation" />
                <p className="g-moon-mb">The heat from the stones helps to dilate blood vessels and improve circulation, which can aid in the reduction of muscle soreness and support overall health.</p>
                <p className="font-semibold">Ideal for those seeking a deeply relaxing and restorative experience, Hot Stone Therapy provides a harmonious blend of warmth and therapeutic touch to leave you feeling balanced and rejuvenated.</p>
            </div>
        </main>
    )
}


export default HotStoneTherapyPage;


