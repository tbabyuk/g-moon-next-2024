import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"



export async function POST(req) {

    const requestBody = await req.json();

    const {amount_total, customer_details} = requestBody.object;

    const {name, email} = customer_details;

    const secret_word="Sparky"


    console.log("Logging amount total, name and email of customer from webhook API route:", amount_total, name, email)


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
            subject: "Stripe Hook Results",
            html: `
                    <strong>Amount Total</strong><br />
                    <small>${amount_total}</small>
                    <hr>
                    <strong>Customer Name</strong><br />
                    <small>${name}</small>
                    <hr>
                    <strong>Customer Email</strong><br />
                    <small>${email}</small>
                    <hr>
                    <strong>Secret Word</strong><br />
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



    return NextResponse.json({message: "success"})
}