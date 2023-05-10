import MessageModel from "../model/MessageModel.js";


 const allMessages = async (req, res) => {

    try {
        const entrys = await MessageModel.find();
        res.status(200).json(entrys);
    } catch (error) {
        console.log(error)
    }

}


export default allMessages;