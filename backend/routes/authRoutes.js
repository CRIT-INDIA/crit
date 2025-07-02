// routes/user.routes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// ➕ POST: Create new user
router.post('/', async (req, res) => {
  const { name, companyName, mobile, email, address, message } = req.body;

  if (!name || !companyName || !mobile || !email || !address || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
    if (existingUser) {
      return res.status(409).json({ error: 'User already registered' });
    }

    const newUser = new User({ name, companyName, mobile, email, address, message });
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error saving user to database' });
  }
});

// 📥 GET: All users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users from database' });
  }
});

// 🔁 PUT: Update user by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, companyName, email, mobile, address, message } = req.body;

  if (!name || !companyName || !mobile || !email || !address || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, companyName, mobile, email, address, message },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Error updating user in database' });
  }
});

// ❌ DELETE: Remove user by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user from database' });
  }
});

module.exports = router;
