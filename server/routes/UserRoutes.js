// const express = require('express');
// const bcrypt = require('bcryptjs');
// const router = express.Router();
// const User = require('../models/user');

// // Attendance
// router.post('/attendance', async (req, res) => {
//   try {
//     const { username, email, totalClasses, classesAttended } = req.body;

//     // Find the user by email
//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Update the attendance fields
//     user.totalClasses = totalClasses;
//     user.classesAttended = classesAttended;

//     // Save the updated user
//     await user.save();

//     res.status(200).json({ message: 'Attendance updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// module.exports = router;


const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.route("/").get(protect, allUsers);
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
