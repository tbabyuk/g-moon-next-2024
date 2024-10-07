"use client"

import { PageHeader } from "../components/PageHeader";
import StepWizard from "react-step-wizard";
import { Step1ChooseService } from "./Step1ChooseService";
import { Step2ChooseDate } from "./Step2ChooseDate";
import { Step3ChooseTime } from "./Step3ChooseTime";
import { Step4ChooseDuration } from "./Step4ChooseDuration";
import { Step5ChooseTherapist } from "./Step5ChooseTherapist";
import { Step6ReviewOrder } from "./Step6ReviewOrder";

import { useEffect, useState } from "react";

import { daysBasedOnService } from "@/app/data/data";
import { therapistsBasedOnDays } from "@/app/data/data";
import { allServicesList } from "@/app/data/data";

import { useOrderDetails } from "@/app/hooks/useOrderDetails";



const BookingPage = () => {

  const [selectedService, setSelectedService] = useState("thai massage");
  const [dayOptionsArray, setDayOptionsArray] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [therapistOptionsArray, setTherapistOptionsArray] = useState([]);
  const [durationOptions, setDurationOptions] = useState([]);

  const {orderDetails, setOrderDetails} = useOrderDetails()

  console.log("logging orderDetails hook from page:", orderDetails)


  useEffect(() => {

        console.log("first useEffect fired due to chosenService selected")
        // get days on which chosen service is available
        const dayOptions = daysBasedOnService.filter((day) => day.services.includes(orderDetails.chosenService))
        setDayOptionsArray(dayOptions)

        // get default duration for chosen service
        const serviceDurationOptions = allServicesList.filter((service) => service.name === orderDetails.chosenService)
        console.log("logging serviceDurationOptions from useEffect:", serviceDurationOptions)
        setDurationOptions(serviceDurationOptions[0]?.duration)
        setOrderDetails((prevState) => ({...prevState, chosenDuration: serviceDurationOptions[0]?.duration[0]}))

    }, [orderDetails.chosenService])


  useEffect(() => {
      const date = new Date(orderDetails.chosenDate);
      
      const selectedDay = date.toLocaleString("en-US", {
          weekday: "long"
        })
        console.log("needed========================== useEffect fired", selectedDay)


        const therapistOptions = therapistsBasedOnDays.filter((therapist) => therapist.availability.includes(selectedDay.toLowerCase()) && therapist.services.includes(orderDetails.chosenService))
        setTherapistOptionsArray(therapistOptions)
        setOrderDetails((prevState) => ({...prevState, chosenTherapist: therapistOptions[0]?.name}))
        console.log("Logging therapistsOptions+++++++++++++++++++", therapistOptions)
  }, [orderDetails.chosenDate])


  return (
        <main>
            <PageHeader title="Booking" />
            <div className="g-moon-content-padding flex justify-center min-h-[520px]">
                <StepWizard className="w-[90%] max-w-[400px]">
                    <Step1ChooseService setOrderDetails={setOrderDetails} />
                    <Step2ChooseDate dayOptionsArray={dayOptionsArray} setOrderDetails={setOrderDetails} />
                    <Step3ChooseTime setOrderDetails={setOrderDetails} />
                    <Step4ChooseDuration durationOptions={durationOptions} setOrderDetails={setOrderDetails} />
                    <Step5ChooseTherapist therapistOptionsArray={therapistOptionsArray} setOrderDetails={setOrderDetails} />
                    <Step6ReviewOrder orderDetails={orderDetails} />
                </StepWizard>
            </div>
        {/* <div>
            <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tbabyuk/vivi-schedule"
            style={{ minWidth: "320px", height: "700px" }}
            />
        </div> */}
        </main>
  );
};

export default BookingPage;
