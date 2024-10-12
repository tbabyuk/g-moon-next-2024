"use client"

import StepWizard from "react-step-wizard";
import { Step1ChooseService } from "./Step1ChooseService";
import { Step2ChooseDate } from "./Step2ChooseDate";
import { Step3ChooseTime } from "./Step3ChooseTime";
import { Step4ChooseDuration } from "./Step4ChooseDuration";
import { Step5ChooseTherapist } from "./Step5ChooseTherapist";
import { Step6ReviewOrder } from "./Step6ReviewOrder";
import { BookingContextProvider } from "@/app/context/BookingContext";



const BookingFormClientPage = () => {


  return (
        <div className="g-moon-content-padding flex flex-col justify-center">
            <p className="text-center mb-12">Book your appointment at <span className="font-bold">G Moon Wellness Centre</span> with these 6 easy steps:</p>
            <BookingContextProvider>
                <StepWizard className="min-h-[300px] w-[90%] max-w-[400px] mx-auto">
                    <Step1ChooseService />
                    <Step2ChooseDate />
                    <Step3ChooseTime />
                    <Step4ChooseDuration />
                    <Step5ChooseTherapist />
                    <Step6ReviewOrder />
                </StepWizard>
            </BookingContextProvider>
        </div>
    );
};

export default BookingFormClientPage;
