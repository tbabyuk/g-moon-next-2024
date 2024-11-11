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
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {timestamps: true})




export const Record = models.Record || model("Record", recordSchema)