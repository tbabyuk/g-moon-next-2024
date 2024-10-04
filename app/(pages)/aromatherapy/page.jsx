import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";
import { PageSubSubheader } from "../components/PageSubSubheader";




const AromatherapyPage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Aromatherapy" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Immerse yourself in the therapeutic benefits of our Aromatherapy sessions, where the art of essential oils meets the science of relaxation. Aromatherapy uses natural plant extracts to enhance physical and emotional well-being, creating a holistic experience that rejuvenates your senses and promotes balance.</p>
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
                                <td>$50.00</td>
                            </tr>
                            <tr>
                                <td>45 minutes</td>
                                <td>$60.00</td>
                            </tr>
                            <tr>
                                <td>60 minutes</td>
                                <td>$70.00</td>
                            </tr>
                            <tr>
                                <td>90 minutes</td>
                                <td>$100.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Personalized Blends" />
                <p className="g-moon-mb">Discover the power of custom-blended essential oils tailored to your unique needs and preferences. Choose from a variety of essential oils known for their calming, uplifting, or invigorating properties.</p>
                <PageSubSubheader title="Relaxing Scents" />
                <p className="g-moon-mb">Allow the fragrant aromas to transport you to a place of tranquility. Whether you seek relaxation, energy, or mental clarity, our aromatherapy treatments use the essence of nature to address your specific goals.</p>
                <PageSubSubheader title="Therapeutic Massage" />
                <p className="g-moon-mb">Enhance your experience with a soothing massage that incorporates essential oils, allowing their benefits to be absorbed into your skin and enhance your overall sense of well-being.</p>
                <PageSubSubheader title="Stress Relief" />
                <p className="g-moon-mb">Aromatherapy is known for its ability to reduce stress, anxiety, and tension. The gentle inhalation of essential oils helps to calm the mind and uplift the spirit, making it an ideal choice for those seeking peace and relaxation.</p>
                <PageSubSubheader title="Holistic Wellness" />
                <p className="g-moon-mb">Beyond relaxation, aromatherapy supports overall wellness by balancing the body&apos;s energy and promoting a sense of harmony.</p>
                <p className="font-semibold">Experience the transformative power of Aromatherapy and indulge in a sensory journey that nurtures both body and mind, leaving you feeling refreshed and revitalized.</p>
            </div>
        </main>
    )
}


export default AromatherapyPage;


