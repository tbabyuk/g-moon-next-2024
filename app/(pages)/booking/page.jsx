import BookingClientPage from "./BookingClientPage";
import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "G Moon Wellness Centre | Booking",
    description: "Schedule your appointment at G Moon Wellness Centre today!",
}



const BookingPage = () => {

  return (
        <main>
            <PageHeader title="Booking" />
            <BookingClientPage />
        </main>
  );
};

export default BookingPage;
