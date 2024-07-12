import { getReceiverSocketId, io } from '../socket/socket.js';
import Conversation from './../models/conversation.model.js';
import Message from './../models/message.model.js';
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        // Mongoose syntax to locate a conversation between pre-stated IDs
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })


        // If a conversation does not already exist, a new one will be created between these two IDs
        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        };

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        };
        
        // This will make the two save functions to run in parallel and save time
        await Promise.all([conversation.save(), newMessage.save()])

        const rcvrSocketId = getReceiverSocketId(receiverId);
        if(rcvrSocketId) {
            // Emit to a specific ID only
            io.to(rcvrSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)
        

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
        console.log("Error in sendMessage controller:", error.message)
    }
};

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        // In a conversation variable, find a conversation with the id being requested
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");
        
        // If there is no conversation, return an error
        if(!conversation) {
            return res.status(200).json([]);
        }
        
        const messages = conversation.messages

        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
        console.log("Error in getMessages controller:", error.message)
    }
}