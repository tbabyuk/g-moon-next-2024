import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "About | G Moon Wellness Centre",
    description: "A brief history of G Moon Wellness Centre",
}


const AboutPage = () => {

    return(
        <main>
            <PageHeader title="About Us" />
            <div className="text-g-moon-dark-gray g-moon-content-padding flex flex-col items-center lg:flex-row lg:items-start">
                <img src="/images/about/store-front.jpg" className="w-[100%] max-w-[400px] mb-6 lg:me-6 rounded-lg" />
                
                <p>G Moon Wellness is located near Highway 7 in Richmond Hill and has been in business for over three years.<br /><br />

                Our mission is to blend the art of relaxation with the science of wellness, offering spa treatments that rejuvenate both body and mind. We are committed to maintaining the highest standards by using top-quality equipment and products sourced from trusted suppliers within the spa industry, ensuring every service meets our clients&apos; expectations for excellence and care.<br /><br />

                At G Moon Wellness, we nurture both body and mind in a soothing environment, where clients can unwind and be pampered like royalty.</p>
            </div>
        </main>
    )
}


export default AboutPage;