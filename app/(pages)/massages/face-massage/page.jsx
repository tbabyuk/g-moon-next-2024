import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";


export const metadata = {
    title: "G Moon Wellness Centre | Face Massage",
    description: "Revitalize and refresh your appearance with our luxurious Face Massage, a rejuvenating treatment designed to promote relaxation, improve circulation, and enhance the natural beauty of your skin."
}


const FaceMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Face Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Revitalize and refresh your appearance with our luxurious Face Massage, a rejuvenating treatment designed to promote relaxation, improve circulation, and enhance the natural beauty of your skin. This soothing service targets key areas of the face, neck, and shoulders to relieve tension, boost radiance, and promote a youthful glow.</p>
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
                <PageSubSubheader title="Gentle Stimulation" />
                <p className="g-moon-mb">Experience the benefits of gentle, rhythmic strokes that stimulate facial muscles and improve blood flow. This technique helps to relax facial tension, reduce stress, and promote a sense of calm.</p>
                <PageSubSubheader title="Enhanced Radiance" />
                <p className="g-moon-mb">The massage encourages lymphatic drainage and improves circulation, which helps to reduce puffiness and give your skin a healthy, natural glow. The enhanced blood flow also supports a more vibrant and youthful complexion.</p>
                <PageSubSubheader title="Muscle Relaxation" />
                <p className="g-moon-mb">Target key tension points in the face, neck, and shoulders to alleviate stress-related tension and promote relaxation. This can help to smooth out fine lines and enhance overall facial tone.</p>
                <PageSubSubheader title="Nourishing Effects" />
                <p className="g-moon-mb">Often combined with high-quality facial oils or creams, the massage allows for deeper penetration of nourishing ingredients, improving skin hydration and texture.</p>
                <PageSubSubheader title="Stress Relief" />
                <p className="g-moon-mb">Enjoy the calming effects of facial massage, which helps to reduce overall stress and promote a feeling of well-being. The gentle, soothing touch can also aid in better sleep and mental relaxation.</p>
                <p className="font-semibold">Perfect for anyone seeking a refreshing and rejuvenating experience, our Face Massage provides a harmonious blend of relaxation and skin care, leaving you with a radiant and revitalized appearance.</p>
            </div>
        </main>
    )
}


export default FaceMassagePage;