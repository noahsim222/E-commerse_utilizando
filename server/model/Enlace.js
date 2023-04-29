import mongoose from "mongoose";
const Schema = mongoose.Schema;



const enlacesSchema = new Schema({

    url: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    nombre_original: {
        type: String,
        require: true
    },
    descargas: {
        type: Number,
        default: 1
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model',
        default: null
    },
    password: {
        type: String,
        default: null
    },
    creado: {
        type: Date,
        default: Date.now()
    }
},
    { collection: 'enlaces' }
)


export default mongoose.model("Enlace", enlacesSchema);