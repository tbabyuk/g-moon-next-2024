import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";
import { PageSubSubheader } from "../components/PageSubSubheader";


export const metadata = {
    title: "Reflexology | G Moon Wellness Centre",
    description: "Discover the profound benefits of Reflexology!",
}


const ReflexologyPage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Reflexology" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Discover the profound benefits of Reflexology, a therapeutic practice that focuses on stimulating specific points on your feet, hands, or ears to promote overall health and well-being. This ancient technique is based on the principle that these reflex points correspond to different organs and systems in the body, allowing for a holistic approach to relaxation and healing.</p>
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
                <PageSubSubheader title="Targeted Pressure" />
                <p className="g-moon-mb">Our skilled therapists apply precise pressure to reflex points, aiming to release blockages and restore balance throughout your body. Each session is customized to address your individual needs and areas of tension.</p>
                <PageSubSubheader title="Stress Relief" />
                <p className="g-moon-mb">Experience a deep sense of relaxation as the therapy helps to alleviate stress and anxiety. Reflexology promotes the release of endorphins, the body’s natural painkillers, and supports overall mental calm.</p>
                <PageSubSubheader title="Improved Circulation" />
                <p className="g-moon-mb">The technique enhances blood flow and oxygenation to your organs and tissues, aiding in detoxification and improving overall circulation.</p>
                <PageSubSubheader title="Pain and Tension Relief" />
                <p className="g-moon-mb">By focusing on key reflex points, Reflexology can help alleviate chronic pain, reduce muscle tension, and support recovery from physical discomfort.</p>
                <PageSubSubheader title="Holistic Wellness" />
                <p className="g-moon-mb">Beyond physical benefits, Reflexology encourages a sense of balance and well-being, contributing to better sleep, enhanced mood, and increased energy levels.</p>
                <p className="font-semibold">Indulge in the restorative benefits of Reflexology and experience a holistic treatment that nurtures your body, mind, and spirit, leaving you feeling revitalized and harmonized.</p>
            </div>
        </main>
    )
}


export default ReflexologyPage;


