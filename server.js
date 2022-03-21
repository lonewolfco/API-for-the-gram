const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api');

// // Require model -- TODO: update Model Name
// const { User } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`✅ API running on port ${PORT}!`);
    });
  });
  