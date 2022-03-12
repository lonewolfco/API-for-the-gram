const express = require('express');
const db = require('./config/connection');
// Require model -- TODO: update Model Name
const { ModelName } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a new document
