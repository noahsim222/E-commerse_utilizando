import MessageModel from '../model/MessageModel.js';


 const newMessage = async(req,res) => {
const {message} = req.body;
   

    try { 
        const msg = new MessageModel({message});
        await msg.save();
        res.status(201).json(msg);
    } catch (error) {
        console.log(error);
    }


}


export default newMessage;


