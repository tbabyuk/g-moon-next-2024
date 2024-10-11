import { NextResponse } from "next/server"
import nodemailer from "nodemailer"


export async function POST(req) {

    console.log("STRIPE WEBHOOK API ROUTE FIRED")

    const requestBody = await req.json();


    // const amountTotal = requestBody.data.object.amount_total;
    const customerEmail = requestBody.data.object.customer_details.email
    const customerName = requestBody.data.object.customer_details.name
    const serviceName = requestBody.data.object.metadata.chosenService
    const serviceDate = requestBody.data.object.metadata.chosenDate
    const serviceStartTime = requestBody.data.object.metadata.chosenStartTime
    const serviceDuration = requestBody.data.object.metadata.chosenDuration


    // console.log("logging whole requestBody from Stripe webhook:", requestBody)
    // console.log("amount total:", amountTotal)
    // console.log("customer email:", customerEmail)
    // console.log("customer name:", customerName)
    // console.log("service name:", serviceName)
    // console.log("service duration:", serviceDuration)

    // console.log("Logging type and amount:", type, amount)
    // console.log("logging userClerkId from Stripe Webhook:", userClerkId)


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: process.env.NODEMAILER_STRICTLY_PASS
        }
    })


    const mailOptions =
        {
            from: "terry@strictlywebdev.com",
            // to: "terry@strictlywebdev.com",
            to: customerEmail,
            subject: "New Stripe Transaction",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 0 0 20px 0">
                    <div style="text-align: center;">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2Fg-moon-logo-final.png?alt=media&token=2f9b2309-3021-4eb2-b39f-409bc8370fb2" alt="G Moon Wellness Centre Logo" style="width: 150px;" />
                    </div>
                    <h2 style="background-color: #D6B981; padding: 8px 4px; color: #F3F4F6; margin-top: 0">Thank you for your order!</h2>
                    <small style="color: #8C8C8C">Dear ${customerName}, thank you for placing an order with G Moon Wellness! Please see a summary of your order below for your reference:</small>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Service:</span>
                        <span style="font-weight: bold;">${serviceName}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Appointment Date:</span>
                        <span style="font-weight: bold;">${serviceDate}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Appointment Start Time:</span>
                        <span style="font-weight: bold;">${serviceStartTime}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Appointment Length:</span>
                        <span style="font-weight: bold;">${serviceDuration} mins</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <small style="color: #8C8C8C">All our appointments take place at our location at 160 East Beaver Creek Rd, #21, Richmond Hill, ON, L4B 3J6. We hope to see you there!</small>
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