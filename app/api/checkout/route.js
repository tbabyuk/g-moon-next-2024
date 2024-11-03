import { NextResponse } from "next/server"
import { getServiceId } from "@/app/utils/serviceMapping";
import { formatDate } from "@/app/utils/formatDate";
import { connectToGMoonDB } from "@/db/database";
import { Record } from "@/models/models";
import { v4 as uuidv4 } from 'uuid';




const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST_KEY)



export async function POST(request) {

    const itemsArray = await request.json()

    console.log("Logging details from api checkout route", itemsArray)

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
                chosenTherapist: purchase.chosenTherapist
            });
        }));

        console.log("Record created:", records);

    } catch (error) {
        // return new Response("Failed to fetch students", {status: 500})
        console.error("Error creating record:", error);
        return NextResponse.json({message: "Failed to create a record"}, {status: 500})
    }



    const lineItemsArray = itemsArray.map((item) => ({price: item.chosenServicePriceId, quantity: item.quantity }))

    console.log("logging lineItemsArray from API ROUTE", lineItemsArray)


    // let lineItems = [{
    //     price: getServiceId(chosenService, chosenDuration),
    //     quantity: 1,
    // }];


    // FOR TESTING
    // let lineItems = [
    //     {
    //         price: "price_1Q7eqjRwIe8y2zCR1idihTLP",
    //         quantity: 1,
    //     },
    //     {
    //         price: "price_1Q7eqjRwIe8y2zCR1idihTLP",
    //         quantity: 1,
    //     },
    // ];



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

    if(session) {
        console.log("logging session:", session)
    }

    return NextResponse.json({
        url: session.url
        // response: 200
    })

}
