
const { connect, connection } = require('mongoose');

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString = "mongodb+srv://lo-admin:4yck3ivqyWv6cst1@cluster0.isnvl.mongodb.net/gramDB?retryWrites=true&w=majority";

  // Wrap Mongoose around local connection to MongoDB
connect(connectionString, 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }
);


// const { MongoClient } = require('mongodb');


// const uri = "mongodb+srv://lo-admin:4yck3ivqyWv6cst1@cluster0.isnvl.mongodb.net/gramDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, 
//   { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = connection;
