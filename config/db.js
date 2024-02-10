// const mongoose = require("mongoose");

// const connDB = async () => {
//   const uri = process.env.MONGODB_URL;

//   try {
//     await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// };

// module.exports = { connDB };


// const mongoose = require("mongoose");
// require('dotenv').config();

// const connDB = async () => {
//   const uri = process.env.MONGODB_URL;

//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,    // Remove this line (deprecated)
//       useUnifiedTopology: true // Remove this line (deprecated)
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// };

// module.exports = { connDB };


const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

exports.connectToMongoDB=()=> {
  try {
    // Connect to MongoDB using the new connection string format and options
    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true, // Remove this option, it's deprecated
      useUnifiedTopology: true // Remove this option, it's deprecated
    });
    
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


