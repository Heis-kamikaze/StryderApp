// routes/friend.routes.js

import express from 'express';
import Friend from '../models/friend.model.js';

const router = express.Router();

// Send a friend request
router.post('/request', async (req, res) => {
  try {
    const { userId, friendId } = req.body;
    const newFriendRequest = new Friend({ userId, friendId });
    await newFriendRequest.save();
    res.status(201).json(newFriendRequest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Accept a friend request
router.put('/accept', async (req, res) => {
  try {
    const { userId, friendId } = req.body;
    const friendRequest = await Friend.findOneAndUpdate(
      { userId, friendId, status: 'pending' },
      { status: 'accepted' },
      { new: true }
    );
    res.status(200).json(friendRequest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Decline a friend request
router.put('/decline', async (req, res) => {
  try {
    const { userId, friendId } = req.body;
    const friendRequest = await Friend.findOneAndUpdate(
      { userId, friendId, status: 'pending' },
      { status: 'declined' },
      { new: true }
    );
    res.status(200).json(friendRequest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all friends for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const friends = await Friend.find({ userId, status: 'accepted' }).populate('friendId');
    res.status(200).json(friends);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
