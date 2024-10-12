import { NextResponse } from "next/server";
import nodemailer from "nodemailer"



export async function POST(request) {

    const {name, phone, email, message} = await request.json()

    console.log("logging contact fields from API:", name, phone, email, message)

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
            to: "terry@strictlywebdev.com",
            // bcc: "terry@strictlywebdev.com",
            subject: "New Contact Form Submission",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 0 0 30px 0">
                    <div style="text-align: center;">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2Fg-moon-logo-final.png?alt=media&token=2f9b2309-3021-4eb2-b39f-409bc8370fb2" alt="G Moon Wellness Centre Logo" style="width: 150px;" />
                    </div>
                    <small style="color: #8C8C8C">Someone has submitted a question on G Moon Wellness website:</small>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Name:</span>
                        <span style="font-weight: bold;">${name}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Phone:</span>
                        <span style="font-weight: bold;">${phone}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Email:</span>
                        <span style="font-weight: bold;">${email}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />

                    <div style="color: #555;">
                        <span>Message:</span>
                        <span style="font-weight: bold;">${message}</span>
                    </div>
                    <hr style="border: none; height: 1px; background-color: #ddd;" />
                </div>
            `
        }

        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({message: "success"}, {status: 200})
        } catch (error) {
            console.log("error in catch black on server:", error.message)
            return NextResponse.json({message: error.message}, {status: 500})
        }

}
