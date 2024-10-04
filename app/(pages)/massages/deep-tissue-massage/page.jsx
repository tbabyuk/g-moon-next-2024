import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";




const DeepTissueMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Deep Tissue Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Unwind with our Deep Tissue Massage, a targeted therapy designed to address deep-seated muscle tension and chronic pain. This technique focuses on the deeper layers of muscle and connective tissue, using firm pressure and slow strokes to release tightness, improve mobility, and promote overall healing.</p>
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
                <PageSubSubheader title="Intensive Pressure" />
                <p className="g-moon-mb">Experience the benefits of deep, focused pressure applied to the deeper muscle layers and connective tissues. This technique is ideal for relieving chronic muscle tension, knots, and areas of tightness.</p>
                <PageSubSubheader title="Targeted Relief" />
                <p className="g-moon-mb">Our skilled therapists use a range of techniques, including deep finger pressure, friction, and slow strokes, to address specific problem areas and facilitate the release of tension and discomfort.</p>
                <PageSubSubheader title="Improved Flexibility" />
                <p className="g-moon-mb">The focused pressure helps to break down adhesions and scar tissue, improving muscle flexibility and joint range of motion. This can be especially beneficial for athletes and those recovering from injuries.</p>
                <PageSubSubheader title="Enhanced Circulation" />
                <p className="g-moon-mb">By stimulating blood flow to deeper muscle layers, Deep Tissue Massage helps to enhance circulation, reduce inflammation, and promote the delivery of oxygen and nutrients to tissues.</p>
                <PageSubSubheader title="Stress Reduction" />
                <p className="g-moon-mb">While the pressure may be more intense, the therapeutic effects of Deep Tissue Massage contribute to overall stress reduction and improved mental well-being. The release of muscle tension can also lead to a greater sense of relaxation and balance.</p>
                <p className="font-semibold">Ideal for those seeking to address specific muscular issues or chronic pain, Deep Tissue Massage offers a powerful and effective approach to achieving relief and restoring optimal function.</p>
            </div>
        </main>
    )
}


export default DeepTissueMassagePage;