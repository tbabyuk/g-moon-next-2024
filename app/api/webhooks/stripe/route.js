import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(req) {

    const requestBody = await req.json();

    const type = requestBody.type;
    const amount = requestBody.data.object.amount;
    const secret_word = "Banana"
    // const userClerkId = requestBody.data.object.metadata.userClerkId;

        console.log("logging whole requestBody from Stripe webhook:", requestBody)
        console.log("Logging type and amount:", type, amount)
        // console.log("logging userClerkId from Stripe Webhook:", userClerkId)


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "terry@strictlywebdev.ca",
            pass: process.env.NODEMAILER_STRICTLY_PASS
        }
    })


    const emailOptions =
    {
        from: "terry@strictlywebdev.ca",
        to: "terry@strictlywebdev.ca",
        subject: "New Stripe Transaction",
        html: `
                <strong>Type:</strong><br />
                <small>${type}</small>
                <hr>
                <strong>Amount:</strong><br />
                <small>${amount}</small>
                <hr>
                <strong>Secret Word:</strong><br />
                <small>${secret_word}</small>
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