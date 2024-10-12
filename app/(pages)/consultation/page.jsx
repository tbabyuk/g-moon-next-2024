import { PageHeader } from "../components/PageHeader";
import { PageSubheader } from "../components/PageSubheader";


export const metadata = {
    title: "G Moon Wellness Centre | Consultation",
    description: "Our Wellness Consultation service offers a personalized approach to achieving optimal health and well-being!",
}


const ConsultationPage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Consultation" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Our Wellness Consultation service offers a personalized approach to achieving optimal health and well-being. Book a consultation with our certified RMT specialist today!</p>
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
                                <td>45 minutes</td>
                                <td>$80.00</td>
                            </tr>
                            <tr>
                                <td>60 minutes</td>
                                <td>$100.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-xl font-medium mb-4">Some conditions and disorders we commonly consult on include:</p>
                <ul className="list-inside list-disc">
                    <li>temporomandibular joint dysfunction</li>
                    <li>tension headaches</li>
                    <li>carpal tunnel syndrome</li>
                    <li>muscle strain-induced lower back pain</li>
                    <li>piriformis syndrome</li>
                    <li>dysmenorrhea</li>
                    <li>digestion obstruction</li>
                    <li>iliotibial band syndrome</li>
                    <li>knee pain</li>
                    <li>plantar fasciitis</li>
                </ul>
            </div>
        </main>
    )
}


export default ConsultationPage;


