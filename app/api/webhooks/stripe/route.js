import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(req) {

    console.log("STRIPE WEBHOOK API ROUTE FIRED")

    const requestBody = await req.json();


    // const amountTotal = requestBody.data.object.amount_total;
    // const customerEmail = requestBody.data.object.customer_details.email
    const customerName = requestBody.data.object.customer_details.name
    const serviceName = requestBody.data.object.metadata.chosenService
    const serviceDate = requestBody.data.object.metadata.chosenDate
    const serviceStartTime = requestBody.data.object.metadata.chosenStartTime
    const serviceDuration = requestBody.data.object.metadata.chosenDuration


    // const userClerkId = requestBody.data.object.metadata.userClerkId;

        console.log("logging whole requestBody from Stripe webhook:", requestBody)
        console.log("amount total:", amountTotal)
        console.log("customer name:", customerName)
        console.log("customer email:", customerEmail)
        console.log("service name:", serviceName)
        console.log("service duration:", serviceDuration)

        // console.log("Logging type and amount:", type, amount)
        // console.log("logging userClerkId from Stripe Webhook:", userClerkId)


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.com",
            pass: process.env.NODEMAILER_STRICTLY_PASS
        }
    })


    const emailOptions =
    {
        from: "terry@strictlywebdev.com",
        to: "terry@strictlywebdev.com",
        subject: "New Stripe Transaction",
        // html: `
        //         <strong>Amount:</strong><br />
        //         <small>${amountTotal}</small>
        //         <hr>
        //         <strong>Customer Name:</strong><br />
        //         <small>${customerName}</small>
        //         <hr>
        //         <strong>Customer Email:</strong><br />
        //         <small>${customerEmail}</small>
        //         <hr>
        //         <strong>Service Name:</strong><br />
        //         <small>${serviceName}</small>
        //         <hr>
        //         <strong>Service Duration:</strong><br />
        //         <small>${serviceDuration}</small>
        //         <hr>
        //     `
        html: `
            <div style="font-family: Arial, sans-serif; background-color: #F4F4F4; border-radius: 5px;">
                <div style="background-color: #ffffff; padding: 20px; border-radius: 5px;">
                    <div style="text-align: center;">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2Fg-moon-logo-final.png?alt=media&token=2f9b2309-3021-4eb2-b39f-409bc8370fb2" alt="G Moon Wellness Centre Logo" style="width: 150px;" />
                    </div>
                    <h2 style="background-color: #D6B981; padding: 8px 4px; color: #F3F4F6; margin-top: 0">Thank you for your order!</h2>
                    <p style="font-style: italic; color: #8C8C8C">Dear ${customerName}, thank you for placing an order with G Moon Wellness! Please see a summary of your order below for your reference:</p>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <strong>Service:</strong>
                        <span style="color: #8C8C8C;">${serviceName}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <strong>Appointment Date:</strong>
                        <span style="color: #8C8C8C;">${serviceDate}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <strong>Appointment Start Time:</strong>
                        <span style="color: #8C8C8C;">${serviceStartTime}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <strong>Appointment Length:</strong>
                        <span style="color: #8C8C8C;">${serviceDuration}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <p style="color: #8C8C8C">All our appointments take place at our location at 160 East Beaver Creek Rd, #21, Richmond Hill, ON, L4B 3J6. We hope to see you there!</p>
                </div>
            </div>
        `
    }



        try {
            // throw new Error("Ooops, error with register form!!!! OOPS")
            await transporter.sendMail(emailOptions);
            console.log("try block fired in Node.js")
            // return NextResponse.json({message: "new registration email sent successfully"}, {status: 200})
        } catch (error) {
            console.log("error in catch black on server:", error.message)
            // return NextResponse.json({message: error.message}, {status: 500})
        }


        // let numCreditsPurchased;

        // if(type === "charge.succeeded") {

        //     switch(amount) {
        //         case 500:
        //             numCreditsPurchased = 20;
        //             break;
        //         case 1000:
        //             numCreditsPurchased = 50;
        //             break;
        //         case 1500:
        //             numCreditsPurchased = 100;
        //             break;
        //     }

        //     console.log("logging number of credits purchased:", numCreditsPurchased)

        //     try {
        //         await connectToESLWorksheetWizardDB()
    
        //         // add new user to database
        //         // await User.updateOne({ userClerkId }, {userApiCount: userApiCount + numCreditsPurchased})
        //         await User.updateOne({ userClerkId }, { $inc: { userApiCount: numCreditsPurchased } })
            
        //         // return new Response(JSON.stringify(result), {status: 200})
        //         console.log("credits update successful!")
        //         return NextResponse.json({message: "Update Successful!"}, {status: 200})
        
        //     } catch (error) {
        //         // return new Response("Failed to fetch students", {status: 500})
        //         return NextResponse.json({message: error.message}, {status: 500})
        //     }
        // }
    
    return NextResponse.json({message: "success"})
}