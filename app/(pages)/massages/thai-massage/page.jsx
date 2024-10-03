import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";

const ThaiMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Thai Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Experience the timeless art of Thai Massage, an ancient practice that combines the benefits of stretching, acupressure, and rhythmic movements to create a deeply invigorating and restorative experience. Rooted in traditional Thai medicine, this therapeutic massage works to balance your body&apos;s energy, enhance flexibility, and promote overall well-being.</p>
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
                                <td>$80.00</td>
                            </tr>
                            <tr>
                                <td>90 minutes</td>
                                <td>$100.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Dynamic Stretching" />
                <p className="mb-12">Enjoy a series of guided stretches and movements that improve your range of motion and flexibility. Our therapists use their hands, feet, elbows, and knees to gently stretch and manipulate your body, promoting deep relaxation and ease.</p>
                <PageSubSubheader title="Acupressure Techniques" />
                <p className="mb-12">Benefit from targeted pressure applied to specific points along your body&apos;s energy lines (Sen lines). This technique helps to release blockages, stimulate energy flow, and alleviate muscle tension.</p>
                <PageSubSubheader title="Enhanced Circulation" />
                <p className="mb-12">The rhythmic movements and stretches encourage better blood flow and oxygenation, supporting the body&apos;s natural healing processes and revitalizing your energy levels.</p>
                <PageSubSubheader title="Holistic Wellness" />
                <p className="mb-12">Thai Massage aims to harmonize the body, mind, and spirit. By integrating physical manipulation with mindful relaxation, this treatment fosters a profound sense of balance and tranquility.</p>
                <PageSubSubheader title="Invigorating Experience" />
                <p className="mb-12">Unlike other forms of massage, Thai Massage is known for its energizing effects, making it an excellent choice for those seeking both relaxation and rejuvenation.</p>
                <p className="font-semibold">Indulge in the invigorating and holistic benefits of Thai Massage, and discover a path to enhanced flexibility, reduced stress, and overall well-being.</p>
            </div>
        </main>
    )
}


export default ThaiMassagePage;