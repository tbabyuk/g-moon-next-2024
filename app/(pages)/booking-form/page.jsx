import BookingFormClientPage from "./BookingFormClientPage";
import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "Booking Form | G Moon Wellness Centre",
    description: "Book your appointment at G Moon Wellness Centre today!",
}



const BookingFormPage = () => {

  return (
        <main className="h-[400px]">
            <PageHeader title="Booking Form" />
            Coming soon...
            {/* <BookingFormClientPage /> */}
        </main>
  );
};

export default BookingFormPage;
