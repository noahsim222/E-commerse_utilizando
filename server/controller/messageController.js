import MessageModel from "../model/MessageModel.js";


export const addMessage = async (req, res, next) => {

    try {
        const { message, to, from } = req.body;
        const data = await MessageModel.create({
            message: { text: message },
            users: [from, to],
            sender: from,
        });
        if (data) return res.json({ msg: "Mensaje creado" })
        return res.json({ msg: "Error" })
    } catch (ex) {
        next(ex)
    }
}


export const getAllMessages = async (req, res) => {
    try {
        const { from, to } = req.body;
        const messages = await MessageModel.find({
            users: {
                $all: [from, to],
            },
        }).sort({ updateAt: 1 })
        const showMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                messages: msg.message.text,
            }
        })
        res.json(showMessages)
    } catch (error) {
        console.log(error)
    }
}