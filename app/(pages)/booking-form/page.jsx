import BookingFormClientPage from "./BookingFormClientPage";
import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "Booking Form | G Moon Wellness Centre",
    description: "Book your appointment at G Moon Wellness Centre today!",
}



const BookingFormPage = () => {

  return (
        <main>
            <PageHeader title="Booking Form" />
            <BookingFormClientPage />
        </main>
  );
};

export default BookingFormPage;
