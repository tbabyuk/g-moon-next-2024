import ContactFormClientPage from "./ContactFormClientPage";
import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "Contact Form | G Moon Wellness Centre",
    description: "Contact G Moon Wellness Centre today!",
}



const ContactFormPage = () => {

  return (
        <main>
            <PageHeader title="Contact Form" />
            <ContactFormClientPage />
        </main>
  );
};

export default ContactFormPage;
