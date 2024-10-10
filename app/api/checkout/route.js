import { NextResponse } from "next/server"

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const serviceIdMappings = {
    thai: {
      "60": "price_1Q7epJRwIe8y2zCR7Xe1sd0F",
      "90": "price_1Q7eq4RwIe8y2zCRmpb1elAl"
    },
    swedish: {
      "30": "price_1Q7erKRwIe8y2zCRxi7aUZdj",
      "45": "price_1Q7eriRwIe8y2zCRD3pdoZxD",
      "60": "price_1Q7esJRwIe8y2zCR5B2WRPgd",
      "90": "price_1Q7esuRwIe8y2zCRlAsieKej"
    },
    face: {
      "30": "price_1Q7eqjRwIe8y2zCR1idihTLP",
    },
    sugar: {
      "30": "price_1Q7etZRwIe8y2zCRcrTm5HYD",
      "60": "price_1Q7eu5RwIe8y2zCR4GNyUr70",
    },
    aromatherapy: {
      "30": "price_1Q7rwrRwIe8y2zCRwNBjRNsW",
      "45": "price_1Q7rxSRwIe8y2zCROxdwpE5G",
    }
}


const getServiceId = (service, duration) => {
    const serviceFirstWord = service.split(" ")[0].toLowerCase();
    console.log("logging service Id from getServiceId:", serviceIdMappings[serviceFirstWord]?.[duration])
    return serviceIdMappings[serviceFirstWord]?.[duration]
  };


export async function POST(request) {



    const {chosenService, chosenDuration} = await request.json()



    getServiceId(chosenService, chosenDuration)




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


    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        automatic_tax: {
            enabled: true,
        },
        metadata: {
          chosenService, // Add your metadata here
          chosenDuration, // Example metadata
          // Add any other custom metadata fields you need
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
