import ContactFormClientPage from "./ContactClientPage";
import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "Contact Form | G Moon Wellness Centre",
    description: "Contact G Moon Wellness Centre today!",
}



const ContactPage = () => {

  return (
        <main>
            <PageHeader title="Contact" />
            <div className="px-5 md:px-12 lg:px-20 py-24 flex flex-col lg:flex-row lg:gap-x-8">
                <div className="flex-1 mb-20 lg:mb-0">
                    <ContactFormClientPage />
                </div>
                {/* MAP */}
                <div className="flex-1 flex flex-col justify-between mx-auto">
                    <ul className="space-y-1 mb-6 lg:mb-0">
                      <li><span className="font-semibold">Telephone:</span> <a href="tel:+16472239966" className="g-moon-link">(647) 223-9966</a></li>
                      <li><span className="font-semibold">Email</span>: <a href="mailto:vivi@g-moon-wellness.ca" className="g-moon-link">vivi@g-moon-wellness.ca</a></li>
                      <li><span className="font-semibold">Address</span>: 160 East Beaver Creek Rd #21, Richmond Hill, ON L4B 3L4</li>
                    </ul>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.3276148319947!2d-79.37792502433194!3d43.84903783974332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d574d0856bb7%3A0xacde43c4bb227064!2sG%20MOON%20Wellness%20Centre!5e0!3m2!1sen!2sca!4v1730261097468!5m2!1sen!2sca" className="w-full max-w-[500px]" height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>

        </main>
  );
};

export default ContactPage;
