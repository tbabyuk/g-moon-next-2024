import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "About | G Moon Wellness Centre",
    description: "A brief history of G Moon Wellness Centre",
}


const AboutPage = () => {

    return(
        <main>
            <PageHeader title="About Us" />
            <p className="text-g-moon-dark-gray g-moon-content-padding">G Moon Wellness is located in Richmond Hill nearby highway 7. Our spa area is near popular restaurants in Ontario. Our spa has been running for more than 3 years.<br /><br />

            Our mission is to provide the best of both worlds when it comes to spa treatments and services. We offer Thai massage, deep tissue and Japanese shiatsu and swedish massage etc. Spa packages are available so customers can enjoy a variety of services together. We cater to both men and women. We are dedicated to having the highest standard when it comes to quality equipment and products sourced from reliable suppliers in the spa industry.<br /><br />

            At G Moon Spa, we strive not only to look after our client&apos;s physical well being but also their mental well being by providing a friendly environment that exudes calming vibes so they can relax while being pampered like royalty.</p>
        </main>
    )
}


export default AboutPage;