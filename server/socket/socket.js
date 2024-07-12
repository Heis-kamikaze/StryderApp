import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
 
const io = new Server(server,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {} //{userId: socketId}

io.on('connection', (socket) => {
    console.log('a user connected,', socket.id);

    // From the Socket context, establishes a connection and retreives the userid from the query object

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    // io.emit() is used to send events to all connected clients
    // This line runs everytime a user connects and the value can be grabbed with the event name string
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    // socket.on is used to listen to events that occur with the socket server... can be used on both client and server side

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        // On disconnect, removes the user id from the list of connected users
        delete userSocketMap[userId]
        // Re-emit the list of online users after disconnection
        io.emit("getOnlineUsers", Object.keys(userSocketMap))

    });
    // socket.on('chat message', (msg) => {
    //     io.emit('chat message', msg);
    // });
}
);

export {app, io, server}