import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
        caseRefNumber: {
        type: String,
        required: true,
        },
        date: {
            type: Date,
            default: Date.now
        },
        notifyingOfficer:{
            type: String,
            required: true
        },
        notificationRecipient:{
            type: String,
            required: true
        },
        incidentDescription:{
            type: String,
            required: true,
        },
        notificationType: {
            type: String,
            required: true
        },
        notificationContent: {
            type: String,
            required: true
        },
        additionalNotes: {
            type: String,
            required: true
        }
});

export default model("Notification", notificationSchema)