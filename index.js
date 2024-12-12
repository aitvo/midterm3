// Required packages
const express = require("express");
const app = express();
require('dotenv').config();
const multer = require("multer");
const upload = multer();
const path = require('path');  

// Add database package and connection string (can remove ssl)
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 2
});

// Set up EJS
app.set('view engine', 'ejs');
// View Public Folder
app.use(express.static('public'));
app.use(express.static('project'));
//Parse JSON
app.use(express.json()); 

// Body parser middleware
app.use(express.urlencoded({ extended: true }));  // Added middleware for parsing form data

// Start listener
app.listen(process.env.PORT || 3001, () => {
    console.log("Server started (http://localhost:3001/) !");
});

// Index path
app.get('/', (req, res) => {
  res.send("Hello, World!");
});
