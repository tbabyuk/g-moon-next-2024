import { NextResponse } from "next/server"
import { getServiceId } from "@/app/utils/serviceMapping";
import { formatDate } from "@/app/utils/formatDate";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)



export async function POST(request) {

    const {chosenService, chosenDate, chosenStartTime, chosenDuration} = await request.json()


    let lineItems = [{
        price: getServiceId(chosenService, chosenDuration),
        quantity: 1,
    }];


    // FOR TESTING
    // let lineItems = [{
    //     price: "price_1Q7eqjRwIe8y2zCR1idihTLP",
    //     quantity: 1,
    // }];


    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        automatic_tax: {
            enabled: true,
        },
        phone_number_collection: {
          enabled: true,
        },
        metadata: {
          chosenService,
          chosenDate: formatDate(chosenDate),
          chosenStartTime,
          chosenDuration
      },

        success_url: "https://www.g-moon-wellness.ca/checkout-success",
        cancel_url: "https://www.g-moon-wellness.ca/checkout-cancelled"
    })

    if(session) {
        console.log("logging session:", session)
    }

    return NextResponse.json({
        url: session.url
    })

}
