import { NextResponse } from "next/server"
import { connectToGMoonDB } from "@/db/database";
import { Record } from "@/models/models";
import { v4 as uuidv4 } from 'uuid';




const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST_KEY) // for testing



export async function POST(request) {

    console.log("================STRIPE CHECKOUT FIRED===============")


    const itemsArray = await request.json()

    console.log("Logging itemsArray from Stripe checkout API route", itemsArray)

    const id = uuidv4();


    // Save purchase records to database
    try {
        await connectToGMoonDB()

        const records = await Promise.all(itemsArray.map(purchase => {
            return Record.create({
                id: id,
                chosenService: purchase.chosenService,
                chosenDate: purchase.chosenDate,
                chosenStartTime: purchase.chosenStartTime,
                chosenDuration: purchase.chosenDuration,
                chosenTherapist: purchase.chosenTherapist,
                price: purchase.price,
                quantity: purchase.quantity
            });
        }));

        console.log("Record created:", records);

    } catch (error) {
        // No return here because we still want Checkout to proceed even if MongoDB record fails to create
        console.error("Error creating record:", error);
        // return NextResponse.json({message: "Failed to create a record"}, {status: 500})
    }


    const lineItemsArray = itemsArray.map((item) => ({price: item.chosenServicePriceId, quantity: item.quantity }))


    try {
        
        const session = await stripe.checkout.sessions.create({
            line_items: lineItemsArray,
            mode: "payment",
            automatic_tax: {
                enabled: true,
            },
            phone_number_collection: {
              enabled: true,
            },
            metadata: {
              transactionId: id
            },
    
            success_url: "https://www.g-moon-wellness.ca/checkout-success",
            cancel_url: "https://www.g-moon-wellness.ca/checkout-cancelled"
        })

        console.log("logging session:", session);

        return NextResponse.json({
            url: session.url
            // response: 200
        })
    

    } catch (error) {
        console.log("error creating a Stripe session:", error)
        return NextResponse.json({message: "Error generating Stripe session"}, {status: 500})
    }

}
