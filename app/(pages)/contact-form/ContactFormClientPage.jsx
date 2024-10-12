"use client"

import { useState } from "react";


const initialState = {
    name: "",
    phone: "",
    email: "",
    message: ""
}

const ContactFormClientPage = () => {

    const [contactDetails, setContactDetails] = useState(initialState)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [submitFail, setSubmitFail] = useState(false)

    console.log("logging contact Details:", contactDetails)

    const handleInput = (e) => {
        setContactDetails((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleFormReset = () => {
        setSubmitSuccess(false)
        setSubmitFail(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactDetails)
            })

            if(res.ok) {
                setSubmitSuccess(true)
            } else {
                setSubmitFail(true)
            }

        } catch (error) {
            console.log(error)
            setSubmitFail(true)
        }
    }


    return(
        <div className="g-moon-content-padding flex flex-col justify-center">
            <p className="text-center mb-12">Have a question you want to ask us? We&apos;re here to help! Just fill out the contact form below and click Submit!</p>

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
                        <input type="text" name="name" placeholder="type here" className="input input-bordered w-full" required onChange={handleInput} />
                    </label>
                    <label className="w-full block mb-6">
                        <span className="text-gray-500 text-sm block mb-1">Phone:</span>
                        <input type="tel" name="phone" placeholder="type here" className="input input-bordered w-full" required onChange={handleInput} />
                    </label>
                    <label className="w-full block mb-6">
                        <span className="text-gray-500 text-sm block mb-1">Email:</span>
                        <input type="email" name="email" placeholder="type here" className="input input-bordered w-full" required onChange={handleInput} />
                    </label>
                    <label className="w-full block mb-6">
                        <span className="text-gray-500 text-sm block mb-1">Message:</span>
                        <textarea name="message" placeholder="type here" className="textarea textarea-bordered w-full h-[100px]"  required onChange={handleInput} />
                    </label>
                    <button className="btn g-moon-action-btn text-[1rem] w-full">Submit</button>
                </form>
            }
        </div>    
    )
}


export default ContactFormClientPage;