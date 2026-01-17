"use client"

import { useState } from "react";
import { useRecaptcha } from "@/app/hooks/useRecaptcha";
import { sendContactEmail } from "./actions";


const ContactClientPage = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitFail, setSubmitFail] = useState(false)
    const { executeRecaptcha, isReady } = useRecaptcha()

    const handleFormReset = () => {
        setSubmitSuccess(false)
        setSubmitFail(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitFail(false)
        setIsSubmitting(true)

        try {
            // Get reCAPTCHA token before submitting
            if (!isReady) {
                throw new Error("reCAPTCHA not loaded")
            }
            const recaptchaToken = await executeRecaptcha("contact_form")

            // Create FormData and append reCAPTCHA token
            const formData = new FormData(e.target)
            formData.append("recaptchaToken", recaptchaToken)

            // Call server action
            const result = await sendContactEmail(formData)

            if (!result.success) {
                throw new Error(result.message || "Failed to send email")
            }

            setSubmitSuccess(true)
        } catch (error) {
            console.log("Error sending contact email:", error.message)
            setSubmitFail(true)
        } finally {
            setIsSubmitting(false)
        }
    }


    return(
        <div className="flex flex-col justify-center">
            <p className="mb-10 block lg:w-[400px] mx-auto">Have a question? Ask us here!</p>

            {submitSuccess && 
                (<p className="text-lg text-center text-green-500">Thank you - your form has been submitted successfully!<br /> Please expect to hear from us within 1-2 business days!</p>)
            }

            {submitFail && 
                (<>
                    <p className="text-lg text-center text-red-500 mb-6">Ooops, something went wrong with your contact form submission! Please try again or call us instead!</p>
                    <button className="btn g-moon-action-btn w-[150px] mx-auto" onClick={handleFormReset}>Try Again</button>
                </>)
            }

            {!submitSuccess && !submitFail && 
                <form className="mx-auto w-full max-w-[400px]" onSubmit={handleSubmit}>
                    <label className="w-full block mb-6">
                        <span className="text-gray-500 text-sm block mb-1">Name:</span>
                        <input type="text" name="name" placeholder="type here" className="input input-bordered w-full" required />
                    </label>
                    <label className="w-full block mb-6">
                        <span className="text-gray-500 text-sm block mb-1">Phone:</span>
                        <input type="tel" name="phone" placeholder="type here" className="input input-bordered w-full" required />
                    </label>
                    <label className="w-full block mb-6">
                        <span className="text-gray-500 text-sm block mb-1">Email:</span>
                        <input type="email" name="email" placeholder="type here" className="input input-bordered w-full" required />
                    </label>
                    <label className="w-full block mb-6">
                        <span className="text-gray-500 text-sm block mb-1">Message:</span>
                        <textarea name="message" placeholder="type here" className="textarea textarea-bordered w-full h-[100px]" required />
                    </label>
                    <button className="btn g-moon-action-btn text-[1rem] w-full" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
                </form>
            }
        </div>    
    )
}


export default ContactClientPage;
