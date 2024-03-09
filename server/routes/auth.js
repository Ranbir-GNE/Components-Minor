// auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');
const Attendance = require('../models/attendance');

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, role, dateOfBirth } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({
      username,
      email,
      password: hashedPassword,
      role,
      dateOfBirth
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Return token or any necessary data for authentication

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Attendance
router.post('/attendance', async (req, res) => {
  try {
    const { username, email, totalClasses, classesAttended } = req.body;

    // Check if attendance already exists
    let attendance = await Attendance.findOne({ email });
    if (attendance) {
      return res.status(400).json({ message: 'Attendance already exists' });
    }

    // Create new attendance
    attendance = new Attendance({
      username,
      email,
      totalClasses,
      classesAttended
    });

    await attendance.save();

    res.status(201).json({ message: 'Attendance registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
