import Model from "../model/Model.js";


const getAllUsers = async (req, res) => {
    try {
        const entry = await Model.find();
        res.status(200).json(entry)
    } catch (error) {
        console.log(error)
        console.log("Error al traer los usuarios")
    }

}

export default getAllUsers;