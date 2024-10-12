import BookingFormClientPage from "./BookingFormClientPage";
import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "G Moon Wellness Centre | Booking Form",
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
