import Products from "../model/Products.js";

const getEntrys = async (req, res) => {

    try {
        const entrys = await Products.find();
        res.status(200).json(entrys);
    } catch (error) {
        console.log(error)
    }


}


export default getEntrys;