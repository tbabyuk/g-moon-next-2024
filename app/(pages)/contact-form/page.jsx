import ContactFormClientPage from "./ContactFormClientPage";
import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "G Moon Wellness Centre | Contact Form",
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
