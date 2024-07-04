import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    /* Sender and receiver Id fields are references to the user model, to indicate the sender and receiver of  the message */
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    }
    // createdAt, updatedAt
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema);

export default Message;