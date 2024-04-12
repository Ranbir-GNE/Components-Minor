// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Apply cors middleware
// app.use(cors(
//   {
//     origin: "*",
//     methods: ["POST", "GET"],
//     credentials: true
// }
// ));

// // Parse JSON request body
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// // Routes
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors(
	// origin: 'https://edconnect-nine.vercel.app/'
  ))
  app.use(express.json())
app.use(express.json())

mongoose.connect('mongodb+srv://gundeepsinghm:collegepassword@cluster0.rnnuthn.mongodb.net/?retryWrites=true&w=majority')

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server started at 5000')
})