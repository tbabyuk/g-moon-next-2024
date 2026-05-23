"use server"

import nodemailer from "nodemailer"


// --- Spam content detection (scoring-based) ---

const SPAM_INDICATORS = {
    // 3 points each - almost never used by genuine spa customers
    strong: [
        /\bseo\b/i,
        /search engine optimization/i,
        /\bbacklinks?\b/i,
        /link[ -]?building/i,
        /domain authority/i,
        /page authority/i,
        /keyword rankings?\b/i,
        /google rankings?\b/i,
        /search rankings?\b/i,
        /digital marketing/i,
        /\bppc\b/i,
        /pay per click/i,
        /lead generation/i,
        /web design services?/i,
        /website redesign/i,
        /social media marketing/i,
        /content marketing/i,
        /marketing (agency|company|services?|firm)/i,
        /\bsem\b/i,
        /search engine marketing/i,
        /indexed pages?/i,
    ],
    // 2 points each - unlikely in a spa inquiry context
    medium: [
        /website traffic/i,
        /drop in traffic/i,
        /organic traffic/i,
        /free audit/i,
        /website audit/i,
        /site audit/i,
        /errors? on your (website|site)/i,
        /first page of google/i,
        /top of google/i,
        /improve your rankings?/i,
        /increase your traffic/i,
        /boost your (traffic|rankings?|visibility|online)/i,
        /online (presence|visibility)/i,
        /meta (tags?|descriptions?)/i,
        /crawl errors?/i,
        /site speed/i,
        /mobile optimiz/i,
        /conversion rate/i,
        /google (my business|business profile)/i,
        /off[- ]?page/i,
        /on[- ]?page/i,
        /competitive (analysis|advantage)/i,
        /click[- ]?through rate/i,
    ],
    // 1 point each - can appear legitimately but suspicious in combination
    weak: [
        /\btraffic\b/i,
        /\brankings?\b/i,
        /\boptimiz(e|ed|ation|ing)\b/i,
        /\baudit\b/i,
        /\berrors?\b/i,
        /schedule a call/i,
        /happy to (send|share)/i,
        /send you (a |the )?(report|details|audit|analysis|errors)/i,
        /bring (this |it |them )?to your attention/i,
        /free (consultation|analysis|report)/i,
        /wanted to reach out/i,
        /quick call/i,
        /we (can|could) help/i,
        /i can (send|share) (you )?details/i,
    ],
}

const SPAM_SCORE_THRESHOLD = 5

const detectSpam = (text) => {
    const normalizedText = text.toLowerCase()
    let score = 0
    const matchedTerms = []

    for (const pattern of SPAM_INDICATORS.strong) {
        if (pattern.test(normalizedText)) {
            score += 3
            matchedTerms.push(`[strong] ${pattern}`)
        }
    }
    for (const pattern of SPAM_INDICATORS.medium) {
        if (pattern.test(normalizedText)) {
            score += 2
            matchedTerms.push(`[medium] ${pattern}`)
        }
    }
    for (const pattern of SPAM_INDICATORS.weak) {
        if (pattern.test(normalizedText)) {
            score += 1
            matchedTerms.push(`[weak] ${pattern}`)
        }
    }

    return { isSpam: score >= SPAM_SCORE_THRESHOLD, score, matchedTerms }
}


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

    // Check message content for spam/solicitation
    const spamCheck = detectSpam(`${name} ${message}`)
    if (spamCheck.isSpam) {
        console.log(`[SPAM BLOCKED] Score: ${spamCheck.score} | From: ${name} (${email}) | Matched: ${spamCheck.matchedTerms.join(", ")} | Message: ${message}`)
        return { success: true, message: "Email sent successfully" }
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "vivi@g-moon-wellness.ca",
            pass: process.env.NODEMAILER_VIVI_PASS
        }
    })

    const isDev = process.env.NODE_ENV === "development"

    const mailOptions = {
        from: "vivi@g-moon-wellness.ca",
        to: isDev ? "terry@strictlywebdev.com" : "vivi@g-moon-wellness.ca",
        ...(isDev ? {} : { bcc: "terry@strictlywebdev.com" }),
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
