import {Schema, model, models} from "mongoose"



const recordSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    chosenService: {
        type: String,
        required: true
    },
    chosenDate: {
        type: String,
        required: true
    },
    chosenStartTime: {
        type: String,
        required: true
    },
    chosenDuration: {
        type: Number,
        required: true
    },
    chosenTherapist: {
        type: String,
        required: true
    },
}, {timestamps: true})



// const metaSchema = new Schema({
//     teacher: {
//         type: String,
//         required: true
//     },
//     week1Submitted: {
//         type: Boolean,
//         required: true
//     },
//     week2Submitted: {
//         type: Boolean,
//         required: true
//     },
//     totalPay: {
//         type: Number,
//         required: true
//     },
//     payday: {
//         type: String,
//         required: true
//     },
//     notifyEmailSent: {
//         type: Boolean,
//         required: true
//     },
//     week1Notes: {
//         type: String,
//     },
//     week2Notes: {
//         type: String,
//     }
// },{timestamps: true})



// const studentSchema = new Schema({
//     attendance: {
//         type: Object,
//         required: true
//     },
//     duration: {
//         type: Number,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     pay: {
//         type: Number,
//         required: true
//     },
//     payday: {
//         type: String,
//         required: true
//     },
//     submitted: {
//         type: Boolean,
//         required: true
//     },
//     teacher: {
//         type: String,
//         required: true
//     }
// }, {timestamps: true})



export const Record = models.Record || model("Record", recordSchema)
// export const Student = models.Student || model("Student", studentSchema)
// export const Meta = models.Meta || model("Meta", metaSchema)