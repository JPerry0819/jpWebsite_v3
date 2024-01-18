const colors = require('colors');

// Import dotenv configuration
const dotenv = require('dotenv').config();

// Import the connectDB function first before calling it
const connectDB = require('./config/db');
connectDB();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CreatePath = require('./routes/accountRoute');
const loginPath = require('./routes/accountRoute');
const contactPath = require('./routes/contactRoute');
const messagePath = require('./routes/message');

const { handleErrors } = require('./middleware/errMid');

// Move the connection string to the connectDB function or use process.env for security
// Load the connection string from the .env file
const connectionString = process.env.MONGODB_URI || "https://localhost:5000";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define your routes and APIs here
app.use(loginPath);
app.use(contactPath);
app.use('/api/message', messagePath);
app.use('/me', require('./routes/accountRoute'));

app.use(handleErrors);
app.use(CreatePath);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
