
const { connect, connection } = require('mongoose');


const connectionString = "mongodb+srv://lo-admin:4yck3ivqyWv6cst1@cluster0.isnvl.mongodb.net/gramDB?retryWrites=true&w=majority";

// Wrap Mongoose around local connection to MongoDB
connect(connectionString, 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }
);



module.exports = connection;
