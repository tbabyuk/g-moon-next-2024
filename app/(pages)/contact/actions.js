"use server"

import nodemailer from "nodemailer"


// Verify reCAPTCHA token with Google
const verifyRecaptcha = async (token) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    
    // reCAPTCHA v3 returns a score from 0.0 to 1.0
    // 1.0 is very likely a good interaction, 0.0 is very likely a bot
    // Google recommends 0.5 as a threshold
    return {
        success: data.success && data.score >= 0.5,
        score: data.score,
        action: data.action
    }
}


export const sendContactEmail = async (formData) => {
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const message = formData.get("message")
    const recaptchaToken = formData.get("recaptchaToken")

    console.log("logging contact fields from server action:", name, phone, email, message)

    // Verify reCAPTCHA before doing anything else
    const recaptchaResult = await verifyRecaptcha(recaptchaToken)
    if (!recaptchaResult.success) {
        console.log("reCAPTCHA verification failed. Score:", recaptchaResult.score)
        return { success: false, message: "reCAPTCHA verification failed. Please try again." }
    }
    console.log("reCAPTCHA verified successfully. Score:", recaptchaResult.score)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "vivi@g-moon-wellness.ca",
            pass: process.env.NODEMAILER_VIVI_PASS
        }
    })

    const mailOptions = {
        from: "vivi@g-moon-wellness.ca",
        to: "vivi@g-moon-wellness.ca",
        cc: "terry@strictlywebdev.com",
        subject: "New Contact Form Submission",
        html: `
            <div style="font-family: Arial, sans-serif; padding: 0 0 30px 0">
                <div style="text-align: center;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/other_images%2Fg-moon-logo-final.png?alt=media&token=2f9b2309-3021-4eb2-b39f-409bc8370fb2" alt="G Moon Wellness Centre Logo" style="width: 150px;" />
                </div>
                <p style="color: #8C8C8C">Someone has submitted a question on G Moon Wellness website:</p>
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
        await transporter.sendMail(mailOptions)
        return { success: true, message: "Email sent successfully" }
    } catch (error) {
        console.log("Error sending email:", error.message)
        return { success: false, message: error.message }
    }
}
