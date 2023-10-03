import mongoose from "mongoose";
// importing mongoose

// creating schema
const reminderSchema = new mongoose.Schema({

    id: String,
    name: String,
    description:String,
    createdDate: Date,
    lastModifiedDate: Date
})

const Reminder = mongoose.model('Reminder',reminderSchema);

export default Reminder;