// models/friend.model.js

import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the Friend schema
const friendSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  friendId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined', 'blocked'],
    default: 'pending',
  },
}, { timestamps: true });

// Create an index to ensure unique friend relationships
friendSchema.index({ userId: 1, friendId: 1 }, { unique: true });

// Create and export the model
const Friend = mongoose.model('Friend', friendSchema);

export default Friend;
