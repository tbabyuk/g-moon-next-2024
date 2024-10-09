"use client"

import StepWizard from "react-step-wizard";
import { Step1ChooseService } from "./Step1ChooseService";
import { Step2ChooseDate } from "./Step2ChooseDate";
import { Step3ChooseTime } from "./Step3ChooseTime";
import { Step4ChooseDuration } from "./Step4ChooseDuration";
import { Step5ChooseTherapist } from "./Step5ChooseTherapist";
import { Step6ReviewOrder } from "./Step6ReviewOrder";
import { BookingContextProvider } from "@/app/context/BookingContext";



const BookingClientPage = () => {


  return (
        <div className="g-moon-content-padding flex justify-center min-h-[520px]">
            <BookingContextProvider>
                <StepWizard className="w-[90%] max-w-[400px]">
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

export default BookingClientPage;
