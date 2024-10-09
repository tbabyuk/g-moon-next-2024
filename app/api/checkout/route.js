import { NextResponse } from "next/server"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)



export async function POST(request) {

    const {orderDetails} = await request.json()

    console.log("logging orderDetails from checkout API:", orderDetails)

    // let lineItems = []; //how it was originally

    let lineItems = [            {
        price: "price_1Q7etZRwIe8y2zCRcrTm5HYD",
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


    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        automatic_tax: {
            enabled: true,
        },
        // shipping_address_collection: {
        //     allowed_countries: ["CA"],
        // },
        // shipping_options: [
        //     {
        //         shipping_rate_data: {
        //           type: 'fixed_amount',
        //           fixed_amount: {
        //             amount: 0,
        //             currency: 'cad',
        //           },
        //           display_name: 'Store pickup'
        //         },
        //       },
        //       {
        //         shipping_rate_data: {
        //           type: 'fixed_amount',
        //           fixed_amount: {
        //             amount: 1000,
        //             currency: 'cad',
        //           },
        //           display_name: 'Ground shipping (1-3 business days in GTA)',
        //           delivery_estimate: {
        //             minimum: {
        //               unit: 'business_day',
        //               value: 5,
        //             },
        //             maximum: {
        //               unit: 'business_day',
        //               value: 7,
        //             },
        //           },
        //         },
        //       },
        // ],
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
