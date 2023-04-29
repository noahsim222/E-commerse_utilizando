import mongoose from "mongoose";
const Schema = mongoose.Schema

const schemaDB = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        edad: {
            type: Number,

            trim: true
        },
        ubicacion: {
            type: String,

            trim: true
        },
        foto: {
            type: String,
            trim: true
        }


    },
    { collection: 'luciodb' }

)


export default mongoose.model("Model", schemaDB);