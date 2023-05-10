import mongoose from "mongoose";
const Schema = mongoose.Schema

const messageSchema = new Schema(

    { 
   message : String,
   createdAt: {type: Date, default:Date.now},
}

);

export default mongoose.model("MessageModel", messageSchema);