const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');

// Attendance
router.post('/attendance', async (req, res) => {
  try {
    const { username, email, totalClasses, classesAttended } = req.body;

    // Find the user by email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the attendance fields
    user.totalClasses = totalClasses;
    user.classesAttended = classesAttended;

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'Attendance updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
