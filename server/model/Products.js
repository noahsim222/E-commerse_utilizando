import mongoose from "mongoose";
const Schema = mongoose.Schema


const dbSchema = new Schema(
    {
        nombre: { type: String },
        foto: {
            base64: String,
            imageFormat: String
        },
        precio: { type: Number }

    },
    { collection: 'products' }
)

export default mongoose.model('Products', dbSchema)