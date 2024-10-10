import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(req) {

    const requestBody = await req.json();

    const type = requestBody.type;
    const amount = requestBody.data.object.amount;
    const userClerkId = requestBody.data.object.metadata.userClerkId;

        console.log("logging whole requestBody from Stripe webhook:", requestBody)
        console.log("Logging type and amount:", type, amount)
        console.log("logging userClerkId from Stripe Webhook:", userClerkId)

        // let numCreditsPurchased;

        // if(type === "charge.succeeded") {

        //     switch(amount) {
        //         case 500:
        //             numCreditsPurchased = 20;
        //             break;
        //         case 1000:
        //             numCreditsPurchased = 50;
        //             break;
        //         case 1500:
        //             numCreditsPurchased = 100;
        //             break;
        //     }

        //     console.log("logging number of credits purchased:", numCreditsPurchased)

        //     try {
        //         await connectToESLWorksheetWizardDB()
    
        //         // add new user to database
        //         // await User.updateOne({ userClerkId }, {userApiCount: userApiCount + numCreditsPurchased})
        //         await User.updateOne({ userClerkId }, { $inc: { userApiCount: numCreditsPurchased } })
            
        //         // return new Response(JSON.stringify(result), {status: 200})
        //         console.log("credits update successful!")
        //         return NextResponse.json({message: "Update Successful!"}, {status: 200})
        
        //     } catch (error) {
        //         // return new Response("Failed to fetch students", {status: 500})
        //         return NextResponse.json({message: error.message}, {status: 500})
        //     }
        // }
    


    return NextResponse.json({message: "success"})
}



// export async function POST(request) {

//     const {
//             student_name, 
//             parent_name, 
//             phone, 
//             email, 
//             instrument, 
//             lesson_type, 
//             lesson_duration, 
//             lesson_frequency, 
//             preferred_days, 
//             source, 
//             comments
//             } = await request.json()


//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "info@dacapomusic.ca",
//             pass: process.env.NODEMAILER_INFO_PASS
//         }
//     })


//     const lessonEmailOptions =
//         {
//             from: "info@dacapomusic.ca",
//             to: "info@dacapomusic.ca",
//             subject: "New Lesson Registration",
//             html: `
//                     <strong>Student Name</strong><br />
//                     <small>${student_name}</small>
//                     <hr>
//                     <strong>Parent/Guardian Name</strong><br />
//                     <small>${parent_name}</small>
//                     <hr>
//                     <strong>Phone</strong><br />
//                     <small>${phone}</small>
//                     <hr>
//                     <strong>Email</strong><br />
//                     <small>${email}</small>
//                     <hr>
//                     <strong>Instrument</strong><br />
//                     <small>${instrument}</small>
//                     <hr>
//                     <strong>Lesson Type</strong><br />
//                     <small>${lesson_type}</small>
//                     <hr>
//                     <strong>Lesson Duration</strong><br />
//                     <small>${lesson_duration}</small>
//                     <hr>
//                     <strong>Lesson Frequency</strong><br />
//                     <small>${lesson_frequency}</small>
//                     <hr>
//                     <strong>Lesson Days</strong><br />
//                     <small>Mondays: ${preferred_days.monday}</small><br />
//                     <small>Tuesdays: ${preferred_days.tuesday}</small><br />
//                     <small>Wednesdays: ${preferred_days.wednesday}</small><br />
//                     <small>Thursdays: ${preferred_days.thursday}</small><br />
//                     <small>Saturdays: ${preferred_days.saturday}</small>
//                     <hr>
//                     <strong>Source</strong><br />
//                     <small>${source}</small>
//                     <hr>
//                     <strong>Comments</strong><br />
//                     <small>${comments}</small>
//                     <hr>
//                 `
//         }


//         if(instrument === "band") {
//             try {
//                 // throw new Error("Ooops, error with register form!!!! OOPS")
//                 await transporter.sendMail(bandEmailOptions);
//                 console.log("try block fired in Node.js")
//                 return NextResponse.json({message: "new registration email sent successfully"}, {status: 200})
//             } catch (error) {
//                 console.log("error in catch black on server:", error.message)
//                 return NextResponse.json({message: error.message}, {status: 500})
//             }

//         } else {
//             try {
//                 // throw new Error("Ooops, error with register form!!!! OOPS")
//                 await transporter.sendMail(lessonEmailOptions);
//                 console.log("try block fired in Node.js")
//                 return NextResponse.json({message: "new registration email sent successfully"}, {status: 200})
//             } catch (error) {
//                 console.log("error in catch black on server:", error.message)
//                 return NextResponse.json({message: error.message}, {status: 500})
//             }
//         }

// }
