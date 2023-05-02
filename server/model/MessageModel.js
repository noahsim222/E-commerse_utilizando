import mongoose from "mongoose";
const Schema = mongoose.Schema

const messageSchema = new Schema(
    {
        message: {
            text: {
                type: String,
                required: true,
            },
        },
        users: Array,
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "luciodb",//users
            required: true,
        },
    },
    {
        timestamps: true,
    }

);

export default mongoose.model("MessageModel", messageSchema);