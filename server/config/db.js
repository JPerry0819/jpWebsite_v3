// const mongoose = require('mongoose');

// const connectionString = 'mongodb://localhost:27017/jpportfolio';

// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'));
// mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB Atlas');
// });

// mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         // You can perform operations here if needed
//         console.log('MongoDB connection successful');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });

const mongoose = require('mongoose');

// Connection options, including the port (5000 in this case)
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    port: 5000, // Specify the port here
};

// MongoDB connection string
const uri = 'mongodb://localhost/jpportfolio';

// Connect to MongoDB
mongoose.connect(uri, options)
    .then(() => {
        console.log('Connected to MongoDB on port 5000');
        // Your code for interacting with MongoDB goes here
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

