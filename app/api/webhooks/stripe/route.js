import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(req) {

    console.log("STRIPE WEBHOOK API ROUTE FIRED")

    const requestBody = await req.json();


    const amountTotal = requestBody.data.object.amount_total;
    const customerName = requestBody.data.object.customer_details.name
    const customerEmail = requestBody.data.object.customer_details.email


    // const userClerkId = requestBody.data.object.metadata.userClerkId;

        console.log("logging whole requestBody from Stripe webhook:", requestBody)
        console.log("amount total:", amountTotal)
        console.log("customer name:", customerName)
        console.log("customer email:", customerEmail)
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
        html: `
                <strong>Amount:</strong><br />
                <small>${amountTotal}</small>
                <hr>
                <strong>Customer Name:</strong><br />
                <small>${customerName}</small>
                <hr>
                <strong>Customer Email:</strong><br />
                <small>${customerEmail}</small>
                <hr>
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