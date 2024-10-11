import { NextResponse } from "next/server"
import { getServiceId } from "@/app/utils/serviceMapping";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)



export async function POST(request) {


    const {chosenService, chosenDate, chosenStartTime, chosenDuration} = await request.json()


//     console.log("logging orderDetails from checkout API:", orderDetails)

    // let lineItems = []; //how it was originally

    let lineItems = [{
        price: getServiceId(chosenService, chosenDuration),
        quantity: 1,
    }];

    // items.forEach((item) => {
    //     lineItems.push(
    //         {
    //             // price: item.id,
    //             price: "price_1Q7etZRwIe8y2zCRcrTm5HYD",
    //             quantity: 1,
    //         }
    //     )
    // })

    const formatDate = (date) => {
      const parsedDate = new Date(date);
      const formattedDate = parsedDate.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      return formattedDate;
    }


    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        automatic_tax: {
            enabled: true,
        },
        metadata: {
          chosenService,
          chosenDate: formatDate(chosenDate),
          chosenStartTime,
          chosenDuration
      },

        success_url: "https://www.dacapomusic.ca/shop/checkout-success",
        cancel_url: "https://www.dacapomusic.ca/shop/checkout-cancelled"
    })

    if(session) {
        console.log("logging session:", session)
    }

    return NextResponse.json({
        url: session.url
    })

    // return NextResponse.json({message: "hello from server"})
}
