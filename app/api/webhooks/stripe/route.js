import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { connectToGMoonDB } from "@/db/database";
import { Record } from "@/models/models";



// Setting up Nodemailer functionality
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "vivi@g-moon-wellness.ca",
        pass: process.env.NODEMAILER_VIVI_PASS
    }
})


// const emailWebDeveloper = async (message) => {

//     const mailOptions =
//     {
//         from: "vivi@g-moon-wellness.ca",
//         to: "terry@strictlywebdev.com",
//         // bcc: "vivi@g-moon-wellness.ca",
//         subject: "Error retrieving db data at G Moon",
//         html: `
//             <div style="font-family: Arial, sans-serif; padding: 0 0 30px 0">
//                 <div style="text-align: center;">
//                     <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2Fg-moon-logo-final.png?alt=media&token=2f9b2309-3021-4eb2-b39f-409bc8370fb2" alt="G Moon Wellness Centre Logo" style="width: 150px;" />
//                 </div>
//                 <h2 style="background-color: #D6B981; padding: 8px 4px; color: #F3F4F6; margin-top: 0">Error Notice</h2>
//                 <small style="color: #8C8C8C">An error occurred sending transaction summary email for customer named ${customerName}. Here is the error message: ${message} It looks like the transaction data could not be retrieved from the database.</small>
//             </div>
//         `
//     }

//     try {
//         await transporter.sendMail(mailOptions);
//         // return NextResponse.json({message: "new registration email sent successfully"}, {status: 200})
//     } catch (error) {
//         console.log("error in catch black on server:", error.message)
//     }

// }



export async function POST(req) {

    console.log("================STRIPE WEBHOOK API ROUTE FIRED===============")

    const requestBody = await req.json();


    console.log("Logging requestBody from stripe webhook", requestBody)

    const customerName = requestBody.data.object.customer_details.name
    const customerEmail = requestBody.data.object.customer_details.email
    const transactionId = requestBody.data.object.metadata.transactionId


    console.log("Logging customer name, customer email and transactionId from requestBody fo webhook:", customerName, customerEmail, transactionId)



    // Retrieve transaction data from MongoDB

    let recordsArray;

        try {
            await connectToGMoonDB()
            recordsArray = await Record.find({ id: transactionId }); // Fetch all records that match the uuid
            // recordsArray = await Record.find({ id: "444" }); // Fetch all records that match the uuid

            console.log("Logging transaction record from webhook mongoDB retrieval:", recordsArray)

                if (recordsArray.length === 0) {
                    console.log("No transaction records for given id were found in the database.");                  
                    // await emailWebDeveloper("No transaction records for given id were found in the database.")
                    return NextResponse.json({ message: "No transaction records for given id were found in the database." }, { status: 404 });
                }
            } catch (error) {
                console.log("Network error retrieving records.");
                // await emailWebDeveloper(error.message)
                return NextResponse.json({ message: "Network error retrieving records." }, { status: 500 });
            }



    const serviceDetails = recordsArray.map(service => {
        return `
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Service:</span>
                        <span style="font-weight: bold;">${service.chosenService}</span>
                    </div>

                    <div style="color: #555;">
                        <span>Price:</span>
                        <span style="font-weight: bold;">$${service.price.toFixed(2)} + tax</span>
                    </div>

                    <div style="color: #555;">
                        <span>Quantity:</span>
                        <span style="font-weight: bold;">${service.quantity}</span>
                    </div>

                    ${service.chosenDate !== "n/a" ? 
                    `<div style="color: #555;">
                        <span>Appointment Date:</span>
                        <span style="font-weight: bold;">${new Date(service.chosenDate).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</span>
                    </div>` : ""}

                    ${service.chosenStartTime !== "n/a" ? 
                    `<div style="color: #555;">
                        <span>Appointment Start Time:</span>
                        <span style="font-weight: bold;">${service.chosenStartTime}</span>
                    </div>` : ""}

                    ${service.chosenDuration !== 0 ? 
                    `<div style="color: #555;">
                        <span>Appointment Length:</span>
                        <span style="font-weight: bold;">${service.chosenDuration} mins</span>
                    </div>` : ""}

                    ${service.chosenTherapist !== "n/a" ? 
                    `<div style="color: #555;">
                        <span>Therapist:</span>
                        <span style="font-weight: bold;">${service.chosenTherapist ? service.chosenTherapist : "n/a"}</span>
                    </div>` : ""
}

                    <hr style="border: none; height: 1px; background-color: #ddd;" />
        `;
    }).join(''); // Join all service details into a single string


    const mailOptions =
        {
            from: "vivi@g-moon-wellness.ca",
            to: customerEmail,
            // to: "terry@strictlywebdev.com",
            bcc: "vivi@g-moon-wellness.ca",
            subject: "New Stripe Transaction",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 0 0 30px 0">
                    <div style="text-align: center;">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2Fg-moon-logo-final.png?alt=media&token=2f9b2309-3021-4eb2-b39f-409bc8370fb2" alt="G Moon Wellness Centre Logo" style="width: 150px;" />
                    </div>
                    <h2 style="background-color: #D6B981; padding: 8px 4px; color: #F3F4F6; margin-top: 0">Thank you for your order!</h2>
                    <small style="color: #8C8C8C">Dear ${customerName}, thank you for placing an order with G Moon Wellness! Please see a summary of your order below for your reference:</small>
                    ${serviceDetails}
                    <small style="color: #8C8C8C">All our appointments take place at our location at 160 East Beaver Creek Rd, #21, Richmond Hill, ON, L4B 3L4. If you have any questions, please call us at (647) 223-9966. We hope to see you there!</small>
                </div>
            `
        }

        try {
            await transporter.sendMail(mailOptions);
            // return NextResponse.json({message: "new registration email sent successfully"}, {status: 200})
        } catch (error) {
            console.log("error in catch black on server:", error.message)
            // return NextResponse.json({message: error.message}, {status: 500})
        }

        return NextResponse.json({message: "success"})
}